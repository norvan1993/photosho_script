#include json2.js
/****************************************************************
 * read json file
 ****************************************************************/
var jsonFile = File("/e/photos/json/infos.json");
jsonFile.open("r");
str = jsonFile.read();
jsonFile.close();
array = JSON.parse(str);

//getting items based on array
for (var index = 0; index < array.length; index++) {
  fileName = getFileName(array[index].photoNumber,array[index].base);
  patho = "/e/photos/students/";
  mainDoc = app.open(File(patho + fileName));
  /****************
   * add student name
   */
  //add layer
  textLayer = mainDoc.artLayers.add();
  //set the layer kind to text
  textLayer.kind = LayerKind.TEXT;
  textLayer.textItem.kind=TextType.PARAGRAPHTEXT;
  //set the name of the layer
  textLayer.name = "name";
  //set colour
  textLayer.textItem.color = setColor(0, 0, 0);
   //set font
   var myFont = app.fonts.getByName("ArialMT");
    textLayer.textItem.font = myFont.postScriptName;
    //position
    textLayer.textItem.position =[new UnitValue("0.5cm"),new UnitValue("7.8cm")];
   
    //font size
    textLayer.textItem.size =new UnitValue("5mm");
    //translate
    textLayer.translate(
        new UnitValue("0cm"),
        new UnitValue("0cm")
      );
  //set text
  textLayer.textItem.contents = array[index].name;
  textLayer.textItem.width =new UnitValue("6cm");
  textLayer.textItem.height =new UnitValue("0.54cm");
  textLayer.textItem.justification=Justification.CENTER;
  /****************
   * add student avg
   */
   //add layer
   textLayer = mainDoc.artLayers.add();
   //set the layer kind to text
   textLayer.kind = LayerKind.TEXT;
   textLayer.textItem.kind=TextType.PARAGRAPHTEXT;
   //set the name of the layer
   textLayer.name = "avg";
   //set colour
   textLayer.textItem.color = setColor(0, 0, 0);
    //set font
    var myFont = app.fonts.getByName("ArialMT");
     textLayer.textItem.font = myFont.postScriptName;
     //position
     textLayer.textItem.position =[new UnitValue("1.2cm"),new UnitValue("8.45cm")];
    
     //font size
     textLayer.textItem.size =new UnitValue("6.3mm");
     //translate
     textLayer.translate(
         new UnitValue("0cm"),
         new UnitValue("0cm")
       );
   //set text
   textLayer.textItem.contents = array[index].avg;
   textLayer.textItem.width =new UnitValue("2.82cm");
   textLayer.textItem.height =new UnitValue("0.54cm");
   textLayer.textItem.justification=Justification.LEFT;

    /****************
   * add student class
   */
   //add layer
   textLayer = mainDoc.artLayers.add();
   //set the layer kind to text
   textLayer.kind = LayerKind.TEXT;
   textLayer.textItem.kind=TextType.PARAGRAPHTEXT;
   //set the name of the layer
   textLayer.name = "class";
   //set colour
   textLayer.textItem.color = setColor(0, 0, 0);
    //set font
    var myFont = app.fonts.getByName("ArialMT");
     textLayer.textItem.font = myFont.postScriptName;
     //position
     textLayer.textItem.position =[new UnitValue("2.5cm"),new UnitValue("8.50cm")];
    
     //font size
     textLayer.textItem.size =new UnitValue("6.3mm");
     //translate
     textLayer.translate(
         new UnitValue("0cm"),
         new UnitValue("0cm")
       );
   //set text
   textLayer.textItem.contents = array[index].class;
   textLayer.textItem.width =new UnitValue("2.82cm");
   textLayer.textItem.height =new UnitValue("0.54cm");
   textLayer.textItem.justification=Justification.RIGHT;
  //save and close
  mainDoc.close(SaveOptions.SAVECHANGES);
}
//get file nam
function getFileName(num,base) {
  if(base=="0"){
    return "0 (" + num + ").JPG.psd";
  }
  if(base=="1"){
    return "1(" + num + ").JPG.psd";
  }
  
}
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
