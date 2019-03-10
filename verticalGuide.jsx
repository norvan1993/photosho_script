/*******************************************************
 *vertical guides
 ******************************************************/

var Gutter = 0.5;
var Width = 7;
var ColumnsNum = 9;
var Current = 4.5;
activeDocument.guides.add(Direction.VERTICAL, new UnitValue(Current + "cm"));
for (var i = 0; i < ColumnsNum; i++) {
  Current = Current + Width;
  activeDocument.guides.add(Direction.VERTICAL, new UnitValue(Current + "cm"));
  Current = Current + Gutter;
  activeDocument.guides.add(Direction.VERTICAL, new UnitValue(Current + "cm"));
}
