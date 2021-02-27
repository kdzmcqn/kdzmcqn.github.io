---
layout: post
title: Automate Date and Time Inputs with Excel Shape Object Button
description: "Simple tutorial for using Excel Macros and VBA"
category: coding
tags: ["Windows 10", "MS Excel", "Macro", "Virtual Basic"]
header: "/assets/img/poetry/white.jpg"
---
![intro](/assets/img/coding/excel/intro.gif)

# Motivation
It is tiring to input the date and time manually over and over again. For those who work in healthcare
who have to fill up huge forms or tables, it will give you less headache if you could at least type in the date and time. Without the hassle of pressing the shift button just to type in the colons, then you have to edit some of it in the formula bar, check up the time then—what day is it? So yeah... this is how
you'll take some burden off your shoulders.

<img src="/assets/img/coding/excel/patient_form_table.jpg" alt="patientform" height="104.196"/>

## Patient Form Example
Someone I know who's currently studying in medicine sent an example of their forms that have to be filled up. Imagine that they have been filling this up manually. She said they were only taught up to the basic use of excel(she made this form). Considering that they will be using Excel for most part of their job, it is indeed unfortunate that they could only know the basic use of it.

![patientformobjs](/assets/img/coding/excel/patient_form_objects.jpg)

# Tutorial
With this tutorial—however not much, since only two cells will be filled automatically—it will teach you how to automate and become at least familiar with basic programming. May you find the joy and open doors for you in programming, because the world is evolving towards computer technology.

## Create a shape object
You can create a shape by goint to the Insert Tab
![patientformobjs](/assets/img/coding/excel/patient_form_1.jpg)

## Right-click the shape object and Assign Macro
![patientformobjs](/assets/img/coding/excel/assign_macro.jpg)

## Click New
![patientformobjs](/assets/img/coding/excel/assign_macro2.jpg)

## Macro Editor
![patientformobjs](/assets/img/coding/excel/vba_excel_window.jpg)

## Rename the Object
![patientformobjs](/assets/img/coding/excel/find_and_select.jpg)

## Go to the Selection Pane
![patientformobjs](/assets/img/coding/excel/find_and_select2.jpg)

## Rename the shape
![patientformobjs](/assets/img/coding/excel/selection.jpg)

## Change the name of the object back in the macro editor
![patientformobjs](/assets/img/coding/excel/selection_2.jpg)

![patientformobjs](/assets/img/coding/excel/oval1_click.jpg)

## Save as .xlsm
![patientformobjs](/assets/img/coding/excel/datetimebutton.jpg)

![patientformobjs](/assets/img/coding/excel/click_no.jpg)

## Go back to the button and assign the name you chose as the macro
![patientformobjs](/assets/img/coding/excel/savetoxlsm.jpg)

![patientformobjs](/assets/img/coding/excel/assign_macro3.jpg)

# The Code Discussion

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



Sub dateTimebutton_Click()

Set myDocument = Worksheets(1)
myDocument.Shapes("dateTimebutton").Fill.ForeColor.RGB = RGB(255, 0, 0)

Application.OnTime Now + TimeValue("00:00:01"), "proc"

Dim current_row As Integer

If IsEmpty(ActiveCell.Value) And ActiveCell.Column = 6 Then
    current_row = ActiveCell.Row
Else
    current_row = ActiveCell.Row
End If
    ActiveCell.Value = Now
    Cells(current_row, 7).Value = TimeValue(Now)
   
End Sub

Private Sub LastUsedRow()

    Dim last_row As Integer

    last_row = Cells(Rows.Count, 1).End(xlUp).Row


    Debug.Print last_row
End Sub

Private Sub proc()
Set myDocument = Worksheets(1)
myDocument.Shapes("dateTimebutton").Fill.ForeColor.RGB = RGB(0, 255, 255)
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
### References
- [Shape object](https://docs.microsoft.com/en-us/office/vba/api/excel.shape)
- [Fill](https://docs.microsoft.com/en-us/office/vba/api/excel.shape.fill)
- [VBA Model Click() Event](https://docs.microsoft.com/en-us/office/vba/language/reference/visual-basic-add-in-model/events-visual-basic-add-in-model)
- [VBA Model Application.OnTIme() Method](https://docs.microsoft.com/en-us/office/vba/api/excel.application.ontime)