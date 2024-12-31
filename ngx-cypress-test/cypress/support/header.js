// Constants
const cColorBtn = "nav nb-select";
const cColorList = ".options-list";
const cColorOn = (color) => `[ng-reflect-selected='${color}']`;

// Class
class header{
    colorBtnClick (){
        cy.get(cColorBtn).click();
    }
    colorList(color){
        cy.get(cColorList)
          .children()
          .filter(`:contains("${color}")`)
          .click();
    }
    colorOn (color){
        cy.get(cColorOn(color)).should('exist');
    }
}

// Export
export default new header()
