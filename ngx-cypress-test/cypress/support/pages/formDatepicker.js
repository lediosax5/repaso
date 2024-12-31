// Constants
const cDatepickerInput = (formName) => `nb-card:contains("${formName}") input`;
const cDayCell = '.day-cell:not(.bounding-month)';
const cCalendarNavigation = 'nb-calendar-navigation';
const cNextMonthButton = '[data-name="chevron-right"]';

// Class
class formDatepicker {
    openDatepicker(formName) {
        cy.get(cDatepickerInput(formName)).click();
    }
    selectDate(day) {
        cy.get(cDayCell).contains(day).click();
    }
    assertDate(formName, expectedValue) {
        cy.get(cDatepickerInput(formName)).should('have.value', expectedValue);
    }
    selectFutureDate(daysToAdd) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + daysToAdd);
        const day = targetDate.getDate();
        const monthShort = targetDate.toLocaleString('en-US', { month: 'short' });
        const year = targetDate.getFullYear();
        const expectedValue = `${monthShort} ${day}, ${year}`;

        const navigateToTargetMonth = () => {
            cy.get(cCalendarNavigation)
                .invoke('attr', 'ng-reflect-date')
                .then((currentDate) => {
                    if (!currentDate.includes(monthShort) || !currentDate.includes(year)) {
                        cy.get(cNextMonthButton).click();
                        navigateToTargetMonth();
                    }
                });
        };

        navigateToTargetMonth();
        this.selectDate(day);
        return expectedValue;
    }
}

// Export
export default new formDatepicker();
