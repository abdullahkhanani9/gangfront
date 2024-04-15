const galleryEndpoint = "http://127.0.0.1:8008/getPainting"
let gallery =  document.getElementById("gallery")
function getPosts() {
    fetch(galleryEndpoint,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response failed")
      }).then(data => {
        console.log("Response:", data);
        for(let i=0;i<data.paintings.length;i++)
        {
            
            let paintingDiv = document.createElement("div")
            paintingDiv.classList.add("painting")
            let paintingimg = document.createElement("img")
            gallery.appendChild(paintingDiv)
            paintingDiv.appendChild(paintingimg)
            paintingimg.src = data.paintings[i].image
            let artistCredit = document.createElement("h1")
            artistCredit.innerText = `Painted By ${data.paintings[i].username}`
            paintingDiv.appendChild(artistCredit)
        }
        
      })
      .catch(error => {
        console.error("There was a problem with the fetch", error);
      });
  }

  getPosts()