import { ReactNode } from 'react';
import { Portal } from '../../../Portal/Portal';
import { ModalLayout } from '../ModalLayout/ModalLayout';
import { useMount } from '../../lib/useMount';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
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
