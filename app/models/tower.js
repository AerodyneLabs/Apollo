import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  stationType: DS.attr('string'),
  location: DS.attr(),
  center: DS.belongsTo('center'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  master: DS.belongsTo('tower'),

  leafletLocation: Ember.computed('location', function() {
    let coords = this.get('location.coordinates');
    return [coords[1], coords[0]];
  })
});
