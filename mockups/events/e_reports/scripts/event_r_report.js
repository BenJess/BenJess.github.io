// Date Picker //

$(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
})

// Giving Prog Indicator //

$(function () {

    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active arrow_box');
            $item.addClass('active arrow_box');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active.arrow_box a').trigger('click');


    $('#activate-step-2').on('click', function (e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Member Fields");
    })
    $('#activate-step-3').on('click', function (e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        // widen wrapper 
        $('#content-wrapper-sm').removeClass('contain-wrapper');
        // widen wrapper END
        $('#pagetitle').html("Preview");
    })
    $('#activate-step-4').on('click', function (e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Retrieve File");
    })
    $('#activate-step-1').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Options");
    })
    // Back BTNs for each step
    $('#backto-step-2').on('click', function (e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Member Fields");

    })
    $('#backto-step-3').on('click', function (e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').removeClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Preview");

    })
    $('#backto-step-4').on('click', function (e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Retrieve File");
    })
    // Cancel BTNs for each step
    $('#backto-step-1').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Options");
    })
    $('#cancel2').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Options");
    })
    $('#cancel3').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Options");
    })
    $('#cancel4').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Options");
    })
    $('#cancel5').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        // shorten wrapper 
        $('#content-wrapper-sm').addClass('contain-wrapper');
        // shorten wrapper END
        $('#pagetitle').html("Options");
    })
});

// Show Hide Step-1 Elements //

var checkbox1 = $('#checkbox1'),
exclude_certain = $('#exclude_certain'),
exclude_certain2 = $('#exclude_certain2'),
radio01 = $('#radio01'),
radio02 = $('#radio02'),
radio03 = $('#radio03'),
allRows = $('.row_content');

allRows.hide();

radio01.find('input').change(function() {
    if ($(this)[0].checked) {
        // checkbox1.hide();
        exclude_certain.hide();
        exclude_certain2.hide();
    }
});

radio02.find('input').change(function() {
    if ($(this)[0].checked) {
        // checkbox1.show();
        exclude_certain.show();
        exclude_certain2.hide();
    } else {
        // checkbox1.hide();
    }
});

radio03.find('input').change(function() {
    if ($(this)[0].checked) {
        exclude_certain.hide();
        exclude_certain2.show();
        // checkbox1.hide();
    } else {
        exclude_certain.hide();
    }
});

checkbox1.find('input').change(function() {
    if ($(this)[0].checked) {
        exclude_certain.show();
    } else {
        exclude_certain.hide();
    }
});