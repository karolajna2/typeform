const anagram = require('../anagram.js');
describe("Anagram Functions", function() {

    describe("anagram", function() {

        it("should detect anagram", function() {
            let input = "heart, earth"
            expect(anagram.anagram(input)).toContain("heart - earth (0, 1)");
        });

        it("should detect no anagram", function() {
            let input = "heart1, earth2"
            expect(anagram.anagram(input)).toBeUndefined();
        });

    });

});
