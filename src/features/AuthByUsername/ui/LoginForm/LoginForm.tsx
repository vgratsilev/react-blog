import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <input
                type={'text'}
                className={cls.input}
            />
            <input
                type={'text'}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
