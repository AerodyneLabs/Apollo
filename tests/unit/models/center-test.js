import { moduleForModel, test } from 'ember-qunit';

moduleForModel('center', 'Unit | Model | center', {
  // Specify the other units that are required for this test.
  needs: ['model:airspace-volume']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
