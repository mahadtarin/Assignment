Feature: The Temperature Check Website
  
  Scenario: Reaching the homepage
    Given User is on the home page
    When User reads the temperarture 
    Then User should verify the temperature
    Then User clicks the desired button

#   Scenario: You have selected the moiturizer button 
#     Given User is on Moisturizers page
#     When User adds the moisturizers 
#     Then User should go to the cart
  
  Scenario: You have selected the sunscreen button 
    Given User is on the sunscreen page
    When User adds the sunscreen
    Then User should go to the cart

  Scenario: You are viewing the cart 
    Given User is on the Cart page
    When User goes through the cart  
    Then User should verify the Total Price and click the pay with card button

  Scenario: You need to enter the credetials  
    Given User is on charging menu
    When User adds the credentials 
    Then User presses the Pay button