// Constants
const cGridEmail = '[data-cy="imputEmail1"]';
const cGridPass = "#inputPassword2";
const cGridCheckboxs = "nb-card:contains('Using the Grid') [type='radio']";
const cGridBtn = "nb-card:contains('Using the Grid') [type='submit']";
const cBasicEmail = "input#exampleInputEmail1";
const cBasicPass = "input#exampleInputPassword1";
const cbasicCheckboxs = "nb-card:contains('Basic form') [type='checkbox']";
const cbasicBtn = "nb-card:contains('Basic form') [type='submit']";

// Class
class formLayouts{
    gridEmail(email) {
        cy.get(cGridEmail)
            .should("have.attr", "placeholder", "Email")
            .type(email);
    }
    gridPass(pass) {
        cy.get(cGridPass)
            .should("have.attr", "placeholder", "Password")
            .type(pass);
    }
    gridCheckboxs(option) {
        return cy.get(cGridCheckboxs)
            .eq(option)
            .check({ force: true });
    }
    gridBtn() {
        cy.get(cGridBtn)
            .should("have.prop", "tagName", "BUTTON")
            .click();
    }
    basicEmail(email) {
        cy.get(cBasicEmail)
            .should("have.attr", "placeholder", "Email")
            .type(email);
    }
    basicPass(pass) {
        cy.get(cBasicPass)
            .should("have.attr", "placeholder", "Password")
            .type(pass);
    }
    basicCheckboxs() {
        return cy.get(cbasicCheckboxs)
            .check({ force: true });
    }
    basicBtn() {
        cy.get(cbasicBtn)
            .should("have.prop", "tagName", "BUTTON")
            .click();
    }
}

// Export
export default new formLayouts()
