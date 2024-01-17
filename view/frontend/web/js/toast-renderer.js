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
            text: message.text,
            duration: 3000,
            close: true,
            gravity: 'bottom',
            position: 'center',
            stopOnFocus: true,
            escapeMarkup: false,
        })
    };
});
