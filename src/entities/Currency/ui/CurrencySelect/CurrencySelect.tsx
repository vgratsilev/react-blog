import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const currencyOptions = Object.keys(Currency).map((item) => ({ value: item, content: item }));

export const CurrencySelect = memo((props: ICurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('CurrencyLabel')}
            items={currencyOptions}
            value={value}
            defaultValue={t('SelectCurrencyDefaultValue')}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
