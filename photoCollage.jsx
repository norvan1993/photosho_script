#include json2.js
/****************************************************************
 * read json file
 ****************************************************************/
var jsonFile = File("/e/photos/json/infos.json");
jsonFile.open("r");
str = jsonFile.read();
jsonFile.close();
array = JSON.parse(str);



/****************************************************************
 * make water mark
 ****************************************************************/

var mainDoc1 = app.open(File("/e/photos/wardiya.psd"));
var patho="/e/photos/students/";
for (var index = 99; index < 199; index++) {
  fileName = getFileName(array[index].photoNumber,array[index].base);
  var layerDoc = app.open(File(patho+fileName));
  app.activeDocument = layerDoc;
  layerDoc.resizeImage(new UnitValue("7cm"), new UnitValue("9.6cm"), 200);
  layerDoc.artLayers[0].duplicate(mainDoc1);
  app.activeDocument = mainDoc1;
  fx = getX(index, 7, 4.5, 0.5);
  fy = getY(index, 9.6, 25, 0.4);
  
  MoveLayerTo(mainDoc1.artLayers[0],fx,fy);
  /*
  mainDoc1.artLayers[0].translate(
    new UnitValue(fx + "cm"),
    new UnitValue(fy + "cm")
  );
  */
  layerDoc.close(SaveOptions.DONOTSAVECHANGES);
}
//get x coordinate
function getX(index, width, init, gutter) {
  xOrder = (index) % 9;
  return init + (xOrder) * (width + gutter);
}
//get y coordinate
function getY(index, height, init, gutter) {
  yOrder = Math.floor(index / 9) + 1;
  return init + (yOrder - 1) * (height + gutter);
}
function MoveLayerTo(fLayer, fX, fY) {
  var Position = fLayer.bounds;
  Position[0] = fX - Position[0];
  Position[1] = fY - Position[1];

  fLayer.translate(-Position[0], -Position[1]);
}
//get file name
//get file nam
function getFileName(num,base) {
  if(base=="0"){
    return "0 (" + num + ").JPG.jpg";
  }
  if(base=="1"){
    return "1(" + num + ").JPG.jpg";
  }
  
}