import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    intl: Ember.inject.service(),

    beforeModel() {
        this.get('intl').setLocale('en-us');
    },

    model: function() {
        let url = config.APP.ApiUrl + 'api/stats';
        return Ember.$.getJSON(url).then(function(data) {
            data.totalWorkers = 0;
            for (let node of data.nodes) {
                node.difficulty = parseInt(node.difficulty);
                node.height = parseInt(node.height);
                node.lastBeat = parseInt(node.lastBeat);
                for (let stratum of node.stratums) {
                    stratum.difficulty = parseInt(stratum.difficulty);
                    stratum.minerCount = parseInt(stratum.minerCount);
                    stratum.port = parseInt(stratum.listen.split(":")[1]);
                    data.totalWorkers = data.totalWorkers + parseInt(stratum.minerCount);
                }
                node.stratums.sort(function (a, b) {
                    return a.difficulty - b.difficulty;
                });
            }
            return data;
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (!applicationTimer) {
            var applicationTimer = Ember.run.later(this, this.refresh, 15000);
        }
    },
    
    resetController: function(controller, isExiting, transition) {
        this._super.apply(this, arguments);
        if (isExiting) {
            Ember.run.cancel(this.applicationTimer);
        }
    }
});