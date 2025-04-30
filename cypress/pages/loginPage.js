class LoginPage{
    selectorsList() {
        const selectors = {
            usernameField: "#username",
            passwordField: "#password",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",            
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit("/signin")
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage