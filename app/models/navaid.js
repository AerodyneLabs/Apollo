import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  effective: DS.attr('date'),
  location: DS.attr(),
  city: DS.attr('string'),
  state: DS.attr('string'),
  variation: DS.attr('number'),
  serviceVolume: DS.attr('string'),
  stationType: DS.attr('string')
});
