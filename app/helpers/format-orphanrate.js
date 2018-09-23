import Ember from 'ember';

export function formatOrphanRate(orphanRate) {
    return (orphanRate * 100).toFixed(1);
}

export default Ember.Helper.helper(formatOrphanRate);