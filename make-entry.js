module.exports = entry

function Entry(path, stat) {
  if(stat.error){
    var error = stat.error;
    delete stat.error
  }
  this.path = path
  this.stat = stat
  this.error = error
  this._ignored = false
}

var cons = Entry
  , proto = cons.prototype

proto.ignore = function(bool) {
  this._ignored = bool === undefined ?
    true : !!bool
}

proto.ignored = function() {
  return this._ignored
}

function entry(path, stat) {
  return new Entry(path, stat)
}
