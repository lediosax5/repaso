/// <reference types="cypress" />

import features from "../support/features";
import dynamicFormLayout from "../support/pages/dynamicFormLayout";
import formLayouts from "../support/pages/formLayouts";
import formDatepicker from '../support/pages/formDatepicker';

describe('Basic, grid, inline, block, horizontal and labels logins with validations, POM, hooks and fixtures', () => {
    let users
    let recipi

    beforeEach('Users data and redirect', () => {
        cy.fixture('dataUsers').then(datos => {
            users = datos;
        });
        cy.fixture('dataRecipi').then(datos => {
            recipi = datos;
        });

        cy.visit('');
        features.forms();
        features.formsLayouts();
    });

    it('Grid login with validations', () => {
        formLayouts.gridEmail(users.a.email);
        formLayouts.gridPass(users.a.password);
        formLayouts.gridCheckboxs(1).should("be.checked");
        formLayouts.gridBtn();
    });

    it('Basic login with validations', () => {
        formLayouts.basicEmail(users.b.email);
        formLayouts.basicPass(users.b.password);
        formLayouts.basicCheckboxs();
        formLayouts.basicBtn();
    });
    
    it('Dynamic login with validations', () => {
        dynamicFormLayout.dynamicForm('Horizontal form', 'type', 'email', users.a.email);
        dynamicFormLayout.dynamicForm('Using the Grid', 'type', 'email', users.b.email);
        dynamicFormLayout.dynamicForm('Basic form', 'type', 'email', users.c.email);
        dynamicFormLayout.dynamicForm('Horizontal form', 'type', 'password', users.a.password);
        dynamicFormLayout.dynamicForm('Using the Grid', 'type', 'password', users.b.password);
        dynamicFormLayout.dynamicForm('Basic form', 'type', 'password', users.c.password);
        dynamicFormLayout.dynamicCheckbox('Horizontal form', 'type', 'checkbox', 0);
        dynamicFormLayout.dynamicCheckbox('Basic form', 'type', 'checkbox', 0);
        dynamicFormLayout.dynamicCheckbox('Using the Grid', 'type', 'radio', 0);
        dynamicFormLayout.dynamicForm('Block form', 'type', 'email', users.a.email);
        dynamicFormLayout.dynamicForm('Block form', 'placeholder', 'First Name', users.a.name);
        dynamicFormLayout.dynamicForm('Block form', 'placeholder', 'Last Name', users.a.lastName);
        dynamicFormLayout.dynamicForm('Block form', 'placeholder', 'Website', users.a.website);
        dynamicFormLayout.dynamicForm('Form without labels', 'placeholder', 'Recipients', recipi.email1.recipients[0]);
        dynamicFormLayout.dynamicForm('Form without labels', 'placeholder', 'Subject', recipi.email1.subject);
        dynamicFormLayout.dynamicForm('Form without labels', 'placeholder', 'Message', recipi.email1.message);
        dynamicFormLayout.dynamicForm('Inline form', 'placeholder', 'Email', users.c.email);
        dynamicFormLayout.dynamicForm('Inline form', 'placeholder', 'Jane Doe', users.c.name);
        dynamicFormLayout.dynamicCheckbox('Inline form', 'type', 'checkbox', 0);
    });
});

describe('Datepickers', () => {
    beforeEach('Redirect', () => {
        cy.visit('');
        features.forms();
        features.formsDate();
    });

    it.only('Common dynamic datepicker', () => {
        formDatepicker.openDatepicker('Common Datepicker');
        const dateToAssert = formDatepicker.selectFutureDate(500);
        formDatepicker.assertDate('Common Datepicker', dateToAssert);
    });
});
