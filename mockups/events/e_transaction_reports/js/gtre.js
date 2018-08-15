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

// Modal Resize to Children //

$(function () {

    $('#demo-modal-3').on('shown.bs.modal', function () {
        $(this).find('.modal-dialog').css({
            width: 'auto',
            height: 'auto',
            'max-height': '100%'
        });
    });
});

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
        $('#pagetitle').html("Configure Data");
    })
    $('#activate-step-3').on('click', function (e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('#pagetitle').html("Notification Email");

    })
    $('#activate-step-4').on('click', function (e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('#pagetitle').html("Finish");

    })
    $('#activate-step-1').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html("Settings");
    })
    $('#backto-step-2').on('click', function (e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $('#pagetitle').html("Configure Data");

    })
    $('#backto-step-3').on('click', function (e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('#pagetitle').html("Notification Email");

    })
    $('#backto-step-4').on('click', function (e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('#pagetitle').html("Finish");

    })
    $('#backto-step-1').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html("Settings");
    })
    $('#cancel2').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html("Settings");
    })
    $('#cancel3').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html("Settings");
    })
    $('#cancel4').on('click', function (e) {
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li:eq(3)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#pagetitle').html("Settings");
    })
});

// Show Hide Step-4 Elements //

var ondemand_button_fields = $('#ondemand_button_fields'),
non_ondemand_button_fields = $('#non_ondemand_button_fields'),
allRows = $('.row_content4');

allRows.hide();

// Show Hide Step-2 Elements //

var checkbox2 = $('#checkbox2'),
checkbox2a = $('#checkbox2a'),
instance_fields2 = $('#instance_fields2'),
daily_to_lastquarter_bothdates2 = $('#daily_to_lastquarter_bothdates2'),
allRows = $('.row_content2');

allRows.hide();

instance_fields2.show();

checkbox2a.find('input').change(function() {

    if ($(this)[0].checked) {
    
    } else {
       
    }
});

checkbox2.find('input').change(function() {

    if ($(this)[0].checked) {
        daily_to_lastquarter_bothdates2.show();
    } else {
   
        daily_to_lastquarter_bothdates2.hide();
    }
});

// Show Hide Step-1 Elements //

var list_choice = $('#list_choice'),
checkbox1 = $('#checkbox1'),
once_a_sch_date1 = $('#once_a_sch_date1'),
name_and_description1 = $('#name_and_description1'),
daily_to_lastquarter_bothdates1 = $('#daily_to_lastquarter_bothdates1'),
radio_btns_step1 = $('#radio_btns_step1'),

allRows = $('.row_content'),
list = ['On-Demand', 'Once a scheduled date', 'Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Yearly', 'Last day of month', 'Last day of quarter'];

allRows.hide();
checkbox1.show();

checkbox1.find('input').change(function() {

    if ($(this)[0].checked) {
        name_and_description1.show();
    } else {
        name_and_description1.hide();
    }
});

// Dropdown Conditionals //

//var selectedFrequency = 'listitems';

function updateSelectedFrequency(value) {

    $("#list_choice").html(list[value]);

    if (value == 0) {
        allRows.hide();
        checkbox1.show();

        checkbox2.show();
        checkbox2a.hide();
        daily_to_lastquarter_bothdates2.hide();

        ondemand_button_fields.show();
        non_ondemand_button_fields.hide();

    } else if (value == 1) {
     allRows.hide();
     checkbox1.hide();
     name_and_description1.show();
     once_a_sch_date1.show();
     radio_btns_step1.show();

     checkbox2.show();
     checkbox2a.hide();
     daily_to_lastquarter_bothdates2.hide();

     non_ondemand_button_fields.show();
     ondemand_button_fields.hide();

 } else if (value > 1) {
    allRows.hide();
    checkbox1.hide();
    name_and_description1.show();
    daily_to_lastquarter_bothdates1.show();
    radio_btns_step1.show();

    checkbox2a.show();
    checkbox2.hide();
    daily_to_lastquarter_bothdates2.hide();

    non_ondemand_button_fields.show();
    ondemand_button_fields.hide();
}
}

