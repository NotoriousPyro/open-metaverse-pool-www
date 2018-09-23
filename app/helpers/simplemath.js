import Ember from 'ember';

export function divide(a, b, precision) {
    if (!precision) {
        precision = 1;
    }
    return (a / b).toFixed(precision);
};

export function sum(a, b, precision) {
    if (!precision) {
        precision = 1;
    }
    return (a + b).toFixed(precision);
};

export default Ember.Helper.helper(divide);
export default Ember.Helper.helper(sum);