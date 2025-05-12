class TransactionHistoryPage{
    selectorsList(){
        const selectors = {
            transactionHistory: "[href='/personal']",
            noTransactionsMessage: "[data-test='empty-list-header']",
            transactionsMessage: "[data-test='transaction-sender-J5Fd3dlBEBu']"
        }

        return selectors
    }
    accessTransactionHistoryEmpty(){
        cy.get(this.selectorsList().transactionHistory).click()
        cy.get(this.selectorsList().noTransactionsMessage)
    }
    accessTransactionHistory(){
        cy.get(this.selectorsList().transactionHistory).click()
        cy.get(this.selectorsList().transactionsMessage)
    }
}

export default TransactionHistoryPage