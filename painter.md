---
permalink: /painter
layout: nav_ml
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VividFusion</title>
  <link rel="stylesheet" href="painter.css">
</head>
<body>

  <style>
    html,body
    {
      height:100%;
      width:100%;
    }
  </style>
  
  <!-- Drawing container -->
  <div id="drawingContainer">
    <!-- Canvas -->
    <canvas id="drawingCanvas" width="800" height="600"></canvas>
    <!-- Color selectors -->
    <div id="colorSelectors">
      <div class="colorSelector" style="background-color: red;"></div>
      <div class="colorSelector" style="background-color: blue;"></div>
      <div class="colorSelector" style="background-color: green;"></div>
      <div class="colorSelector" style="background-color: black;"></div>
      <div class="colorSelector" style="background-color: purple;"></div>
      <div class="colorSelector" style="background-color: orange;"></div>
      <div class="colorSelector" style="background-color: pink;"></div>
      <div class="colorSelector" style="background-color: yellow;"></div>
      <div class="colorSelector" style="background-color: brown;"></div>
      <div class="colorSelector" style="background-color: tan;"></div>
      <div class="colorSelector" style="background-color: sienna;"></div>
      <div class="colorSelector" style="background-color: chocolate;"></div>
      <div class="colorSelector" style="background-color: sandybrown;"></div>
      <div class="colorSelector" style="background-color: peru;"></div>
      <div class="colorSelector" style="background-color: cyan;"></div>
      <div class="colorSelector" style="background-color: magenta;"></div>
      <div class="colorSelector" style="background-color: indigo;"></div>
      <div class="colorSelector" style="background-color: teal;"></div>
      <div class="colorSelector" style="background-color: gold;"></div>
      <div class="colorSelector" style="background-color: olive;"></div>
    </div>
    <!-- Eraser -->
    <div id="eraser"></div>
    
    <!-- Line width selectors -->
    <div id="lineWidthSelectors">
      <div class="lineWidthSelector" id="lineWidth20">20px</div>
      <div class="lineWidthSelector" id="lineWidth10">10px</div>
      <div class="lineWidthSelector" id="lineWidth1">1px</div>
      <div class="lineWidthSelector" id="lineWidth5">5px</div>
    </div>
  </div>
<!-- js -->
  <script src="src/painter.js"> </script>
</body>
</html>
