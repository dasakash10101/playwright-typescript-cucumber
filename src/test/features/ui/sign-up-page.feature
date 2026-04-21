@signUpPage @ui @e2e
Feature: UI - Sign Up / Register

    As a new user
    I want to be able to sign up for an account
    So that I can access the application's features and services

    Background: Launching home page
        Given I am on the home page

    @smoke @signUpSuccess
    Scenario: Successful sign-up with valid credentials
        Given I Navigate to the login-sign-up page
        When I enter valid credentials in sign-up form and submit
        Then I should land on sign up page
        When I fill out the sign up form and submit
        Then I should see the account creation success message
        When I click on continue button
        Then I should land on the home page as signed in user