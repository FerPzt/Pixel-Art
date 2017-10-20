function makeGrid(width, height) {
  let pixelCanvas, grid;
  pixelCanvas = $('#pixel_canvas');

  if (pixelCanvas.children().lenght) {
    pixelCanvas.empty();
  }

  for (let i = 0; i < height; i++) {
    grid += "<tr>";
    for (let j = 0; j < width; j++) {
      grid += "<td></td>"
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

  $('#pixel_canvas').click(function(evt){
    let colour = $('#colorPicker').val();
    $(evt.target).css('background-color', colour);
  });
});
