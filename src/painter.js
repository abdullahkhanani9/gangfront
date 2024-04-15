// js canvas drawing function stuff
var canvas = document.getElementById('drawingCanvas');
var ctx = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var strokeColor = 'black';
var lineWidth = 10; // Default line width
// mouse down
canvas.addEventListener('mousedown', function (e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
// event listener for mouse moving
canvas.addEventListener('mousemove', function (e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth; // Set the line width
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
// mouse up function
canvas.addEventListener('mouseup', function () {
  isDrawing = false;
});
// mouse out function
canvas.addEventListener('mouseout', function () {
  isDrawing = false;
});
// event listener for color selecting
document.querySelectorAll('.colorSelector').forEach(item => {
  item.addEventListener('click', function () {
    strokeColor = this.style.backgroundColor;
  });
});
// event listener for eraser
var eraserEnabled = false;
document.getElementById('eraser').addEventListener('click', function () {
  eraserEnabled = !eraserEnabled;
  if (eraserEnabled) {
    strokeColor = 'white'; // Set the stroke color to white for erasing
  } else {
    strokeColor = 'black'; // Set the stroke color back to black for drawing
  }
});
// event listeners for line width selectors
document.querySelectorAll('.lineWidthSelector').forEach(item => {
  item.addEventListener('click', function () {
    lineWidth = parseInt(this.textContent); // Set the line width based on the button text content
  });
});
// event listener drawing choice
var drawingChoices = document.querySelectorAll('input[name="drawingChoice"]');
drawingChoices.forEach(function (choice) {
  choice.addEventListener('change', function () {
    var selectedChoice = document.querySelector('input[name="drawingChoice"]:checked').value;
    document.getElementById('question').textContent = "You are drawing a " + selectedChoice + ".";
    displayAnswerImage(selectedChoice);
  });
});
// displays answer image
function displayAnswerImage(choice) {
  switch (choice) {
    case 'Cat':
      drawImageOnCanvas('img/fill-in-cat.png');
      break;
    case 'Cookie':
      drawImageOnCanvas('img/fill-in-cookie.png');
      break;
    case 'House':
      drawImageOnCanvas('img/fill-in-house.png');
      break;
  }
}
// puts image on canvas
function drawImageOnCanvas(imgource) {
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = imgource;
}
drawingChoices.forEach(function (choice) {
  choice.addEventListener('change', function () {
    var selectedChoice = document.querySelector('input[name="drawingChoice"]:checked').value;
    switch (selectedChoice) {
      case 'Cat':
        drawImageOnCanvas('img/fill-in-cat.png');
        break;
      case 'Cookie':
        drawImageOnCanvas('img/fill-in-cookie.png');
        break;
      case 'House':
        drawImageOnCanvas('img/fill-in-house.png');
        break;
    }
  });
});

function download() {
  let link = document.createElement("a")
  link.download = 'painting.png'
  link.href = canvas.toDataURL()
  link.click()
}

let painting = document.getElementById("paintingfile")
let paintingimg = document.getElementById("paintingimg")
const endpoint = "http://127.0.0.1:8008/uploadPainting"
function sendPainting() {
  let payload =
  {
   "painting":paintingimg.src
  }
  fetch(endpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(payload)
    }).then(response => {
      if (response.ok) {
        return response.text()
      }
      throw new Error("Network response failed")
    }).then(data => {
      
    })
    .catch(error => {
      console.error("There was a problem with the fetch", error);
    });
}

painting.addEventListener('change', function (event) {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result; // Get the image URL
      const image = new Image();
      image.src = imageUrl;
      image.onload = function () {
        paintingimg.src = image.src
      };
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
});