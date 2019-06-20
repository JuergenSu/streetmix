const PROMPT_MESSAGE = 'my custom message'

context('User Deleting Items on a Street', () => {
  let polyfill
  before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'
    cy.request(polyfillUrl)
      .then((response) => {
        polyfill = response.body
      })

    cy.server()
    cy.route('POST', '/api/v1/streets*', 'fixture:street-post-response').as('streetPost')
    cy.route('POST', '/api/v1/streets/images/*', 'fixture:street-image-post-response').as('streetImagePut')
    cy.route('PUT', '/api/v1/streets/*', 204).as('streetPut')
    cy.visit('', {
      onBeforeLoad (win) {
        cy.stub(win, 'prompt').returns(PROMPT_MESSAGE)
        delete win.fetch
        // since the application code does not ship with a polyfill
        // load a polyfilled "fetch" from the test
        win.eval(polyfill)
        win.fetch = win.unfetch
      }
    })
  })

  beforeEach(() => {
    cy.reload()
  })
  it('lets users delete an item', () => {
    cy.get('.welcome-panel', { timeout: 10000 }).contains('Welcome to Streetmix')
    cy.get('.welcome-panel>button.close').click()

    // let's delete a thing
    cy.get('.segment-canvas-container').first().trigger('mouseover')
    cy.get('button').contains('Remove').first().click()
    cy.contains('The segment has been removed').should('be.visible')
  })
  it('lets users delete all items', () => {
    cy.get('.welcome-panel', { timeout: 10000 }).contains('Welcome to Streetmix')
    cy.get('.welcome-panel>button.close').click()

    // let's delete all the things
    cy.get('.segment-canvas-container').first().trigger('mouseover')
    cy.get('body').type('{shift}', { release: false })
    cy.get('button').contains('Remove').first().click()
    cy.contains('All segments have been removed.').should('be.visible')
  })
})
