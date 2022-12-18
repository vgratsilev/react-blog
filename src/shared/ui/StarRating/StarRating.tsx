import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import { useTranslation } from 'react-i18next';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface IStarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
    showEditBtn?: boolean;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: IStarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0, showEditBtn = true } = props;
    const { t } = useTranslation();
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const onEditButtonClick = useCallback(() => {
        setIsSelected(false);
        setCurrentStarsCount(0);
    }, []);

    return (
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    key={starNumber}
                    Svg={StarIcon}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.selected]: isSelected,
                        },
                        [
                            cls.normal,
                            // currentStarsCount >= starNumber ? cls.hovered : cls.normal
                        ],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
            {showEditBtn && (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onEditButtonClick}
                    className={cls.edtBtn}
                >
                    {t('StarRatingEditBtnText')}
                </Button>
            )}
        </div>
    );
});
