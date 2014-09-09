  $('document').ready(function(){
        // hides filter dropdowns on students page
        $('#student-program-list').hide();
        $('#student-research-areas').hide();
        //event handlers to show filter dropdowns on students page
        $('#program-dropdown').on('click', function(){
            $('#student-program-list').toggle();
        });
        $('#research-area-dropdown').on('click', function(){
            $('#student-research-areas').toggle();
        });
        // select container for isotope instance
        var institutions = $('#program-list');
        // initialize isotope instance with options
        institutions.isotope(
          {
            itemSelector: '.program',
            layoutMode: 'masonry',
            getSortData: {
                name: '[data-name]'
            },
            sortBy: 'name'
          }
        );
        // script for button click filters
        $('#institution-filters').on('click', 'a', function(){
            var filterValue = $( this ).attr('data-filter');
            institutions.isotope({ filter: filterValue });
            //removes .is-checked from other buttons
            $('#institution-filters').find('a').removeClass('is-checked');
            //adds .is-checked to current filter button
            $(this).addClass('is-checked');
        });

         // select container for isotope instance
        var students = $('#student-list');
        // initialize isotope instance with options
        students.isotope(
          {
            itemSelector: '.student',
            layoutMode: 'masonry',
            getSortData: {
                name: '[data-name]'
            },
            sortBy: 'name'
          }
        );
        // script for button click filters
        $('#student-filters').on('click', 'a', function(){
            var filterValue = $( this ).attr('data-filter');
            students.isotope({ filter: filterValue });
            // removes .is-checked from other buttons
            $('#student-filters').find('a').removeClass('is-checked');
            //adds .is-checked to current filter button
            $(this).addClass('is-checked');
        });
    });
