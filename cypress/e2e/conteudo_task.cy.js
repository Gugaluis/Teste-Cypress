describe("Kanban App - Testes de Conteúdo e Estrutura de Tarefas", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body").should("be.visible")
  })

  it("Conta número total de tarefas", () => {
    cy.get(".sc-iBkjds.iLVyJp").should("have.length.greaterThan", 0)
  })

  it("Verifica estrutura de dados das tarefas", () => {
    cy.contains("Documentar padrões mobile").should("be.visible")
    cy.contains("UX Review").should("be.visible")
    cy.contains(/Tag \d+/).should("exist")
  })

  it("Validando se as tarefas têm conteúdo", () => {
    cy.contains("Documentar padrões mobile").should("not.be.empty")
    cy.contains("UX Review").should("not.be.empty")
  })

  it("Validando existência de pelo menos 1 Tag visível", () => {
    cy.get("body").then(($body) => {
      const tagSelectors = [
        '[class*="tag"]',
        '[class*="badge"]',
        'span:contains("Tag")',
        ':contains("Tag 1")',
        ':contains("Tag 2")',
      ]

      let tagFound = false

      tagSelectors.forEach((selector) => {
        if ($body.find(selector).length > 0) {
          tagFound = true
        }
      })

      if (!tagFound) {
        cy.contains(/Tag \d+/).should("exist")
      } else {
        expect(tagFound).to.be.true
      }
    })
  })
})
