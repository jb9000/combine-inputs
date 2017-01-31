// Sample input: [[name, James Harden],[points, 27],[assists, 13],[rebounds, 10]]
// Sample output: {name: 'James Harden', points: 27, assists: 13, rebounds: 10}

// This object runs a function when the HTML Convert button is clicked

var handlers = {
  convert: function() {

    var nameInput = document.getElementById('nameInput').value;
    var pointsInput = document.getElementById('pointsInput').value;
    var assistsInput = document.getElementById('assistsInput').value;
    var reboundsInput = document.getElementById('reboundsInput').value;
    var teamArray = [];
        
    var playerObject = {};
    playerObject[name] = nameInput;
    playerObject[points] = pointsInput;
    playerObject[assists] = assistsInput;
    playerObject[rebounds] = reboundsInput;
    teamArray.push(playerObject);
    });
    
    console.log(teamArray);
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = teamArray;
  }
};
