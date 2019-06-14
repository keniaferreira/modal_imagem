$(document).ready(function(){

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    $('.img-responsive').on( "click", function() {
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
        });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }

});
