//function to create a new modal
function newModal(divID, modalID, modalTitle, modalContent, buttonID, buttonText){
    $(divID).append("<div class='modal fade' id='" + modalID + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><br><br><div class='modal-content'><div class='modal-header' style='background-color: rebeccapurple; color: white'><h3 class='modal-title' id='exampleModalLabel' style='color: white'>" + modalTitle + "</h3></div><div class='modal-body'><strong>" + modalContent + "</strong></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>");
    
    $(buttonID).append("<button type='button' class='btn btn-primary' style='background-color: rebeccapurple' data-toggle='modal' data-target='#" + modalID + "'>" + buttonText + "</button><br><br>");
}


//function to display a site subPage upon homepage button click
function displayPage(pageId){
    $("#mainNav").css("display", "none");
    $(pageId).css("display", "block");
}        


//functions to add smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
