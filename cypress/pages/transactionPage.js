class TransactionPage{
    selectorsList() {
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            selectContact: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "[data-test='transaction-create-amount-input']",
            noteField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            transactionAlert: "[role='alert']",
        }

        return selectors
    }
    accessTransactionPage(){
        cy.visit('/transaction/new')
    }
    transactionProcess(amount, note){
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().transactionAlert)
    }
}

export default TransactionPage