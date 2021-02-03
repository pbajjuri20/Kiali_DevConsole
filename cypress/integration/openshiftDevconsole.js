  // type definitions for Cypress object "cy"
  /// <reference types="cypress" />
  
  describe('Openshift Dev Console Test', function() {
    it('Visits the OPenshift UI Page and check the Interactions menu items', function() {
    //Visit the OPenshift UI Website
    cy.visit("openshift-hostname/");
    cy.get(':nth-child(1) > .pf-c-button').click()
    cy.get('#inputUsername').type('username')
    cy.get('#inputPassword').type('password')
    cy.get('.pf-c-button').click()
    cy.get('.oc-nav-header').click()
    cy.get(':nth-child(2) > .pf-c-dropdown__menu-item > .pf-c-title').click()
    cy.get('[data-test=tour-step-footer-secondary]').click()
    cy.get('.pf-c-nav__item.pf-m-current > .pf-c-nav__link').click()
    cy.get('.pf-c-form-control').type('istio-system')
    cy.get('.co-resource-item > .pf-c-button').click()
    cy.wait(3000)
    cy.get('.co-external-link').click()
    cy.wait(3000)
    cy.get('[data-id="8456072b-f542-40d2-b3c3-948431d32760"] > :nth-child(1) > .odc-base-node > .odc-decorator__link > .odc-decorator > .odc-decorator__bg').click()
