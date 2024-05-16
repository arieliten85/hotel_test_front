describe("Register Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/register");
  });

  it("should display error name too short", () => {
    cy.get('input[name="name"]').type("j");
    cy.get('input[name="email"]').type("john@gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get('[data-test="error-field-form"]')
      .should("be.visible")
      .contains("Name is too short");
  });

  it("should display error Invalid email address", () => {
    cy.get('input[name="name"]').type("jhon");
    cy.get('input[name="email"]').type("john.gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get('[data-test="error-field-form"]')
      .should("be.visible")
      .contains("Invalid email address");
  });

  it("should  ", () => {
    cy.get('input[name="name"]').type("jhon");
    cy.get('input[name="email"]').type("john@gmail.com");
    cy.get('input[name="password"]').type("pass");
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get('[data-test="error-field-form"]')
      .should("be.visible")
      .contains("Password must be at least 6 characters");
  });
});
