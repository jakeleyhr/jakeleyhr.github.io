# Image Gallery

<div class="gallery-container">

## Figures
<div class="gallery">
<img src="../assets/img/gallery/60dpf_vertebrae_xray.png" alt="X-ray Image 1">
<p>Caption for X-ray Image 1</p>
    
<img src="../assets/img/gallery/Catshark_teeth_denticle.png" alt="X-ray Image 2">
<p>Caption for X-ray Image 2</p>
    
<img src="../assets/img/gallery/Zebrafish_ceratohyal.png" alt="X-ray Image 3">
<p>Caption for X-ray Image 3</p>
</div>

## Fluorescence
<div class="gallery">
<img src="../assets/img/gallery/60dpf_vertebrae_xray.png" alt="X-ray Image 1">
<p>Caption for X-ray Image 1</p>
    
<img src="../assets/img/gallery/Catshark_teeth_denticle.png" alt="X-ray Image 2">
<p>Caption for X-ray Image 2</p>
    
<img src="../assets/img/gallery/Zebrafish_ceratohyal.png" alt="X-ray Image 3">
<p>Caption for X-ray Image 3</p>
</div>

## X-ray
<div class="gallery">
<img src="../assets/img/gallery/60dpf_vertebrae_xray.png" alt="X-ray Image 1">
<p>Caption for X-ray Image 1</p>
    
<img src="../assets/img/gallery/Catshark_teeth_denticle.png" alt="X-ray Image 2">
<p>Caption for X-ray Image 2</p>
    
<img src="../assets/img/gallery/Zebrafish_ceratohyal.png" alt="X-ray Image 3">
<p>Caption for X-ray Image 3</p>
</div>

</div>

<!-- Image container where the image will show in a big size -->
<div class="image-popup-container" id="imagePopup">
<span class="close-button" onclick="closeImage()">×</span>
<img src="" alt="Popup Image" id="popupImage">
</div>

<script src="../script.js"></script>

<style>
  /* Import google font */
  @import url('https://fonts.googleapis.com/css2?family=Yaldevi:wght@200;300;400;500;600;700&display=swap');

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  /* Styling the Heading of Image Gallery */
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background: #121FCF;
    background: linear-gradient(to right, #0e85e0 0%, #26ff1a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Styling the gallery section where all images are */
  .gallery-container {
    width: 90%;
    margin: 0 auto;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
  }

  /* Styling the Particular Image */
  .gallery img {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  /* onHover image will expand a little bit */
  .gallery img:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }

  /* This section will be seen when we click on the image */
  .image-popup-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* close button when we want to close the bigger image */
  .close-button {
    position: absolute;
    top: 20px;
    right: 50px;
    font-size: 60px;
    color: #fff;
    cursor: pointer;
  }

  .close-button:hover {
    color: red;
  }

  /* when we click on the image it will expand in a bigger size and will be displayed at the middle of the screen */
  #popupImage {
    display: block;
    max-width: 80%;
    max-height: 80%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Making images more responsive for smaller size devices */
  @media (max-width: 670px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-gap: 10px;
    }

    .gallery img {
      width: 150px;
      height: 150px;
    }

    .heading {
      font-size: 20px;
    }
  }

  .gallery p {
    font-style: italic;
    color: #555;
  }
</style>
