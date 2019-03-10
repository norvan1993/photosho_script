/*******************************************************************
 * create window
 ********************************************************************/
/*
var dlg = new Window("dialog", "Alert Box Builder");
dlg.frameLocation = [100, 100];
dlg.location = [10, 50];
dlg.size = [200, 100];
var dlg = new Window("dialog", "Alert Box Builder");
dlg.gutter = dlg.add("edittext", [0, 0, 100, 80], "hello");
dlg.show();
var x = dlg.gutter.text;
*/
/****************************************************************
 * adding text layer
 ****************************************************************/
/*
//add layer
var textLayer = activeDocument.artLayers.add();
//set the layer kind to text
textLayer.kind = LayerKind.TEXT;
//set the name of the layer
textLayer.name = "name";
//set font
textLayer.textItem.font = "Verdana";
//set colour

textLayer.textItem.color = setColor(0, 0, 0);
//set text
textLayer.textItem.contents = x;

//set color
function setColor(r, g, b) {
  rgb = new RGBColor();
  rgb.red = r;
  rgb.green = g;
  rgb.blue = b;

  solid = new SolidColor();
  solid.rgb = rgb;
  return solid;
}
*/
/****************************************************************
 * get folder images
 ****************************************************************/
//select folder

var fold = Folder("/e/photos/students");
var files = fold.getFiles();

/****************************************************************
 * make water mark
 ****************************************************************/

var layerDoc = app.open(File("/e/photos/layer/label.png"));
for (var index = 0; index < files.length; index++) {
  var mainDoc = app.open(files[index]);
  mainDoc.resizeImage(new UnitValue("7cm"), new UnitValue("9.6cm"), 300);
  app.activeDocument = layerDoc;
  layerDoc.artLayers[0].duplicate(mainDoc);
  app.activeDocument = mainDoc;
  mainDoc.artLayers[0].translate(
    new UnitValue("0.2cm"),
    new UnitValue("7.4cm")
  );
  mainDoc.saveAs(new File("/e/photos/students/" + mainDoc.name + ".psd"));
  mainDoc.close(SaveOptions.DONOTSAVECHANGES);
}
