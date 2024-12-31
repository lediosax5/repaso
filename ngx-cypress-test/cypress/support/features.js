// Constants
const cForms = "Forms";
const cFormsLayouts = "Form Layouts";
const cFormsDate = "Datepicker";

// Class
class features{
    forms (){
        cy.contains(cForms).click();
    }
    formsLayouts (){
        cy.contains(cFormsLayouts).click();
    }
    formsDate (){
        cy.contains(cFormsDate).click();
    }
}

// Export
export default new features()
