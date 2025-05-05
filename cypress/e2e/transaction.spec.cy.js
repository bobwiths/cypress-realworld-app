import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage"
import TransactionPage from '../pages/transactionPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const transactionPage = new TransactionPage()

describe('Transaction Tests', () => {
    it('Transaction - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
        transactionPage.accessTransactionPage()
        transactionPage.transactionProcess(userData.fillTransactionSuccess.amount, userData.fillTransactionSuccess.note)
    })
    it('Transaction - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
        transactionPage.accessTransactionPage()
        transactionPage.transactionProcess(userData.fillTransactionFail.amount, userData.fillTransactionFail.note)
    })
})