for (var i = 0; i < list.length; i++){
   html = '<li><a href="javascript:updateSelectedFrequency(\'' + i + '\')">' + list[i] + '</a></li>';
   $('#dropdown_items').append(html);
}

updateSelectedFrequency(0);

// Multi-pane Modal //

+

function ($) {
    'use strict';

    var modals = $('.modal.multi-step');

    modals.each(function (idx, modal) {
        var $modal = $(modal);
        var $buttons = $modal.find('button.step');
        var total_num_steps = $buttons.length;
        var $progress = $modal.find('.m-progress');
        var $progress_bar = $modal.find('.m-progress-bar');
        var $progress_stats = $modal.find('.m-progress-stats');
        var $progress_current = $modal.find('.m-progress-current');
        var $progress_total = $modal.find('.m-progress-total');
        var $progress_complete = $modal.find('.m-progress-complete');
        var reset_on_close = $modal.attr('reset-on-close') === 'true';

        function reset() {
            $modal.find('.step').hide();
            $modal.find('[data-step]').hide();
        }

        function completeSteps() {
            $progress_stats.hide();
            $progress_complete.show();
            $modal.find('.progress-text').animate({
                top: '-2em'
            });
            $modal.find('.complete-indicator').animate({
                top: '-2em'
            });
            $progress_bar.addClass('completed');
        }

        function getPercentComplete(current_step, total_steps) {
            return Math.min(current_step / total_steps * 100, 100) + '%';
        }

        function updateProgress(current, total) {
            $progress_bar.animate({
                width: getPercentComplete(current, total)
            });
            if (current - 1 >= total_num_steps) {
                completeSteps();
            } else {
                $progress_current.text(current);
            }

            $progress.find('[data-progress]').each(function () {
                var dp = $(this);
                if (dp.data().progress <= current - 1) {
                    dp.addClass('completed');
                } else {
                    dp.removeClass('completed');
                }
            });
        }

        function goToStep(step) {
            reset();
            var to_show = $modal.find('.step-' + step);
            if (to_show.length === 0) {
                // at the last step, nothing else to show
                return;
            }
            to_show.show();
            var current = parseInt(step, 10);
            updateProgress(current, total_num_steps);
            findFirstFocusableInput(to_show).focus();
        }

        function findFirstFocusableInput(parent) {
            var candidates = [parent.find('input'), parent.find('select'),
            parent.find('textarea'), parent.find('button')
            ],
            winner = parent;
            $.each(candidates, function () {
                if (this.length > 0) {
                    winner = this[0];
                    return false;
                }
            });
            return $(winner);
        }

        function bindEventsToModal($modal) {
            var data_steps = [];
            $('[data-step]').each(function () {
                var step = $(this).data().step;
                if (step && $.inArray(step, data_steps) === -1) {
                    data_steps.push(step);
                }
            });

            $.each(data_steps, function (i, v) {
                $modal.on('next.m.' + v, {
                    step: v
                }, function (e) {
                    goToStep(e.data.step);
                });
            });
        }

        function initialize() {
            reset();
            updateProgress(1, total_num_steps);
            $modal.find('.step-1').show();
            $progress_complete.hide();
            $progress_total.text(total_num_steps);
            bindEventsToModal($modal, total_num_steps);
            $modal.data({
                total_num_steps: $buttons.length,
            });
            if (reset_on_close) {
                //Bootstrap 2.3.2
                $modal.on('hidden', function () {
                    reset();
                    $modal.find('.step-1').show();
                })
                    //Bootstrap 3
                    $modal.on('hidden.bs.modal', function () {
                        reset();
                        $modal.find('.step-1').show();
                    })
                }
            }
            initialize();
        })
}(jQuery);

