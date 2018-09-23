import Ember from 'ember';

export default Ember.Controller.extend({
    applicationController: Ember.inject.controller('application'),
    stats: Ember.computed.reads('applicationController'),
    config: Ember.computed.reads('applicationController.config'),
    
    roundPercent: Ember.computed('stats.model.stats', 'model', {
        get() {
            let percent = this.get('model.roundShares') / this.get('stats.model.stats.roundShares');
            if (!percent) {
                return 0;
            }
            return percent;
        }
    })
});
