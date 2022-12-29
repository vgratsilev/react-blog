import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = (props: IProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    let { id } = useParams<{ id: string }>();

    if (!id) {
        if (__PROJECT__ === 'storybook') {
            id = '1';
        } else {
            return <Text text={t('ProfileNotFoundErrorText')} />;
        }
    }

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid={'ProfilePage'}
        >
            <VStack
                gap={'16'}
                maxWidth
            >
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
