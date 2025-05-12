import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage"
import CreateAccountPage from '../pages/createAccountPage'
import TransactionHistoryPage from '../pages/transactionHistoryPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const createAccountPage = new CreateAccountPage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Transaction History Empty Test', () => {
    it('Create Account - Success', () => {
        loginPage.accessLoginPage()
        createAccountPage.createAccountButton()
        createAccountPage.fillSignUpPage(userData.newUser.firstName, userData.newUser.lastName, userData.newUser.username, userData.newUser.password, userData.newUser.confirmPassword,)
        loginPage.accessLoginPage()
    })   
    it('Check Transaction History - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.newUser.username, userData.newUser.password)
        homePage.checkHomePage()
        transactionHistoryPage.accessTransactionHistory()
    })

})