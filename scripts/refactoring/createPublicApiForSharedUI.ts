/**
 * run: with ts-node ./scripts/refactoring/createPublicApiForSharedUI.ts
 * check files changed: npm run lint:ts
 * fix lint errors: npm run lint:ts:fix
 */

import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedUIDirectory = project.getDirectory(
    path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'),
);
const componentsDirs = sharedUIDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
    if (layers.some((layer) => value.startsWith(layer))) {
        return true;
    }

    return false;
}

componentsDirs?.forEach((directory) => {
    // console.log(directory.getBaseName());
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    // console.log(indexFile?.getBaseName());

    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}';
        `;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUISlice = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUISlice) {
            // console.log(value);
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            // console.log(result);
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
