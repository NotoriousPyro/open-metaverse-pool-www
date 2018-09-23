import Ember from 'ember';

export function formatBlocksMined(params) {
    return ((params[0] + params[1]) / params[2]).toFixed(1);
}

export default Ember.Helper.helper(formatBlocksMined);