import Ember from 'ember';

export function divide(a, b) {
    return (a / b).toFixed(1);
};

export default Ember.Helper.helper(divide);