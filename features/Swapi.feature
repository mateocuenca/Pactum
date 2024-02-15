Feature: Swapi

    In order to keep Swapi api stable
    As a tester
    I want to make sure that everything works as expected

    Scenario: Get A Character With Id 1
        Given I make a GET request to /api/people/1
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a json like
            """
            {
            "data":{
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            }
            }
            """
