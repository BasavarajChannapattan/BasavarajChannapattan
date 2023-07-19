Feature: Search functionality

  Scenario: Searching for a product
    Given I am on the homepage
    When I search for "laptop"
    Then I should see search results
