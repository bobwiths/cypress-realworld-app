class HomePage{
    selectorsList() {
        const selectors = {
            sideNavHome: "[data-test='sidenav-home']",
        }

        return selectors

    }

    checkHomePage(){
        cy.get(".NavBar-logo")
    }
}

export default HomePage