import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    model: function() {
        let url = config.APP.ApiUrl + 'api/miners';
        return Ember.$.getJSON(url).then(function(data) {
            if (data.miners) {
                data.miners = Object.keys(data.miners).map((value) => {
                    let m = data.miners[value];
                    m.login = value;
                    return m;
                });
                data.miners = data.miners.sort((a, b) => {
                    if (a.hr < b.hr) {
                        return 1;
                    }
                    if (a.hr > b.hr) {
                        return -1;
                    }
                    return 0;
                });
            }
            return data;
        });
    }
});
