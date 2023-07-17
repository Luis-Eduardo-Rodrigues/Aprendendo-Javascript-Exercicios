function showPreview(image) {
    var preview = document.getElementById("preview");
    preview.innerHTML = "";

    var newImage = document.createElement("img");
    newImage.src = image.src;
    newImage.style.width = "100%";
    newImage.style.height = "100%";

    preview.appendChild(newImage);

    var thumbnails = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove("selected");
    }

    image.classList.add("selected");
  }