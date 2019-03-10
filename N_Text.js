class N_Text {
  constructor() {
    this.name = null;
    this.color = null;
    this.content = null;
    this.font = null;
  }
  creat(doc) {
    textLayer = doc.artLayers.add();
    //set the layer kind to text
    textLayer.kind = LayerKind.TEXT;
    //set the name of the layer
    if (this.name != null) {
      textLayer.name = this.name;
    }

    //set font
    if (this.font != null) {
      textLayer.textItem.font = this.font;
    }
    //set colour
    textLayer.textItem.color = this.color(0, 0, 0);
    //set text
    textLayer.textItem.contents = content;
  }
  setColor(r, g, b) {
    rgb = new RGBColor();
    rgb.red = r;
    rgb.green = g;
    rgb.blue = b;

    solid = new SolidColor();
    solid.rgb = rgb;
    return solid;
  }
}
