var handlers = {
  convert: function() {

    // Grab Input text
    var nameInput = document.getElementById('nameInput');
    var pointsInput = document.getElementById('pointsInput');
    var assistsInput = document.getElementById('assistsInput');
    var reboundsInput = document.getElementById('reboundsInput');
    
    // Build Object from Inputs
    var playerObject = {};
    playerObject['name'] = nameInput.value;
    playerObject['points'] = pointsInput.valueAsNumber;
    playerObject['assists'] = assistsInput.valueAsNumber;
    playerObject['rebounds'] = reboundsInput.valueAsNumber;

    // Build Array from Inputs
    var playerArray = [];
    playerArray.push(['Name', nameInput.value]);
    playerArray.push(['Points', pointsInput.valueAsNumber]);
    playerArray.push(['Assists', assistsInput.valueAsNumber]);
    playerArray.push(['Rebounds', reboundsInput.valueAsNumber]);

    // Build String from Object Properties
    var outputString = '';
    for (var prop in playerObject) {
      outputString += prop + ": " + playerObject[prop] + ", ";
    };
    
    // Build String from Array Elements
    var outputString2 = '';
    playerArray.forEach(function(x) {
      outputString2 += x[0] + ': ' + x[1] + '<br>';
    });
    
    var outputDiv1 = document.getElementById('output1');
    outputDiv1.innerHTML = '<h2>Object:</h2>' + JSON.stringify(playerObject);
    
    var outputDiv2 = document.getElementById('output2');
    outputDiv2.innerHTML = '<h2>Array:</h2>' + JSON.stringify(playerArray);
    
    var outputDiv3 = document.getElementById('output3');
    outputDiv3.innerHTML = '<h2>String:</h2>' + outputString2;
    
    nameInput.value = '';
    pointsInput.value = '';
    assistsInput.value = '';
    reboundsInput.value = '';
  }
};
