import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.login()
  })

    //1. pré-condição
  it('successfully', () => {                    
    const project = {                             //template literals
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    //2. ação 
    cy.gui_createProject(project)   //comando customizado para criação do projeto

    //3. resultados esperados
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
