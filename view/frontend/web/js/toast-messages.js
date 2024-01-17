require([
    'jquery',
    'underscore',
    'Magento_Customer/js/customer-data',
    'Ubermanu_Toast/js/toast-renderer',
    'jquery/jquery-storageapi'
], function ($, _, customerData, createToast) {
    'use strict';

    // Show toast message
    function showToastMessage(data) {
        if (_.isArray(data.messages)) {
            data.messages.forEach(function (message) {
                createToast(message).showToast();
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
