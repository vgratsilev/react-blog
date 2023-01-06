import { selectByTestId } from '../../helpers/selectByTestId';

describe('User enter profile page', () => {
    let profileId = '';
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Profile loaded successfully', () => {
        cy.get(selectByTestId('ProfileCard.firstname')).should('have.value', 'test');
    });

    it('Edit User Profile', () => {
        const newName = 'new';
        const newLastName = 'lastname';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
});
