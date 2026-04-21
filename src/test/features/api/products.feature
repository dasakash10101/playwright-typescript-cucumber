@api @e2e
Feature: Products API

    As a quality assurance engineer
    I want to test the Products API endpoints

    @getProductsAPI
    Scenario: Get all product details
        When I send a GET request
        Then The response status code should be 200
        And The response should contain a list of products

    @postProductsAPI
    Scenario: Post to all product details
        When I send a POST request
        Then The response status code should be 405
        And The response should contain a message