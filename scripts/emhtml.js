// CodeMirror //

$(document).ready(function () {
    var minLines = 99;
    var startingValue = ('<!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n\n<body>\nThe content of the document......\n</body>\n\n</html>');
    for (var i = 0; i < minLines; i++) {
        startingValue += '\n';
        
    }

    var editor = CodeMirror(document.getElementById('codeeditor'), {
        mode : 'xml',
        htmlMode: true,
        lineNumbers: true,
        gutter: true,
        lineWrapping: true,
        autoRefresh: true
        //value: startingValue

    })
    editor.setValue(startingValue);
});

// Date Picker //

$(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : 'body';
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

// Email Prog Indicator //

$(function () {
    $('#hide_nav').hide();
    $('#step-1').hide();
    $('#step-2').hide();
    $('#step-3').hide();

    $('#advance_build').click(function () {

        $('#build_step1').hide();
        $('#step-1').show();
        $('#hide_nav').show();
        $('#pagetitle').html('Content Builder');

        // Progress Indicator //

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

        $('#backto-step-2').on('click', function (e) {
            $('#pagetitle').html('Send Preview');
            $('#dynamic-container').css({
             'width': '768px', 
             'min-width': '768px'
         });
            $('.inner-content-wrapper').css({
             'width': '768px', 
             'min-width': '768px'
         });
            $('ul.setup-panel li:eq(1)').removeClass('disabled');
            $('ul.setup-panel li:eq(0)').addClass('disabled');
            $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        });
        $('#activate-step-2').on('click', function (e) {
            $('#pagetitle').html('Send Preview');
            $('#dynamic-container').css({
             'width': '768px', 
             'min-width': '768px'
         });
            $('.inner-content-wrapper').css({
             'width': '768px', 
             'min-width': '768px'
         });
            $('ul.setup-panel li:eq(1)').removeClass('disabled');
            $('ul.setup-panel li:eq(0)').addClass('disabled');
            $('ul.setup-panel li a[href="#step-2"]').trigger('click');

        });
        $('#activate-step-3').on('click', function (e) {
            $('#pagetitle').html('Schedule');
            $('#dynamic-container').css({
             'width': '1360px', 
             'max-width': '1360px'
         });
            $('.inner-content-wrapper').css({
             'width': '1330px',
             'min-width': '900px'
         });
            $('ul.setup-panel li:eq(2)').removeClass('disabled');
            $('ul.setup-panel li:eq(1)').addClass('disabled');
            $('ul.setup-panel li a[href="#step-3"]').trigger('click');

        });
        $('#activate-step-1').on('click', function (e) {
            $('#pagetitle').html('Build Content');
            $('#dynamic-container').css({
             'width': '1360px', 
             'max-width': '1360px'
         });
            $('.inner-content-wrapper').css({
             'width': '1330px',
             'min-width': '900px'
         });
            $('ul.setup-panel li:eq(0)').removeClass('disabled');
            $('ul.setup-panel li:eq(2)').addClass('disabled');
            $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        });
        $('#activate-step-0').on('click', function () {
            window.location.reload();
        });
        $('#saveto-home').on('click', function () {
            window.location.reload();
        });
    });
});

$('#released_table').html('<div class="data-grid-container"><ul class="data-grid-row"> <li class="column-header data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0" value="on"> <label for="0"></label> </div> </li> <li class="column-header data-grid-column sm-column">Edit</li> <li class="column-header data-grid-column" style="color: #4a90e2">Name</li> <li class="column-header data-grid-column" style="color: #4a90e2">Owner</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Last Edited</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Last Run Date</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Next Run Date</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Status</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0a" value="on"> <label for="0a"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0b" value="on"> <label for="0b"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0c" value="on"> <label for="0c"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0d" value="on"> <label for="0d"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0e" value="on"> <label for="0e"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0f" value="on"> <label for="0f"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0g" value="on"> <label for="0g"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul></div> </div>');
$('#draft_table').html('<div class="data-grid-container"><ul class="data-grid-row"> <li class="column-header data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0" value="on"> <label for="0"></label> </div> </li> <li class="column-header data-grid-column sm-column">Edit</li> <li class="column-header data-grid-column" style="color: #4a90e2">Name</li> <li class="column-header data-grid-column" style="color: #4a90e2">Owner</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Last Edited</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Last Run Date</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Next Run Date</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Status</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0a" value="on"> <label for="0a"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0b" value="on"> <label for="0b"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0c" value="on"> <label for="0c"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0d" value="on"> <label for="0d"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0e" value="on"> <label for="0e"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0f" value="on"> <label for="0f"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0g" value="on"> <label for="0g"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> </div> </div>');
$('#both_table').html('<div class="data-grid-container"><ul class="data-grid-row"> <li class="column-header data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0" value="on"> <label for="0"></label> </div> </li> <li class="column-header data-grid-column sm-column">Edit</li> <li class="column-header data-grid-column" style="color: #4a90e2">Name</li> <li class="column-header data-grid-column" style="color: #4a90e2">Owner</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Last Edited</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Last Run Date</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Next Run Date</li> <li class="column-header data-grid-column sm-column" style="color: #4a90e2">Status</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0a" value="on"> <label for="0a"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0b" value="on"> <label for="0b"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0c" value="on"> <label for="0c"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0d" value="on"> <label for="0d"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0e" value="on"> <label for="0e"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0f" value="on"> <label for="0f"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> <ul class="data-grid-row"> <li class="data-grid-column sm-column"> <div class="checkbox"> <input type="checkbox" id="0g" value="on"> <label for="0g"></label> </div> </li> <li class="data-grid-column sm-column"> <div class="table-dropdown"> <button class="enc-btn cog dropdown-toggle" type="button" data-toggle="dropdown" style="text-align: left"><span class="fa fa-cog fa-2x" style="color:green"></span></button> <ul class="table-delux-dropdown-menu btn-block menu_arrow_box"> <li><a href="#">Edit Email Details</a></li> <li><a href="#">Build Email Content</a></li> <li><a href="#">View Email</a></li> <li><a href="#">Send Preview</a></li> <li><a href="#">Choose Recipients</a></li> <li><a href="#">Schedule Email</a></li> <li class="table-delux-divider"></li> <li><a href="#">Delete</a></li> </ul> </div> </li> <li class="data-grid-column">2017-04-03 Luke Mackey</li> <li class="data-grid-column">Cosmo Janice</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">02-02-1980 10:05am</li> <li class="data-grid-column sm-column">Released</li> </ul> </div> </div>');

 // Multi-pane Modal With Percent Bar//

 $(function () {

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
});
