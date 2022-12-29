import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: IAppImageProps) => {
    const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.alt = alt;
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [alt, src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            {...otherProps}
            src={src}
            alt={alt}
            className={className}
        />
    );
});
