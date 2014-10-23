$('document').ready(function(){

    // select container for isotope instance
    var things = $('#records');

    // initialize isotope instance with options
    things.isotope(
        {
            itemSelector: 'div',
            layoutMode: 'masonry',
            getSortData: {
                name: '[data-name]'
            },
            sortBy: 'name'
        }
    );

    var $select = $('#filters select');
    // script for button click filters
     $select.change(function() {

        var filterValue = $( this ).val();
        things.isotope({ filter: filterValue });
      });

    // Replaces image src with a random image, based on numerical file
    // name.
    var institution_image = $('#institution-image');
    var numRand = Math.floor(Math.random() * 6) + 1;
    institution_image.attr('src', '/images/institution-images/' + numRand + '.jpg');

});
