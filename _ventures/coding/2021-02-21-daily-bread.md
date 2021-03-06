---
layout: post
title: "How I schedule my life"
description: "to become organized"
category: coding
tags: ["mermaid", "markdown", "api", "js"]
dependency:
  - mermaid
---
<style>
.svg {
  overflow: auto;
}
</style>
<div class="mermaid">
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#1f1d1e88'}}}%%
graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
</div>

<div class="mermaid">
gantt
  dateFormat  YYYY-MM-DD
  axisFormat  %d/%m
  title Adding GANTT diagram to mermaid
  excludes weekdays 2014-01-10
  
  section A section
  Completed task            :done,    des1, 2014-01-06,2014-01-08
  Active task               :active,  des2, 2014-01-09, 3d
  Future task               :         des3, after des2, 5d
  Future task2              :         des4, after des3, 5d
  
  section Critical tasks
  Completed task in the critical line :crit, done, 2014-01-06,24h
  Implement parser and jison          :crit, done, after des1, 2d
  Create tests for parser             :crit, active, 3d
  Future task in critical line        :crit, 5d
  Create tests for renderer           :2d
  Add to mermaid                      :1d
  
  section Documentation
  Describe gantt syntax               :active, a1, after des1, 3d
  Add gantt diagram to demo page      :after a1  , 20h
  Add another diagram to demo page    :doc1, after a1  , 48h
  
  section Clickable
  Visit mermaidjs               :active, cl1, 2014-01-07,2014-01-10
  Calling a Callback (look at the console log) :cl2, after cl1, 3d
  
  click cl1 href "#"
  click cl2 call ganttTestClick("test", test, test)
  
  section Last section
  Describe gantt syntax               :after doc1, 3d
  Add gantt diagram to demo page      : 20h
  Add another diagram to demo page    : 48h
</div>

<div class="mermaid">
gantt
  dateFormat  YYYY-MM-DD
  axisFormat  %d/%m
  title       GANTT diagram with multiline section titles
  excludes    weekdays 2014-01-10

section A section<br>multiline
Completed task : done, des1, 2014-01-06,2014-01-08
Active task : active, des2, 2014-01-09, 3d
Future task : des3, after des2, 5d
Future task2 : des4, after des3, 5d

section Critical tasks<br/>multiline
Completed task in the critical line : crit, done, 2014-01-06, 24h
Implement parser and jison : crit, done, after des1, 2d
Create tests for parser : crit, active, 3d
Future task in critical line : crit, 5d
Create tests for renderer : 2d
Add to mermaid : 1d

section Documentation<br />multiline
Describe gantt syntax : active, a1, after des1, 3d
Add gantt diagram to demo page : after a1, 20h
Add another diagram to demo page : doc1, after a1, 48h

section Last section<br	/>multiline
Describe gantt syntax : after doc1, 3d
Add gantt diagram to demo page : 20h
Add another diagram to demo page : 48h

</div>

<style>
  div.mermaid {
  font-family: 'Courier New', Courier, monospace !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
      }
</style>
<script>
    function ganttTestClick(a, b, c){
      console.log("a:", a)
      console.log("b:", b)
      console.log("c:", c)
    }
    function testClick(nodeId) {
      console.log("clicked", nodeId)
      var originalBgColor = document.querySelector('body').style.backgroundColor
      document.querySelector('body').style.backgroundColor = 'yellow'
      setTimeout(function() {
        document.querySelector('body').style.backgroundColor = originalBgColor
      }, 100)
    }
</script>

<script>
$(document).ready(function() {
  mermaid.initialize({
    startOnLoad:true,
    securityLevel: 'strict',
    theme: 'forest'
  });
});
</script>