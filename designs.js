function colorBox(box) {
  let colour = $('#colorPicker').val();
  $(box).css('background-color', colour);
}

function makeGrid(width, height) {
  let pixelCanvas, grid;
  pixelCanvas = $('#pixel_canvas');

  if (pixelCanvas.children().length) {
    pixelCanvas.empty();
  }

  for (let i = 0; i < height; i++) {
    grid += "<tr>";
    for (let j = 0; j < width; j++) {
      grid += "<td onclick='colorBox(this)'></td>"
    }
    grid += "</tr>";
  }
  pixelCanvas.html(grid);
  pixelCanvas.css('background-color', '#ffffff');
};

$(document).ready(function(){
  $('#submit_button').click(function(evt){
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    evt.preventDefault();
    makeGrid(width, height);
  });
});
