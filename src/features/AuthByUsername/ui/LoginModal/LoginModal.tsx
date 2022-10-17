import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={className}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
