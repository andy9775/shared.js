# shared.js
A factory for a passive mediator design pattern in <25 lines of Javascript 

## Use case:
The motivation of this project was to easily share state amongst React Native components allowing for lose coupling between them. This allows a component to update the state and the others to see the update, and is a light weight alternative to using an event emitter since it does not use callbacks. Rather it is up to the Observers to check the state changes. 
### Installation
Use `npm install shared.js --save`
#### Example
A use case could include a button that needs to check the state of multiple on/off switches before proceeding. Rather than coupling the switches to the button, a shared object can be used by the switches to change state,and the button to perform a check when it is pressed.

```
var Share = require('shared.js');
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
var toggle1 = {
  name: 'toggle1',
  share: Share.getShare(id, 'toggle1', false),
  toggle: Share.getShare(id).switch
};


var toggle2 = {
  name: 'toggle2',
  share: Share.getShare(id, 'toggle2', false),
  toggle: Share.getShare(id).switch
};

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
var toggle3 = {
  name: 'toggle3',
  share: Share.getShare(id, 'toggle3', false),
  toggle: Share.getShare(id).switch
};
console.log(button.press()); // false
toggle3.toggle();
console.log(button.press());// true
```

### Functions
 
- **`getShare`** _(id, property, initialValue)_ - retrieve a shared state object as identified by the id argument. All arguments are optional and are set to a default value except for initialValue which is set to undefined. 

---
**MIT Licenced**