Feature: Home Page
    As a user
    I want to be able to launch the application
    So that I can access the home page and use the features

  Background: Launching home page
    Given I am on the home page

  @smoke @homepageLanding
  Scenario: Validate home page title and URL
    Then I should see the home page title
    And I should see the home page URL

  @smoke @homepageMenu
  Scenario: Validate "<MENU_ITEM>" menu item on home page
    When I should see the home page URL
    Then I should see the "<MENU_ITEM>" menu item availabe

    Examples:
      | MENU_ITEM |
      | Products  |
      | Cart      |
      | Login     |
