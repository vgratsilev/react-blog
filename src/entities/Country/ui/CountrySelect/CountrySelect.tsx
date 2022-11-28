import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface ICountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryOptions = Object.keys(Country).map((item) => ({ value: item, content: item }));

export const CountrySelect = memo((props: ICountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('CountryLabel')}
            items={countryOptions}
            value={value}
            defaultValue={t('SelectCountryDefaultValue')}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
