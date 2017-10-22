//Set the color for the box from color picker
function colorBox(box) {
  let colour = $('#colorPicker').val();
  box.style.backgroundColor = colour;
}

//Create table based on width and height input
function makeGrid(width, height) {
  let pixelCanvas, grid;
  pixelCanvas = $('#pixel_canvas');

  //Check if table already has content
  if (pixelCanvas.children().length) {
    //if it does, empty to add new content
    pixelCanvas.empty();
  }

  //Iterating over width and height to create boxes
  for (let i = 0; i < height; i++) {
    grid += "<tr>";
    for (let j = 0; j < width; j++) {
      //Assigning the click event for each box
      grid += "<td onclick='colorBox(this)'></td>"
    }
    grid += "</tr>";
  }

  pixelCanvas.html(grid);
  pixelCanvas.css('background-color', '#ffffff');
};

$(document).ready(function(){
  //Implementing custom submit for the form
  $('#sizePicker').submit(function(event){
    //Get the width and height values from user input
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    //Prevent form to be submitted
    event.preventDefault();
    makeGrid(width, height);
  })
});
