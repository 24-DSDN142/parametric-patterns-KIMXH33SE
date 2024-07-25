//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let iceingSize = 80;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); // (GRID_WALLPAPER)
  pWallpaper.resolution(FIT_TO_SCREEN); // SIZE OF SCREEN eg (A3)
  pWallpaper.show_guide(true); //set this to false when you're ready to print - it's the line guides

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50; // try 0, 200
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour - use colour picker
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let sunX = 100;
  let sunY = 100;
  let sunSize = 70; // variable to change size of circel

  fill(255,204,0); // yellow yolk
  stroke(255,204,0); // border
  ellipse(sunX,sunY,sunSize,sunSize); // actual sun

//rays
  stroke(255,204,0);
  fill(255,204,0);
  
  triangle(100, 25, 95, 55, 105, 55); // Top ray
  triangle(160, 50, 135, 65, 145, 75); // Top right ray
  triangle(185, 100, 155, 95, 155, 105); // Right ray
  triangle(130, 140, 140, 130, 155, 160); // Bott right
  triangle(100, 175, 95, 145, 105, 145); // Bott ray
  triangle(70, 135, 60, 130, 50, 155); // bott left
  triangle(15, 100, 45, 95, 45, 105); // Left ray
  triangle(40, 50, 65, 65, 55, 75); // Top left 

}

