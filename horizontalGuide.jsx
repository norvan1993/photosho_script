/*******************************************************
 *horizontal guides
 ******************************************************/

var Gutter = 0.4;
var Height = 9.6;
var RowsNum = 12;
var Current = 15;
activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(Current + "cm"));
for (var i = 0; i < RowsNum; i++) {
  Current = Current + Height;
  activeDocument.guides.add(
    Direction.HORIZONTAL,
    new UnitValue(Current + "cm")
  );
  Current = Current + Gutter;
  activeDocument.guides.add(
    Direction.HORIZONTAL,
    new UnitValue(Current + "cm")
  );
}
