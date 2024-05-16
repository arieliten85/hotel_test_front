describe("Navogation", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:5173");
  });
  it("Navbar should render correctly", () => {
    cy.wait(2000);
    cy.get('[data-test="header"]').should("be.visible");
  });

  describe("Navigation to register and login pages correctly", () => {
    it("should navigate to Register page", () => {
      cy.get('[data-test="link-register"]').should("be.visible");
      cy.get('[data-test="link-register"]').click();
      cy.wait(2000);
      cy.url().should("include", "/register");

      cy.wait(2000);
      cy.get('[data-test="link-login"]').should("be.visible");
      cy.get('[data-test="link-login"]').click();
      cy.wait(2000);
      cy.url().should("include", "/login");
    });
  });
});
