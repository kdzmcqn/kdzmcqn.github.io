---
layout: post
titel: Input Date and Time in Excel Hassle-free
description: "Simple tutorial for using Excel Macros and VBA"
category: coding
tags: ["Windows 10", "MS Excel", "Macro", "Virtual Basic"]
---
# Title
## yep
<img src="/assets/img/coding/excel/patient_form_table.jpg" alt="patientform" height="104.196"/>

# yes
![patientformobjs](/assets/img/coding/excel/patient_form_objects.jpg)
## yes
![patientformobjs](/assets/img/coding/excel/patient_form_1.jpg)
## yes
![patientformobjs](/assets/img/coding/excel/assign_macro.jpg)
## yeah
![patientformobjs](/assets/img/coding/excel/assign_macro2.jpg)
## yepl
![patientformobjs](/assets/img/coding/excel/vba_excel_window.jpg)
## lol
![patientformobjs](/assets/img/coding/excel/vba_excel_window.jpg)
## fsdf
![patientformobjs](/assets/img/coding/excel/find_and_select.jpg)
## sfd
![patientformobjs](/assets/img/coding/excel/find_and_select2.jpg)
## fsd
![patientformobjs](/assets/img/coding/excel/selection.jpg)
## fdsf
![patientformobjs](/assets/img/coding/excel/selection_2.jpg)

![patientformobjs](/assets/img/coding/excel/oval1_click.jpg)

![patientformobjs](/assets/img/coding/excel/datetimebutton.jpg)

![patientformobjs](/assets/img/coding/excel/click_no.jpg)

![patientformobjs](/assets/img/coding/excel/savetoxlsm.jpg)

![patientformobjs](/assets/img/coding/excel/assign_macro3.jpg)

![patientformobjs](/assets/img/coding/excel/edit.jpg)
## demo
![patientformobjs](/assets/img/coding/excel/demo.gif)
```vb
Private Sub Form_Load()
    ' Execute a simple message box that says "Hello, World!"
    MsgBox "Hello, World!"
End Sub


Sub Oval1_Click()
Dim current_row As Integer

If IsEmpty(ActiveCell.Value) And ActiveCell.Column = 6 Then

Else 
    current_row = ActiveCell.Row + 1
End If
    ActiveCell.Value = Now
    Cells(current_row, 7).Value = TimeValue(Now)
End Sub
```

Google app scripts

```js
function setValue(cellName, value) {
  SpreadsheetApp.getActiveSpreadsheet().getRange(cellName).setValue(value);
}

function getValue(cellName) {
  return SpreadsheetApp.getActiveSpreadsheet().getRange(cellName).getValue();
}

function getNextRow() {
  return SpreadsheetApp.getActiveSpreadsheet().getLastRow() + 1;
}

function setUser1() {
  setValue('E3', new Date());
}

function addRecord(a, b, c) {
  var row = getNextRow();
  setValue('A' + row, a);
  setValue('B' + row, b);
  setValue('C' + row, c);
}

function punchIn() {
  addRecord(getValue('E3'), new Date(), 'In - Work from Home');
}


function punchOut() {
  addRecord(getValue('E3'), new Date(), 'Out - Work from Home');
}

function punchInOS() {
  addRecord(getValue('E3'), new Date(), 'In - Office');
}

function punchOutOS() {
  addRecord(getValue('E3'), new Date(), 'OUT - Office');
}

```
