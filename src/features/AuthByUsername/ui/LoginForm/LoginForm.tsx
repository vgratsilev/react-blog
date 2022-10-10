import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                className={cls.input}
                label={t('InputUsername')}
                autofocus
            />
            <Input
                className={cls.input}
                label={t('InputPassword')}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
