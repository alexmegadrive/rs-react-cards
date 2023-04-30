describe("General app tests", () => {
  it("Should navigate through pages", () => {
    cy.visit("/");
    cy.contains(/employees/i).click();
    cy.url().should("include", "/employees");
    cy.contains(/products/).click();
    cy.url().should("include", "/products");
  });

  it("Should redirect to 404 page", () => {
    cy.visit("/test");
    cy.get("#root").should("contain", "OOPS 404 ERROR");
  });
});
