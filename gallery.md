---
layout: page
title: Image Gallery
---

# Gallery

<div class="container mt-5">
  <div class="text-center mb-4">
    <button class="btn btn-primary filter" data-filter="all">All</button>
    <button class="btn btn-primary filter" data-filter="CT">CT</button>
    <button class="btn btn-primary filter" data-filter="Fluorescence">Fluorescence</button>
    <button class="btn btn-primary filter" data-filter="Figure">Figure</button>
  </div>

  <div class="gallery">
    <div class="gallery-item CT">
      <img src="../assets/img/gallery/60dpf_vertebrae_xray.png" alt="CT 1">
    </div>
    <div class="gallery-item Fluorescence">
      <img src="../assets/img/gallery/Catshark_teeth_denticle.png" alt="Fluorescence 1">
    </div>
    <div class="gallery-item Figure">
      <img src="../assets/img/gallery/Zebrafish_ceratohyal.png" alt="Figure 1">
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.min.js"></script>
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
