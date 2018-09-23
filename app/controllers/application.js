import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
    get config() {
        return config.APP;
    },

    height: Ember.computed('model.nodes', {
        get() {
            let node = this.get('bestNode');
            if (node) {
                return parseInt(node.height);
            }
            return 0;
        }
    }),
    
    totalWorkers: Ember.computed('model.totalWorkers', {
        get() {
            return this.getWithDefault('model.totalWorkers', 0);
        }
    }),

    roundShares: Ember.computed('model.stats', {
        get() {
            return this.get('model.stats.roundShares');
        }
    }),

    difficulty: Ember.computed('model.nodes', {
        get() {
            let node = this.get('bestNode');
            if (node) {
                return parseInt(node.difficulty);
            }
            return 0;
        }
    }),

    hashrate: Ember.computed('difficulty', {
        get() {
            return this.getWithDefault('difficulty', 0) / config.APP.BlockTime;
        }
    }),

    immatureTotal: Ember.computed('model', {
        get() {
            return this.getWithDefault('model.immatureTotal', 0) + this.getWithDefault('model.candidatesTotal', 0);
        }
    }),

    bestNode: Ember.computed('model.nodes', {
        get() {
            let node;
            this.get('model.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (parseInt(node.height) < parseInt(n.height)) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound: Ember.computed('model', {
        get() {
            return this.get('model.lastBlockFound') || 0;
        }
    }),

    roundVariance: Ember.computed('model', {
        get() {
            let roundShares = this.get('model.stats.roundShares');
            let difficulty = this.get('difficulty');
            let percent = roundShares / difficulty;
            if (!percent) {
                return 0;
            }
            return (percent * 100).toFixed(1);
        }
    }),

    nextEpoch: Ember.computed('height', {
        get() {
            let blocktime = config.APP.BlockTime;
            let height = this.getWithDefault('height', 1);
            let epochOffset = (30000 - (height % 30000)) * (1000 * blocktime);
            return Date.now() + epochOffset;
        }
    })
});