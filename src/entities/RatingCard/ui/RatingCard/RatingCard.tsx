import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card/Card';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { isMobileDevice } from '@/shared/lib/utils/isMobileDevice/isMobileDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import cls from './RatingCard.module.scss';

interface IRatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: IRatingCardProps) => {
    const { className, title, feedbackTitle, onCancel, onAccept } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (feedbackTitle) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [feedbackTitle, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const closeHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const modalContent = (
        <>
            <Text
                title={feedbackTitle}
                align={TextAlign.CENTER}
                className={cls.modalFeedbackTitle}
            />
            <Input
                label={t('FeedbackLabel')}
                className={cls.feedbackInput}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack
                align={'center'}
                gap={'8'}
            >
                <Text title={title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                />
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    lazy
                >
                    {isMobileDevice() ? (
                        <Drawer
                            isOpen={isModalOpen}
                            onClose={closeHandler}
                        >
                            <VStack
                                gap={'16'}
                                maxWidth
                            >
                                {modalContent}
                                <Button
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                    fullWidth
                                >
                                    {t('FeedbackSendBtnText')}
                                </Button>
                            </VStack>
                        </Drawer>
                    ) : (
                        <Modal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            lazy
                        >
                            <VStack
                                gap={'32'}
                                maxWidth
                            >
                                {modalContent}
                                <HStack
                                    maxWidth
                                    gap={'16'}
                                    justify={'end'}
                                >
                                    <Button
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={closeHandler}
                                    >
                                        {t('FeedbackCloseBtnText')}
                                    </Button>
                                    <Button onClick={acceptHandler}>
                                        {t('FeedbackSendBtnText')}
                                    </Button>
                                </HStack>
                            </VStack>
                        </Modal>
                    )}
                </Modal>
            </VStack>
        </Card>
    );
});
