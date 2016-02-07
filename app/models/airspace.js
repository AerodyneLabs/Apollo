import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  effective: DS.attr('date'),
  classification: DS.attr('string'),
  volumes: DS.hasMany('airspace-volume')
});
