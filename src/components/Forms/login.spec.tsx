describe("Login error field required", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should display login error for missing password", () => {
    cy.get('[data-test="button-login-submit"]').click();

    cy.get('[data-test="error-field-form"]')
      .should("be.visible")
      .contains("Password is required");

    cy.get('[data-test="error-field-form"]')
      .should("be.visible")
      .contains("Email is required");
  });
});
