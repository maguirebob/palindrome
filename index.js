// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content; 

  // Method: processor - Returns the passed string processed to lowercase.
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Method: Returns the content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Method: palindrome - Returns true if the string is a palindrome.
  this.palindrome = function Palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Method: louder - Returns the content in uppercase.
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Method: Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
}

TranslatedPhrase.prototype = new Phrase();
