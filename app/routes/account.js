import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    model: function(params) {
        let url = config.APP.ApiUrl + 'api/accounts/' + params.login;
        return Ember.$.getJSON(url).then(function(data) {
            data.login = params.login;
            return Ember.Object.create(data);
        });
    },

    actions: {
        error(error) {
            if (error.status === 404) {
                return this.transitionTo('not-found');
            }
        }
    }
});
