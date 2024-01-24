define([
    'toastify',
], function (Toastify) {
    'use strict';

    /**
     * @param {{ text: string; type: string; }} message
     * @return {Toastify}
     */
    return function (message) {
        return Toastify({
            text: '<div class="toast-content">' + message.text + '</div>',
            className: 'is-' + message.type,
            duration: 3000,
            close: true,
            gravity: 'bottom',
            position: 'center',
            stopOnFocus: true,
            escapeMarkup: false,
        })
    };
});
