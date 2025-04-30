import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage"

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login Tests', () => {
    it('Login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
    })
})