<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    body {
      background-color: #f8f9fa;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
    }

    .gallery-item {
      width: calc(33.33% - 20px);
      margin: 10px;
      overflow: hidden;
    }

    .gallery-item img {
      width: 100%;
      height: auto;
      transition: transform 0.3s;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }
  </style>
</head>
<body>

<div class="container mt-5">
  <div class="text-center mb-4">
    <button class="btn btn-primary filter" data-filter="all">All</button>
    <button class="btn btn-primary filter" data-filter="nature">Nature</button>
    <button class="btn btn-primary filter" data-filter="technology">Technology</button>
    <button class="btn btn-primary filter" data-filter="architecture">Architecture</button>
  </div>

  <div class="gallery">
    <div class="gallery-item nature">
      <img src="../assets/img/gallery/60dpf_vertebrae_xray.png" alt="Nature 1">
    </div>
    <div class="gallery-item technology">
      <img src="../assets/img/gallery/Catshark_teeth_denticle.png" alt="Technology 1">
    </div>
    <div class="gallery-item architecture">
      <img src="../assets/img/gallery/Zebrafish_ceratohyal.png" alt="Architecture 1">
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function () {
    // Initialize Isotope
    $('.gallery').isotope();

    // Filter items on button click
    $('.filter').click(function () {
      var filterValue = $(this).attr('data-filter');
      $('.gallery').isotope({ filter: filterValue });
    });

    // Add active class to the current button (highlight it)
    $('.filter').on('click', function () {
      $('.filter').removeClass('active');
      $(this).addClass('active');
    });
  });
</script>

</body>
</html>
