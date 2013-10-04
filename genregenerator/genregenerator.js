/**
  * @file
  * Javascript necessary for interactivty on genre page.
  */
(function($) {
  Drupal.behaviors.genreGenerator = {
    attach: function(context){
      $("#genregenerator-genre p").after('<a id="regenerate-genre">Refresh</a>').next().bind('click', function() {
            $.get(Drupal.settings.genregenerator.json_url, function(data) {
            myGenre = jQuery.parseJSON(data);
            thisURL = Drupal.settings.genregenerator.base_url;

            if(!myGenre.status || myGenre.status == 0) {
              $("#genregenerator-genre p").text(myGenre.genre);
              $("#genre-tweet").html('<a href="http://twitter.com/share" class="twitter-share-button" data-url="' + thisURL + '" data-text="My band\'s genre is ' + myGenre.genre + '. What\'s yours? " data-count="vertical" data-via="patrickfgoddard">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>');
            }
          });
      });
      genre =  $("#genregenerator-genre p").text();
      /**
       * A function to fetch genre from the server, and display in the
       * designated area
       */
       function randQuote() {
          $.get(Drupal.settings.genregenerator.json_url, function(data) {
            myGenre = jQuery.parseJSON(data);
            if(!myGenre.status || myGenre.status == 0) {
              $("#genregenerator-genre p").text(myGenre.genre);
              $("#genre-tweet").html('<a href="http://twitter.com/share" class="twitter-share-button" data-url="http://www.thund3rbox.com/genre" data-text="My band\'s genre is ' + myGenre.genre + '. What\'s yours? " data-count="vertical" data-via="thund3rbox">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>');
            }
          });
        }     
    }
  }
})(jQuery);