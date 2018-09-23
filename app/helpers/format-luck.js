import Ember from 'ember';

export function formatLuck(luck) {
    //if (luck >= 2) {
    //    return 100;
    //}
    return (luck * 100).toFixed(1);
}

export default Ember.Helper.helper(formatLuck);