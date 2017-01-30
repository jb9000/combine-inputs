// This object converts arrays to objects
// Sample input: [[name: James Harden],[points: 27],[assists: 13],[rebounds: 10]]
// Sample output: {{name: 'James Harden', points: 27, assists: 13, rebounds: 10}}

var createObject = {
  convert: function(arr) {
    var newObject: {},
    Array.from(arr).forEach(function(x) {
      this.newObject[x[0]] = x[1];
    });
  }
};

// This object runs a function when the HTML Convert button is clicked

var handlers = {
  convert: function() {
    var arrayInput = document.getElementById('arrayInput');
    createObject.convert(arrayInput.value);
    view.displayObject;
  }
};

// This object displays the newly created object on the page

var view = {
  displayObject: function() {
    var displayDiv = document.getElementById('output');
    displayDiv.textContent = newObject;
  }
};
