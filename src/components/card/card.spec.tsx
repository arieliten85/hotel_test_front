describe("Navigation", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:5173");
  });

  it("Card should render correctly", () => {
    cy.get('[data-test="card"]').should("be.visible");
  });

  it("should generate the code correctly and navigate to my codes", () => {
    cy.get('[data-test="button-generate-code"]').should("be.visible");
    cy.get('[data-test="button-generate-code"]:first').click({
      multiple: true,
    });
    cy.get(".Toastify__toast").should("be.visible");
    cy.wait(2000);

    cy.get('[data-test="card__body"]').should("be.visible");
    cy.get('[data-test="card__body"]:first').click({
      multiple: true,
    });
    cy.url().should("include", "/codes");
  });
});
