import Ember from 'ember';
import Payment from "../models/payment";
import config from '../config/environment';

export default Ember.Route.extend({
    model: function() {
        let url = config.APP.ApiUrl + 'api/payments';
        return Ember.$.getJSON(url).then(function(data) {
            if (data.payments) {
                data.payments = data.payments.map(function(p) {
                    return Payment.create(p);
                });
            }
            return data;
        });
    }
});
