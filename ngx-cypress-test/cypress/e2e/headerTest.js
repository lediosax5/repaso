/// <reference types="cypress" />

import header from "../support/header";

describe('Header', () => {
    beforeEach('Redirect and open list', () => {
        cy.visit('');
        header.colorBtnClick();
    });
    it('Light theme', () => {
        header.colorList('Light');
        header.colorOn('default');
    });
    it('Dark theme', () => {
        header.colorList('Dark');
        header.colorOn('dark');
    });
    it('Cosmic theme', () => {
        header.colorList('Cosmic');
        header.colorOn('cosmic');
    });
    it('Corporate theme', () => {
        header.colorList('Corporate');
        header.colorOn('corporate');
    });
});
