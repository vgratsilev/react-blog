import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first parameter', () => {
        expect(classNames('mainClass')).toBe('mainClass');
    });

    test('with first parameter and array(third parameter)', () => {
        const expected = 'mainClass second third';
        expect(classNames('mainClass', {}, ['second', 'third'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class1 class4 class2';
        expect(
            classNames(
                'class1',
                {
                    class2: true,
                    class3: false,
                },
                ['class4'],
            ),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'class1 class4 class2';
        expect(
            classNames(
                'class1',
                {
                    class2: true,
                    class3: undefined,
                },
                ['class4'],
            ),
        ).toBe(expected);
    });
});
