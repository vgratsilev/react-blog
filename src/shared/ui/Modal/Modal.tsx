import { Portal } from 'shared/ui/Portal/Portal';
import { ReactNode } from 'react';
import { ModalLayout } from './ui/ModalLayout';
import { useMount } from './lib/useMount';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: IModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { mounted } = useMount({ opened: isOpen });

    if (lazy && !mounted) {
        return null;
    }

    return (
        <Portal>
            <ModalLayout
                opened={isOpen}
                onClose={onClose}
                className={className}
            >
                {children}
            </ModalLayout>
        </Portal>
    );
};
