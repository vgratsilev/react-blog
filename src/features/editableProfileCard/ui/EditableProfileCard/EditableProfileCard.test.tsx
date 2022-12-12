import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { IProfile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: IProfile = {
    id: '1',
    username: 'admin',
    firstname: 'FirstN',
    lastname: 'LastN',
    city: 'City',
    country: Country.Russia,
    age: 30,
    currency: Currency.USD,
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id={'1'} />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
    });

    test('Change readonly view to edit view', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });

    test('Form data should be restored after cancel', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'test');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'test');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('test');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('test');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('FirstN');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('LastN');
    });

    test('Should show validation error', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.queryByTestId('EditableProfileCard.Error.Text')).not.toBeInTheDocument();

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    });

    test('Should sent PUT request if no validation error', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'test');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('test');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.queryByTestId('EditableProfileCard.Error.Text')).not.toBeInTheDocument();

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
