require([
    'jquery',
    'underscore',
    'Magento_Customer/js/customer-data',
    'toastify',
    'jquery/jquery-storageapi'
], function ($, _, customerData, Toastify) {
    'use strict';

    // Show toast message
    function showToastMessage(data) {
        if (_.isArray(data.messages)) {
            data.messages.forEach(function (message) {
                Toastify({
                    text: message.text,
                    duration: 3000,
                    close: true,
                    gravity: 'bottom',
                    position: 'center',
                    stopOnFocus: true,
                    escapeMarkup: false,
                }).showToast();
            })
        }
    }

    // Show initial messages
    const cookieMessages = $.cookieStorage.get('mage-messages');
    showToastMessage({ messages: cookieMessages });
    $.cookieStorage.set('mage-messages', '');

    const messages = customerData.get('messages').extend({
        disposableCustomerData: 'messages'
    });

    // Force to clean obsolete messages
    if (!_.isEmpty(messages().messages)) {
        customerData.set('messages', {});
    }

    messages.subscribe(showToastMessage);
});
