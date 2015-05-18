function handleSubmit(args, dialog) {
    var jqDialog = jQuery('#' + dialog);
    if (args.validationFailed) {
        jqDialog.effect('shake', {times: 3}, 100);
    } else {
        PF(dialog).hide();
    }
}
function confirmDelete() {
    if (!confirm("Are you sure you want to delete Emploee?")){
      return false;
    }
}
