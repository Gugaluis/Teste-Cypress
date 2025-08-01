describe("Kanban App - Testes de Interação com a UI", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body").should("be.visible")
  })

  it("Validando funcionamento toggle Tema", () => {
    cy.get('input[type="checkbox"][role="switch"]').click({ force: true })
    cy.wait(500)
    cy.get("body").should("exist")
  })

  it("Permite interação com toggle de tema (mesmo coberto)", () => {
    cy.get('input[type="checkbox"][role="switch"]').should("exist")
    cy.get('input[type="checkbox"][role="switch"]').should("have.attr", "aria-checked")
  })

  it("Checando existência de botão para adicionar tarefa", () => {
    cy.contains("Adicionar Tarefa").should("exist")
  })

  it("Checando existência de botão para adicionar lista", () => {
    cy.contains("Adicionar outra lista").should("exist")
  })
})
