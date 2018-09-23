import Ember from 'ember';

export function withMetricPrefix(params) {
    let n = params[0];
    
    if (n < 1000) {
        return n;
    }
    
    let units = ['K', 'M', 'G', 'T', 'P'];
    let i = 0;
    while (n > 1000) {
        n = n / 1000;
        i++;
    }
    return n.toFixed(params[1]) + ' ' + units[i - 1];
}

export default Ember.Helper.helper(withMetricPrefix);
