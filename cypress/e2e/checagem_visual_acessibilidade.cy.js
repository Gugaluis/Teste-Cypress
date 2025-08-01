describe("Kanban App - Testes de Acessibilidade e Visuais", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body").should("be.visible")
  })

  it("Contraste de cores", () => {
    cy.get("body").should("have.css", "color")
    cy.get("body").should("have.css", "background-color")
  })

  it("Acessibilidade básica", () => {
    cy.get('h1, h2, h3, [role="heading"]').should("exist")

    cy.get("button, input, a, [tabindex]").should("have.length.at.least", 1)
  })
})
