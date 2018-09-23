import Ember from 'ember';

export function formatBalance(value) {
    return (value * 0.00000001).toFixed(8);
}

export default Ember.Helper.helper(formatBalance);
