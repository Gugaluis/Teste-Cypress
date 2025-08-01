describe("Kanban App - Testes de Interação com a UI", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body", { timeout: 10000 }).should("be.visible")
  })

  it("Deve alternar o tema ao clicar no toggle", () => {
    cy.get('input[type="checkbox"][role="switch"]')
      .should("exist")
      .invoke("attr", "aria-checked")
      .then((initialValue) => {
        cy.get('input[type="checkbox"][role="switch"]').click({ force: true })
        cy.wait(300)
        cy.get('input[type="checkbox"][role="switch"]')
          .invoke("attr", "aria-checked")
          .should("not.equal", initialValue)
      })
  })

  it("Toggle de tema deve estar acessível e configurado corretamente", () => {
    cy.get('input[type="checkbox"][role="switch"]')
      .should("exist")
      .and("have.attr", "aria-checked")
      .and("match", /^(true|false)$/)
  })

  it("Deve exibir o texto 'Adicionar Tarefa' visível na UI", () => {
    cy.contains("Adicionar Tarefa")
      .should("exist")
      .and("be.visible")
  })

  it("Deve exibir o texto 'Adicionar outra lista' visível na UI", () => {
    cy.contains("Adicionar outra lista")
      .should("exist")
      .and("be.visible")
  })
})
