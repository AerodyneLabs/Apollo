import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  stationType: DS.attr('string'),
  location: DS.attr(),
  center: DS.belongsTo('center'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  master: DS.belongsTo('tower')
});
