import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage"
import CreateAccountPage from '../pages/createAccountPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const createAccountPage = new CreateAccountPage()

describe('Create Account Test', () => {
    it('Create Account - Success', () => {
        loginPage.accessLoginPage()
        createAccountPage.createAccountButton()
        createAccountPage.fillSignUpPage(userData.newUser.firstName, userData.newUser.lastName, userData.newUser.username, userData.newUser.password, userData.newUser.confirmPassword,)
        loginPage.accessLoginPage()
    })  
    it('Login New Account - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.newUser.username, userData.newUser.password)
        homePage.checkHomePage({force: true})
    })
    it.skip('Create Account - Fail', () => {
        loginPage.accessLoginPage()

        
      })
})