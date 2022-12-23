import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo } from 'react';

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
    theme?: ButtonTheme;
}

export const LangSwitcher = memo((props: ILangSwitcherProps) => {
    const { className, short, theme } = props;

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={theme || ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {short ? t('TranslateShort') : t('Translate')}
        </Button>
    );
});
