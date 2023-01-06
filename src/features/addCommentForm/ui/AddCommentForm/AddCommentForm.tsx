import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    TReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
    // getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface IAddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: TReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo((props: IAddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text.trim() || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                maxWidth
                justify={'between'}
                align={'center'}
                className={classNames(cls.addCommentForm, {}, [className])}
                data-testid={'AddCommentForm'}
            >
                <Input
                    className={cls.input}
                    label={t('InputNewCommentLabel')}
                    value={text}
                    onChange={onCommentTextChange}
                    data-testid={'AddCommentForm.Input'}
                />
                <Button
                    onClick={onSendHandler}
                    data-testid={'AddCommentForm.Button'}
                >
                    {t('InputNewCommentSendBtn')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});
