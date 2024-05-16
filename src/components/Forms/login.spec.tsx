describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should display login form and submit successfully", () => {
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get('[data-test="error-server"]')
      .should("be.visible")
      .contains("User not found");
  });

  it("should  ", () => {
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("pass");
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get('[data-test="error-field-form"]')
      .should("be.visible")
      .contains("Password must be at least 6 characters");
  });
});
