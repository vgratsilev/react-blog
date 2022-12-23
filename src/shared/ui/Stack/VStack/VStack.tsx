import { Flex, IFlexProps } from '../Flex/Flex';

type TVStackProps = Omit<IFlexProps, 'direction'>;

export const VStack = (props: TVStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex
            {...props}
            align={align}
            direction={'column'}
        />
    );
};
