Feature: login test for facebook


Scenario: checking login functionality

Given user is already on facebook loginpage
When user enter usename
Then user enter password
Then user click on login button
