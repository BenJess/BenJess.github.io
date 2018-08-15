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
        $('#pagetitle').html('Configure Data');
    });
    $('#activate-step-3').on('click', function (e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('#pagetitle').html('Notification Email');

    });
    $('#activate-step-4').on('click', function (e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('#pagetitle').html('Finish');

    });
    $('#activate-step-1').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html('Settings');
    });
    $('#backto-step-2').on('click', function (e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $('#pagetitle').html('Configure Data');

    });
    $('#backto-step-3').on('click', function (e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('#pagetitle').html('Notification Email');

    });
    $('#backto-step-4').on('click', function (e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('#pagetitle').html('Finish');

    });
    $('#backto-step-1').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html('Settings');
    });
    $('#cancel2').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html('Settings');
    });
    $('#cancel3').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html('Settings');
    });
    $('#cancel4').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html('Settings');
    });
});

// Show Hide Step-1 Elements //

var list_choice = $('#list_choice'),
    released = $('.draft'),
    AB1 = $('.released'),
    AB2 = $('.sent'),
    drip = $('.drip'),

    allRows = $('.row_content'),
    list = ['Role Based', 'A/B Testing 1', 'A/B Testing 2', 'Drip'];

allRows.hide();
released.show();

// Dropdown Conditionals //

//var selectedFrequency = 'listitems';

function updateSelectedFrequency(value) {

    $('#list_choice').html(list[value]);

    if (value == 0) {
        allRows.show();

    } else if (value == 1) {
        allRows.hide();
        released.show();

    } else if (value == 2) {
        allRows.hide();
        AB1.show();

    } else if (value == 3) {
        allRows.hide();
        AB2.show();
    }
}

for (var i = 0; i < list.length; i++) {
    html = '<li><a href="javascript:updateSelectedFrequency(\'' + i + '\')">' + list[i] + '</a></li>';
    $('#dropdown_items').append(html);
}

updateSelectedFrequency(0);