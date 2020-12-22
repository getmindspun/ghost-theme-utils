gs.ready(function () {
    var action = gs.getParameterByName('action');
    var success = gs.getParameterByName('success');

    if (action === 'subscribe' && (success === null || success === 'true')) {
        gs('body').addClass('subscribe-success');
    }
    if (action === 'subscribe' && success === 'false') {
        gs('body').addClass('subscribe-failure');
    }
    gs('.subscribe-notification .subscribe-close-button').click(function () {
        gs('.subscribe-notification').addClass('close');
    });
    // Reset form on opening subscription overlay
    gs('.subscribe-button').click(function () {
        gs('.subscribe-overlay form').removeClass();
        gs('.subscribe-email').val('');
    });
});
