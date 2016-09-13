var callback_popup, body;

$(function ($) {

    body = $('body');

    callback_popup = $('#callback_popup').dialog({
        autoOpen: false,
        modal: true,
        closeOnEscape: true,
        closeText: '',
        dialogClass: 'dialog_close_butt_mod_1 dialog_g_size_1 ',
        appendTo: '.wrapper',
        width: 570,
        draggable: true,
        open: function (event, ui) {

        },
        close: function (event, ui) {

        }
    });

    body.delegate('.callbackBtn', 'click', function () {
        callback_popup.dialog('open');

        return false;
    });

    $('.validateMe').validationEngine({
        scroll: false,
        showPrompts: false,
        showArrow: false,
        addSuccessCssClassToField: 'success',
        addFailureCssClassToField: 'error',
        parentFormClass: '.orderForm',
        parentFieldClass: '.formCell',
        promptPosition: "centerRight",
        autoHidePrompt: true,
        autoHideDelay: 2000,
        autoPositionUpdate: true,
        addPromptClass: 'relative_mode',
        showOneMessage: false
    });
    
    all_dialog_close();

});

function all_dialog_close() {
    body.on('click', '.ui-widget-overlay', all_dialog_close_gl);
}

function all_dialog_close_gl() {
    $(".ui-dialog-content").each(function () {
        var $this = $(this);
        if (!$this.parent().hasClass('always_open')) {
            $this.dialog("close");
        }
    });
}

$(window).on('resize', function () {
    
    $(".ui-dialog-content.popup").dialog("option", "position", {
        my: "center center",
        at: "center center",
        of: window
    });

});