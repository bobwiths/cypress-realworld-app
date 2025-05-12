class TransactionHistoryPage{
    selectorsList(){
        const selectors = {
            transactionHistory: "[href='/personal']",
            noTransactionsMessage: "[data-test='empty-list-header']"
        }

        return selectors
    }
    accessTransactionHistory(){
        cy.get(this.selectorsList().transactionHistory).click()
        cy.get(this.selectorsList().noTransactionsMessage)
    }
}

export default TransactionHistoryPage