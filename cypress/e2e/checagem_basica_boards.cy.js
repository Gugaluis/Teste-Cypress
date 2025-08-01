describe("Kanban App - Testes Básicos do Quadro", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body").should("be.visible")
  })

  it("Carrega o título corretamente", () => {
    cy.contains("Quadro Kanban").should("be.visible")
  })

  it('Checa se existem as colunas "To Do", "In Progress" e "Done"', () => {
    cy.contains("To Do").should("be.visible")
    cy.contains("In Progress").should("be.visible")
    cy.contains("Done").should("be.visible")
  })

  it("Valida existência de tarefas nas colunas", () => {
    cy.contains("To Do")
      .parent()
      .parent()
      .within(() => {
        cy.contains("Documentar padrões mobile").should("exist")
      })
    cy.contains("Done")
      .parent()
      .parent()
      .within(() => {
        cy.contains("UX Review").should("exist")
      })
  })

  it("Verifica responsividade das colunas", () => {
    cy.viewport(1280, 720) // Desktop
    cy.contains("To Do").should("be.visible")

    cy.viewport(768, 1024) // Tablet
    cy.contains("To Do").should("be.visible")

    cy.viewport(375, 667) // Mobile
    cy.contains("To Do").should("be.visible")
  })

  it("Carregamento em tempo adequado", () => {
    const start = Date.now()
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.contains("Quadro Kanban")
      .should("be.visible")
      .then(() => {
        const loadTime = Date.now() - start
        expect(loadTime).to.be.lessThan(5000)
      })
  })

  it("Verifica estrutura das colunas", () => {
    const columns = ["To Do", "In Progress", "Done"]

    columns.forEach((column) => {
      cy.contains(column).parent().parent().should("exist").and("be.visible")
    })
  })
})
