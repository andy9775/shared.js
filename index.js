/**
 * Coded by: Andy (github.com/andy9775)
 */
'use strict';

module.exports = {
  _sharePool: {},
  _systemInstance: {},
  getShare: function(id, property, initialValue) {
    var sharedInstance = {};
    if (id === undefined && property === undefined && initialValue === undefined){
      return this._systemInstance;
    } else if (!this._sharePool.hasOwnProperty(id) && property !== undefined
      && initialValue !== undefined) {
      sharedInstance[property] = initialValue;
      this._sharePool[id] = sharedInstance;
    } else if (!this._sharePool.hasOwnProperty(id)) {
      this._sharePool[id] = sharedInstance;
    } else if (this._sharePool.hasOwnProperty(id) && initialValue !== undefined) {
      sharedInstance = this._sharePool[id];
      sharedInstance[property] = initialValue;
    } else if (this._sharePool.hasOwnProperty(id) && initialValue === undefined) {
      return this._sharePool[id];
    }
    return sharedInstance;
  }
};