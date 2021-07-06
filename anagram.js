function anagram (input) {
    var words = input.split(", ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var alphabetical = word.split("").sort().join("");
        for (var j = 0; j < words.length; j++) {
            if (i === j) {
                continue;
            }
            var other = words[j];
            if (alphabetical === other.split("").sort().join("")) {
               return (word + " - " + other + " (" + i + ", " + j + ")");
            }
        }
    }
}

module.exports ={anagram:anagram}