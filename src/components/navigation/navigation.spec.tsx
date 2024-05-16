describe("Navogation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("Navbar should render correctly", () => {
    cy.viewport(1280, 720);
    cy.wait(2000);
    cy.get('[data-test="header"]').should("be.visible");
  });

  describe("Navigation", () => {
    it("should navigate to Register page", () => {
      cy.viewport(1280, 720);
      cy.get('[data-test="link-register"]').should("be.visible");
      cy.get('[data-test="link-register"]').click();
      cy.wait(2000);
      cy.url().should("include", "/register");
    });
  });

  describe("Navigation", () => {
    it("should navigate to Login page", () => {
      cy.viewport(1280, 720);
      cy.get('[data-test="link-login"]').should("be.visible");
      cy.get('[data-test="link-login"]').click();
      cy.wait(2000);
      cy.url().should("include", "/login");
    });
  });
});
