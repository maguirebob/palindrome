module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
// for example:
// let phrase = new Phrase("Hello, world!!");
function Phrase(content) {
  this.content = content; 

    // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // for example:
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Method: palindrome - Returns true if the string is a palindrome.
  this.palindrome = function Palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}