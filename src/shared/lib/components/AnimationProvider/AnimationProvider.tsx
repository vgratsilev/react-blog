import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type TSpringType = typeof import('@react-spring/web');
type TGestureType = typeof import('@use-gesture/react');

interface IAnimationContextPayload {
    Gesture?: TGestureType;
    Spring?: TSpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContextPayload>({});

interface IAnimationProviderProps {
    children?: ReactNode;
}

export const useAnimationLibs = () =>
    useContext(AnimationContext) as Required<IAnimationContextPayload>;

const getAsyncAnimationModules = () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const AnimationProvider = (props: IAnimationProviderProps) => {
    const { children } = props;
    const SpringRef = useRef<TSpringType>();
    const GestureRef = useRef<TGestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const providerValue = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return <AnimationContext.Provider value={providerValue}>{children}</AnimationContext.Provider>;
};
