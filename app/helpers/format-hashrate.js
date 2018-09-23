import Ember from 'ember';

export function formatHashrate(params) {
    let hashrateNum = params[0];
    let returnType = params[1];
    let hashrateUnit = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
    let iMax = hashrateUnit.length - 1;
    for (var i = 0; (hashrateNum > 1000) && (i < iMax); i++) {
        hashrateNum = hashrateNum / 1000;
    }
    switch(returnType) {
    case 1:
        return hashrateNum.toFixed(2);
        break;
    case 0:
    default:
        return hashrateNum.toFixed(2) + " " + hashrateUnit[Math.min(i, iMax)] + "H/s";
    }
}

export default Ember.Helper.helper(formatHashrate);
