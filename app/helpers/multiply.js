export function divide(params) {
    return params.reduce((a, b) => {
        return (a / b).toFixed(1);
    });
};

export default Ember.Helper.helper(devide);