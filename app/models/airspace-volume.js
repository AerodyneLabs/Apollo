import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  effective: DS.attr('date'),
  lowAltitude: DS.attr('number'),
  lowAgl: DS.attr('boolean'),
  highAltitude: DS.attr('number'),
  highAgl: DS.attr('boolean'),
  boundary: DS.attr(),

  leafletLocations: Ember.computed('boundary', function() {
    let coords = this.get('boundary.coordinates');
    if(coords) {
      return coords[0].map((item, index, enumerable) => {
        return [item[1], item[0]];
      });
    }
  })
});
