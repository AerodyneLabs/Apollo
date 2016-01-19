import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  effective: DS.attr('date'),
  lowAltitude: DS.attr('number'),
  lowAgl: DS.attr('boolean'),
  highAltitude: DS.attr('number'),
  highAgl: DS.attr('boolean'),
  boundary: DS.attr()
});
