import Ember from 'ember';

var Block = Ember.Object.extend({
    variance: Ember.computed('difficulty', 'shares', 'height', function() {
        let shares = this.get('shares');
        let difficulty = this.get('difficulty');
        let height = this.get('height');
        if (!shares || !difficulty) {
            return 0;
        }
        
        let percent = shares / difficulty;
        return (percent * 100).toFixed(1);
    }),

    isLucky: Ember.computed('variance', function() {
        return this.get('variance') <= 100.0;
    }),

    isOk: Ember.computed('orphan', function() {
        return !this.get('orphan');
    }),

    formatReward: Ember.computed('reward', function() {
        let reward;
        if (!this.get('orphan')) {
            reward = parseInt(this.get('reward')) * 0.00000001;
        } else {
            reward = 0;
        }
        return reward.toFixed(8);
    })
});

export default Block;