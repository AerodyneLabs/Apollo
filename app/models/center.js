import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  effective: DS.attr('date'),
  volumes: DS.hasMany('airspace-volume'),
  location: DS.attr(),
  city: DS.attr('string'),
  state: DS.attr('string')
});
