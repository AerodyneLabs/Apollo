import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    bounds: {
      refreshModel: true
    }
  },

  model(params) {
    for(var key in params) {
      if(!params[key]) {
        delete params[key];
      }
    }
    return this.store.query('center', params);
  }
});
