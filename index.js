/**
 * Coded by: Andy (github.com/andy9775)
 */
'use strict';

module.exports = {
  _sharePool: {},
  getShare: function(id, property, initialValue) {
    var sharedInstance = {};
    id = id || 'defaultId';
    property = property || 'defaultProperty';
    if (!this._sharePool.hasOwnProperty(id)) {
      sharedInstance[property] = initialValue;
      this._sharePool[id] = sharedInstance;
      return sharedInstance;
    } else if (this._sharePool.hasOwnProperty(id) && initialValue !== undefined) {
      sharedInstance = this._sharePool[id];
      sharedInstance[property] = initialValue;
      return sharedInstance;
    } else if (this._sharePool.hasOwnProperty(id) && initialValue === undefined) {
      return this._sharePool[id];
    }
  }
};