import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search', 'bounds'],
  search: null,
  bounds: null,

  actions: {
    updateBounds(e) {
      let bounds = e.target.getBounds();
      this.set('bounds', `${bounds.getSouth()},${bounds.getWest()}|${bounds.getNorth()},${bounds.getEast()}`);
    }
  }
});
