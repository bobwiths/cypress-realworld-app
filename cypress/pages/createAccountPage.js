class CreateAccountPage{
    selectorsList() {
        const selectors = {
            createAccountButton: "[data-test='signup']",
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword",
            signUpButton: "[data-test='signup-submit']",
            wrongPasswordAlert: "#confirmPassword-helper-text"
        }

        return selectors
    }

    createAccountButton() {
        cy.get(this.selectorsList().createAccountButton).click()
        cy.location('pathname').should('equal', '/signup')
    }
    fillSignUpPage(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().signUpButton).click({force: true})
    }
    createAccountMessage(){
        cy.get(this.selectorsList().wrongPasswordAlert)
    }
}

export default CreateAccountPage