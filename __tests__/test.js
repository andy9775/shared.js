/**
 * Coded by: Andy (github.com/andy9775)
 */
'use strict';
jest.autoMockOff();
var Shared = require('../index');

describe('Shared object test', function(){
  it('Should not return undefined', function(){
    expect(Shared.getShare()).toBeDefined();
  });

  it('Should set the initial property and value',function(){
    var id= 'propertyTest';
    var first = Shared.getShare(id, 'someProperty', 12);
    expect(first.someProperty).toEqual(12);
  });

  it('Should return the same object based on the id argument', function(){
    var id = 'shareIdTest2';
    var first = Shared.getShare(id, 'sharedProperty', 5);
    var second = Shared.getShare(id);
    expect(first).toEqual(second);
  });


});