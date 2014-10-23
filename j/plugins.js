$('document').ready(function(){

    // hides filter dropdowns on students page
    $('#filters ul').hide();

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

    // script for button click filters
    $('#filters').on('click', 'a', function(){

        $(this).nextAll().toggle();

        var filterValue = $( this ).attr('data-filter');
        things.isotope({ filter: filterValue });
        //removes .is-checked from other buttons
        $('#filters').find('a').removeClass('is-checked');
        //adds .is-checked to current filter button
        $(this).addClass('is-checked');
    });

    // Replaces image src with a random image, based on numerical file
    // name.
    var institution_image = $('#institution-image');
    var numRand = Math.floor(Math.random() * 6) + 1;
    institution_image.attr('src', '/images/institution-images/' + numRand + '.jpg');

});
