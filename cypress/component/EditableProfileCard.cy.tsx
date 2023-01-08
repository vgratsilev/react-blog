import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const USER_ID = '1';
const providerOptions = {
    initialState: {
        user: {
            authData: { id: USER_ID },
        },
    },
};

describe('EditableProfileCard.cy.tsx', () => {
    it('Load', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={providerOptions}>
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
        );

        // test for profile card
    });
});
