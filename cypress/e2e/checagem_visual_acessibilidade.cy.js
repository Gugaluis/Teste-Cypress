describe("Kanban App - Acessibilidade e Estrutura Visual", () => {
  const baseUrl = "https://kanban-dusky-five.vercel.app/"

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get("body", { timeout: 15000 }).should("be.visible")
  })

  it("Deve exibir cores visíveis e definidas no body", () => {
    cy.get("body").should(($body) => {
      const bgColor = $body.css("background-color")
      const textColor = $body.css("color")
      expect(bgColor).to.not.be.empty
      expect(textColor).to.not.be.empty
    })
  })

  it("Deve conter títulos visuais e colunas principais do Kanban", () => {
    cy.contains("Quadro Kanban").should("be.visible")
    cy.contains("To Do").should("be.visible")
    cy.contains("In Progress").should("be.visible")
    cy.contains("Done").should("be.visible")
  })

  it("Os cartões devem ser focáveis com tabindex", () => {
    cy.get("[tabindex]").should("have.length.at.least", 1)
    cy.get("[tabindex]").first().focus().should("have.attr", "tabindex")
  })

  it("Não deve conter imagens quebradas ou elementos <img> ausentes", () => {
    cy.get("img").should("have.length", 0)
  })

  it("Não deve conter links (<a>), já que navegação é via SPA", () => {
    cy.get("a").should("have.length", 0)
  })
})
