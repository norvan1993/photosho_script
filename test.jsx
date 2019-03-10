function wrtieToTxt(filePath, txt) {
  var jsonFile = new File(filePath);
  jsonFile.open("w");
  jsonFile.writeln(txt);
  jsonFile.close();
}
function openImage(filePath) {
  app.open(File(filePath));
}

mainDoc = app.open(File("/d/3.PNG"));
layerDoc = app.open(File("/d/2.PNG"));
app.activeDocument = layerDoc;
layerDoc.artLayers[0].duplicate(mainDoc);
layerDoc.close(SaveOptions.DONOTSAVECHANGES);
mainDoc.artLayers[0].translate(new UnitValue("100px"), new UnitValue("100px"));
