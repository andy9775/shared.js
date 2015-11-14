/**
 * Coded by: Andy (github.com/andy9775)
 */
'use strict';

var Share = require('./index');
var id = 'buttonTest';

Share.getShare(id).canProceed = function() {
  for (var internal in this) {
    if (internal.indexOf('toggle') !== -1) {
      if (!this[internal]) {
        return false;
      }
    }
  }
  return true;
};

Share.getShare(id).switch = function() {
  Share.getShare(id)[this.name] ?
    Share.getShare(id)[this.name] = false : Share.getShare(id)[this.name] = true;
};
function ToggleSwitch(name, sharedState, toggleFunction) {
  this.name = name;
  this.share = sharedState;
  this.toggle = toggleFunction;
}
var toggle1 = new ToggleSwitch('toggle1',
  Share.getShare(id, 'toggle1', false),
  Share.getShare(id).switch);

var toggle2 = new ToggleSwitch('toggle2',
  Share.getShare(id, 'toggle2', false),
  Share.getShare(id).switch);

var button = {
  share: Share.getShare(id),
  press: function() {
    return this.share.canProceed();
  }
};

console.log(button.press());// false
toggle1.toggle();
console.log(button.press());// false
toggle2.toggle();
console.log(button.press());// true

// lets add a new toggle
var toggle3 = new ToggleSwitch('toggle3',
  Share.getShare(id, 'toggle3', false),
  Share.getShare(id).switch);

console.log(button.press()); // false
toggle3.toggle();
console.log(button.press());// true