import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  effective: DS.attr('date'),
  volumes: DS.hasMany('airspace-volume'),
  location: DS.attr(),
  city: DS.attr('string'),
  state: DS.attr('string'),

  leafletLocation: Ember.computed('location', function() {
    let coords = this.get('location.coordinates');
    return [coords[1], coords[0]];
  })
});
