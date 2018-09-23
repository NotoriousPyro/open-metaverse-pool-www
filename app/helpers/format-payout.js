import Ember from 'ember';

export function formatPayout(value) {
    return value.toFixed(7);
}

export default Ember.Helper.helper(formatPayout);
