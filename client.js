// Sample input: [[name, James Harden],[points, 27],[assists, 13],[rebounds, 10]]
// Sample output: {name: 'James Harden', points: 27, assists: 13, rebounds: 10}

// This object runs a function when the HTML Convert button is clicked

var handlers = {
  convert: function() {

    var arrayInput = document.getElementById('arrayInput').value;
    
    var newObject = {};
    
    Arra.from(arrayInput).forEach (function(x) {
      newObject[x[0]] = x[1];
    });
    
    console.log(newObject);
    //var outputDiv = document.getElementById('output');
    //outputDiv.textContent = newObject;
  }
};
