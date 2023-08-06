// Function to generate the logo
function generateLogo() {
  var text = document.getElementById('text-input').value;
  var textColor = document.getElementById('text-color').value;
  var shape = document.getElementById('shape').value;
  var shapeColor = document.getElementById('shape-color').value;

  var svgCode = '<svg width="300" height="200">';
  if (shape === 'circle') {
    svgCode += '<circle cx="150" cy="100" r="50" fill="' + shapeColor + '" />';
  } else if (shape === 'triangle') {
    svgCode += '<polygon points="150,20 250,180 50,180" fill="' + shapeColor + '" />';
  } else if (shape === 'square') {
    svgCode += '<rect x="100" y="50" width="100" height="100" fill="' + shapeColor + '" />';
  }
  svgCode += '<text x="150" y="130" font-family="Arial" font-size="30" fill="' + textColor + '" text-anchor="middle">' + text + '</text>';
  svgCode += '</svg>';

  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<h2>Generated logo.svg</h2>';
  outputDiv.innerHTML += svgCode;
}

// Add event listener to generate button
var generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generateLogo);
