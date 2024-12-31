// Constants
const dynamicSelector = (formName, attr, value) => `nb-card:contains('${formName}') [${attr}='${value}']`;

// Class
class dynamicFormLayout {
    dynamicForm(formName, attr, value, inputValue) {
        cy.get(dynamicSelector(formName, attr, value))
            .type(inputValue);
    }
    dynamicCheckbox(formName, attr, value, option) {
        return cy.get(dynamicSelector(formName, attr, value))
        .eq(option)
        .check({ force: true });
    }
}

// Export
export default new dynamicFormLayout();
