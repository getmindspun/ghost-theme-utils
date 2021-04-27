gtu.ready(function () {
    var action = gtu.getParameterByName('action');
    var success = gtu.getParameterByName('success');

    if (action === 'subscribe' && (success === null || success === 'true')) {
        gtu('body').addClass('subscribe-success');
    }
    if (action === 'subscribe' && success === 'false') {
        gtu('body').addClass('subscribe-failure');
    }
    gtu('.subscribe-notification .subscribe-close-button').click(function () {
        gtu('.subscribe-notification').addClass('close');
    });
    // Reset form on opening subscription overlay
    gtu('.subscribe-button').click(function () {
        gtu('.subscribe-overlay form').removeClass();
        gtu('.subscribe-email').val('');
    });
});
