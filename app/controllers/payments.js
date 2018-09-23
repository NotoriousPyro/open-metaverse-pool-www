import Ember from 'ember';

export default Ember.Controller.extend({
    applicationController: Ember.inject.controller('application'),
    stats: Ember.computed.reads('applicationController'),
    config: Ember.computed.reads('applicationController.config'),
    
    nextPaymentETA: Ember.computed('model', {
        get() {
            let payments = this.get('model.payments');
            let time = Math.round(new Date().getTime() / 1000);
            if (Array.isArray(payments)) {
                var timestamp = payments[0].timestamp + 7200;
                if ((timestamp - time) <= 0) {
                    timestamp = time;
                }
            }
            return timestamp || time;
        }
    })
});
