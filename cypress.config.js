const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,      //oculta token presente no Header
      requestMode: true,          //adiciona o comando cy.api (um "alias" para o comando cy.request) permanecendo ativo com o request.mode: true. 
    },
    experimentalRunAllSpecs: true, 
  },
  fixturesFolder: false,
  video: false,  

})
