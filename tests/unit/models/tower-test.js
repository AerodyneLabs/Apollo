import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tower', 'Unit | Model | tower', {
  // Specify the other units that are required for this test.
  needs: ['model:center']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
