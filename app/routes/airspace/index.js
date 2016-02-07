import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Explorer',

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

    params['page_size'] = 100;

    return new Ember.RSVP.hash({
      centers: this.store.query('center', params),
      towers: this.store.query('tower', params),
      navaids: this.store.query('navaid', params),
      airspaces: this.store.query('airspace', params)
    });
  }
});
