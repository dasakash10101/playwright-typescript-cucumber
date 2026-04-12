@loginPage
Feature: Login Page
    As a user
    I want to be able to log in to the application
    So that I can access my account and use the features

  @smoke @loginSuccess
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard
#   @smoke @loginFailure
#   Scenario: Unsuccessful login with invalid credentials
#     Given I am on the login page
#     When I enter invalid credentials
#     And I click the login button
#     Then I should see an error message indicating invalid credentials
#   @smoke @loginEmpty
#   Scenario: Unsuccessful login with empty fields
#     Given I am on the login page
#     When I leave the username and password fields empty
#     And I click the login button
#     Then I should see an error message indicating that fields cannot be empty
