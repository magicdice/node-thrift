//
// Autogenerated by Thrift
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
ttypes.ConsistencyLevel = { 
'ZERO' : 0
,'ONE' : 1
,'QUORUM' : 2
,'DCQUORUM' : 3
,'DCQUORUMSYNC' : 4
,'ALL' : 5
,'ANY' : 6
}
ttypes.VERSION = '2.1.0'
var Column = module.exports.Column = function(args){
this.name = null
this.value = null
this.timestamp = null
if( args != null ){if (null != args.name)
this.name = args.name
if (null != args.value)
this.value = args.value
if (null != args.timestamp)
this.timestamp = args.timestamp
}}
Column.prototype = {}
Column.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
  var ret = input.readFieldBegin()
  var fname = ret.fname
  var ftype = ret.ftype
  var fid   = ret.fid
  if (ftype == Thrift.Type.STOP) 
    break
  switch(fid)
  {
    case 1:    if (ftype == Thrift.Type.STRING) {
      var rtmp = input.readString()
this.name = rtmp.value
    } else {
      input.skip(ftype)
    }
    break
    case 2:    if (ftype == Thrift.Type.STRING) {
      var rtmp = input.readString()
this.value = rtmp.value
    } else {
      input.skip(ftype)
    }
    break
    case 3:    if (ftype == Thrift.Type.I64) {
      var rtmp = input.readI64()
this.timestamp = rtmp.value
    } else {
      input.skip(ftype)
    }
    break
    default:
      input.skip(ftype)
  }
  input.readFieldEnd()
}
input.readStructEnd()
return
}

Column.prototype.write = function(output){ 
output.writeStructBegin('Column')
if (null != this.name) {
  output.writeFieldBegin('name', Thrift.Type.STRING, 1)
  output.writeString(this.name)
  output.writeFieldEnd()
}
if (null != this.value) {
  output.writeFieldBegin('value', Thrift.Type.STRING, 2)
  output.writeString(this.value)
  output.writeFieldEnd()
}
if (null != this.timestamp) {
  output.writeFieldBegin('timestamp', Thrift.Type.I64, 3)
  output.writeI64(this.timestamp)
  output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var SuperColumn = module.exports.SuperColumn = function(args){
this.name = null
this.columns = null
if( args != null ){if (null != args.name)
this.name = args.name
if (null != args.columns)
this.columns = args.columns
}}
SuperColumn.prototype = {}
SuperColumn.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
  break
switch(fid)
{
  case 1:  if (ftype == Thrift.Type.STRING) {
    var rtmp = input.readString()
this.name = rtmp.value
  } else {
    input.skip(ftype)
  }
  break
  case 2:  if (ftype == Thrift.Type.LIST) {
    {
      var _size0 = 0
      var rtmp3
      this.columns = []
      var _etype3 = 0
      rtmp3 = input.readListBegin()
      _etype3 = rtmp3.etype
      _size0 = rtmp3.size
      for (var _i4 = 0; _i4 < _size0; ++_i4)
      {
        var elem5 = null
        elem5 = new ttypes.Column()
        elem5.read(input)
        this.columns.push(elem5)
      }
      input.readListEnd()
    }
  } else {
    input.skip(ftype)
  }
  break
  default:
    input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

SuperColumn.prototype.write = function(output){ 
output.writeStructBegin('SuperColumn')
if (null != this.name) {
output.writeFieldBegin('name', Thrift.Type.STRING, 1)
output.writeString(this.name)
output.writeFieldEnd()
}
if (null != this.columns) {
output.writeFieldBegin('columns', Thrift.Type.LIST, 2)
{
  output.writeListBegin(Thrift.Type.STRUCT, this.columns.length)
  {
    for(var iter6 in this.columns)
    {
      iter6=this.columns[iter6]
      iter6.write(output)
    }
  }
  output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var ColumnOrSuperColumn = module.exports.ColumnOrSuperColumn = function(args){
this.column = null
this.super_column = null
if( args != null ){if (null != args.column)
this.column = args.column
if (null != args.super_column)
this.super_column = args.super_column
}}
ColumnOrSuperColumn.prototype = {}
ColumnOrSuperColumn.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
  this.column = new ttypes.Column()
  this.column.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
  this.super_column = new ttypes.SuperColumn()
  this.super_column.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

ColumnOrSuperColumn.prototype.write = function(output){ 
output.writeStructBegin('ColumnOrSuperColumn')
if (null != this.column) {
output.writeFieldBegin('column', Thrift.Type.STRUCT, 1)
this.column.write(output)
output.writeFieldEnd()
}
if (null != this.super_column) {
output.writeFieldBegin('super_column', Thrift.Type.STRUCT, 2)
this.super_column.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var NotFoundException = module.exports.NotFoundException = function(args){
}
for (var property in Thrift.Exception)
NotFoundException[property] = Thrift.Exception[property]
NotFoundException.prototype = {}
NotFoundException.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

NotFoundException.prototype.write = function(output){ 
output.writeStructBegin('NotFoundException')
output.writeFieldStop()
output.writeStructEnd()
return
}

var InvalidRequestException = module.exports.InvalidRequestException = function(args){
this.why = null
if( args != null ){if (null != args.why)
this.why = args.why
}}
for (var property in Thrift.Exception)
InvalidRequestException[property] = Thrift.Exception[property]
InvalidRequestException.prototype = {}
InvalidRequestException.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.why = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

InvalidRequestException.prototype.write = function(output){ 
output.writeStructBegin('InvalidRequestException')
if (null != this.why) {
output.writeFieldBegin('why', Thrift.Type.STRING, 1)
output.writeString(this.why)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var UnavailableException = module.exports.UnavailableException = function(args){
}
for (var property in Thrift.Exception)
UnavailableException[property] = Thrift.Exception[property]
UnavailableException.prototype = {}
UnavailableException.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

UnavailableException.prototype.write = function(output){ 
output.writeStructBegin('UnavailableException')
output.writeFieldStop()
output.writeStructEnd()
return
}

var TimedOutException = module.exports.TimedOutException = function(args){
}
for (var property in Thrift.Exception)
TimedOutException[property] = Thrift.Exception[property]
TimedOutException.prototype = {}
TimedOutException.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

TimedOutException.prototype.write = function(output){ 
output.writeStructBegin('TimedOutException')
output.writeFieldStop()
output.writeStructEnd()
return
}

var AuthenticationException = module.exports.AuthenticationException = function(args){
this.why = null
if( args != null ){if (null != args.why)
this.why = args.why
}}
for (var property in Thrift.Exception)
AuthenticationException[property] = Thrift.Exception[property]
AuthenticationException.prototype = {}
AuthenticationException.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.why = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

AuthenticationException.prototype.write = function(output){ 
output.writeStructBegin('AuthenticationException')
if (null != this.why) {
output.writeFieldBegin('why', Thrift.Type.STRING, 1)
output.writeString(this.why)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var AuthorizationException = module.exports.AuthorizationException = function(args){
this.why = null
if( args != null ){if (null != args.why)
this.why = args.why
}}
for (var property in Thrift.Exception)
AuthorizationException[property] = Thrift.Exception[property]
AuthorizationException.prototype = {}
AuthorizationException.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.why = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

AuthorizationException.prototype.write = function(output){ 
output.writeStructBegin('AuthorizationException')
if (null != this.why) {
output.writeFieldBegin('why', Thrift.Type.STRING, 1)
output.writeString(this.why)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var ColumnParent = module.exports.ColumnParent = function(args){
this.column_family = null
this.super_column = null
if( args != null ){if (null != args.column_family)
this.column_family = args.column_family
if (null != args.super_column)
this.super_column = args.super_column
}}
ColumnParent.prototype = {}
ColumnParent.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 3:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.column_family = rtmp.value
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.super_column = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

ColumnParent.prototype.write = function(output){ 
output.writeStructBegin('ColumnParent')
if (null != this.column_family) {
output.writeFieldBegin('column_family', Thrift.Type.STRING, 3)
output.writeString(this.column_family)
output.writeFieldEnd()
}
if (null != this.super_column) {
output.writeFieldBegin('super_column', Thrift.Type.STRING, 4)
output.writeString(this.super_column)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var ColumnPath = module.exports.ColumnPath = function(args){
this.column_family = null
this.super_column = null
this.column = null
if( args != null ){if (null != args.column_family)
this.column_family = args.column_family
if (null != args.super_column)
this.super_column = args.super_column
if (null != args.column)
this.column = args.column
}}
ColumnPath.prototype = {}
ColumnPath.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 3:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.column_family = rtmp.value
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.super_column = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.column = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

ColumnPath.prototype.write = function(output){ 
output.writeStructBegin('ColumnPath')
if (null != this.column_family) {
output.writeFieldBegin('column_family', Thrift.Type.STRING, 3)
output.writeString(this.column_family)
output.writeFieldEnd()
}
if (null != this.super_column) {
output.writeFieldBegin('super_column', Thrift.Type.STRING, 4)
output.writeString(this.super_column)
output.writeFieldEnd()
}
if (null != this.column) {
output.writeFieldBegin('column', Thrift.Type.STRING, 5)
output.writeString(this.column)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var SliceRange = module.exports.SliceRange = function(args){
this.start = null
this.finish = null
this.reversed = false
this.count = 100
if( args != null ){if (null != args.start)
this.start = args.start
if (null != args.finish)
this.finish = args.finish
if (null != args.reversed)
this.reversed = args.reversed
if (null != args.count)
this.count = args.count
}}
SliceRange.prototype = {}
SliceRange.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.finish = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.BOOL) {
var rtmp = input.readBool()
this.reversed = rtmp.value
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.count = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

SliceRange.prototype.write = function(output){ 
output.writeStructBegin('SliceRange')
if (null != this.start) {
output.writeFieldBegin('start', Thrift.Type.STRING, 1)
output.writeString(this.start)
output.writeFieldEnd()
}
if (null != this.finish) {
output.writeFieldBegin('finish', Thrift.Type.STRING, 2)
output.writeString(this.finish)
output.writeFieldEnd()
}
if (null != this.reversed) {
output.writeFieldBegin('reversed', Thrift.Type.BOOL, 3)
output.writeBool(this.reversed)
output.writeFieldEnd()
}
if (null != this.count) {
output.writeFieldBegin('count', Thrift.Type.I32, 4)
output.writeI32(this.count)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var SlicePredicate = module.exports.SlicePredicate = function(args){
this.column_names = null
this.slice_range = null
this.ignore = false
if( args != null ){if (null != args.column_names)
this.column_names = args.column_names
if (null != args.slice_range)
this.slice_range = args.slice_range
if (null != args.ignore)
this.ignore = args.ignore
}}
SlicePredicate.prototype = {}
SlicePredicate.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.LIST) {
{
var _size7 = 0
var rtmp3
this.column_names = []
var _etype10 = 0
rtmp3 = input.readListBegin()
_etype10 = rtmp3.etype
_size7 = rtmp3.size
for (var _i11 = 0; _i11 < _size7; ++_i11)
{
var elem12 = null
var rtmp = input.readString()
elem12 = rtmp.value
this.column_names.push(elem12)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.slice_range = new ttypes.SliceRange()
this.slice_range.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.BOOL) {
var rtmp = input.readBool()
this.ignore = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

SlicePredicate.prototype.write = function(output){ 
output.writeStructBegin('SlicePredicate')
if (null != this.column_names) {
output.writeFieldBegin('column_names', Thrift.Type.LIST, 1)
{
output.writeListBegin(Thrift.Type.STRING, this.column_names.length)
{
for(var iter13 in this.column_names)
{
iter13=this.column_names[iter13]
output.writeString(iter13)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.slice_range) {
output.writeFieldBegin('slice_range', Thrift.Type.STRUCT, 2)
this.slice_range.write(output)
output.writeFieldEnd()
}
if (null != this.ignore) {
output.writeFieldBegin('ignore', Thrift.Type.BOOL, 3)
output.writeBool(this.ignore)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var KeyRange = module.exports.KeyRange = function(args){
this.start_key = null
this.end_key = null
this.start_token = null
this.end_token = null
this.count = 100
if( args != null ){if (null != args.start_key)
this.start_key = args.start_key
if (null != args.end_key)
this.end_key = args.end_key
if (null != args.start_token)
this.start_token = args.start_token
if (null != args.end_token)
this.end_token = args.end_token
if (null != args.count)
this.count = args.count
}}
KeyRange.prototype = {}
KeyRange.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start_key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.end_key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.end_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.count = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

KeyRange.prototype.write = function(output){ 
output.writeStructBegin('KeyRange')
if (null != this.start_key) {
output.writeFieldBegin('start_key', Thrift.Type.STRING, 1)
output.writeString(this.start_key)
output.writeFieldEnd()
}
if (null != this.end_key) {
output.writeFieldBegin('end_key', Thrift.Type.STRING, 2)
output.writeString(this.end_key)
output.writeFieldEnd()
}
if (null != this.start_token) {
output.writeFieldBegin('start_token', Thrift.Type.STRING, 3)
output.writeString(this.start_token)
output.writeFieldEnd()
}
if (null != this.end_token) {
output.writeFieldBegin('end_token', Thrift.Type.STRING, 4)
output.writeString(this.end_token)
output.writeFieldEnd()
}
if (null != this.count) {
output.writeFieldBegin('count', Thrift.Type.I32, 5)
output.writeI32(this.count)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var KeySlice = module.exports.KeySlice = function(args){
this.key = null
this.columns = null
if( args != null ){if (null != args.key)
this.key = args.key
if (null != args.columns)
this.columns = args.columns
}}
KeySlice.prototype = {}
KeySlice.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.LIST) {
{
var _size14 = 0
var rtmp3
this.columns = []
var _etype17 = 0
rtmp3 = input.readListBegin()
_etype17 = rtmp3.etype
_size14 = rtmp3.size
for (var _i18 = 0; _i18 < _size14; ++_i18)
{
var elem19 = null
elem19 = new ttypes.ColumnOrSuperColumn()
elem19.read(input)
this.columns.push(elem19)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

KeySlice.prototype.write = function(output){ 
output.writeStructBegin('KeySlice')
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 1)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.columns) {
output.writeFieldBegin('columns', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRUCT, this.columns.length)
{
for(var iter20 in this.columns)
{
iter20=this.columns[iter20]
iter20.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var Deletion = module.exports.Deletion = function(args){
this.timestamp = null
this.super_column = null
this.predicate = null
if( args != null ){if (null != args.timestamp)
this.timestamp = args.timestamp
if (null != args.super_column)
this.super_column = args.super_column
if (null != args.predicate)
this.predicate = args.predicate
}}
Deletion.prototype = {}
Deletion.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.I64) {
var rtmp = input.readI64()
this.timestamp = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.super_column = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new ttypes.SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Deletion.prototype.write = function(output){ 
output.writeStructBegin('Deletion')
if (null != this.timestamp) {
output.writeFieldBegin('timestamp', Thrift.Type.I64, 1)
output.writeI64(this.timestamp)
output.writeFieldEnd()
}
if (null != this.super_column) {
output.writeFieldBegin('super_column', Thrift.Type.STRING, 2)
output.writeString(this.super_column)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var Mutation = module.exports.Mutation = function(args){
this.column_or_supercolumn = null
this.deletion = null
if( args != null ){if (null != args.column_or_supercolumn)
this.column_or_supercolumn = args.column_or_supercolumn
if (null != args.deletion)
this.deletion = args.deletion
}}
Mutation.prototype = {}
Mutation.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.column_or_supercolumn = new ttypes.ColumnOrSuperColumn()
this.column_or_supercolumn.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.deletion = new ttypes.Deletion()
this.deletion.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Mutation.prototype.write = function(output){ 
output.writeStructBegin('Mutation')
if (null != this.column_or_supercolumn) {
output.writeFieldBegin('column_or_supercolumn', Thrift.Type.STRUCT, 1)
this.column_or_supercolumn.write(output)
output.writeFieldEnd()
}
if (null != this.deletion) {
output.writeFieldBegin('deletion', Thrift.Type.STRUCT, 2)
this.deletion.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var TokenRange = module.exports.TokenRange = function(args){
this.start_token = null
this.end_token = null
this.endpoints = null
if( args != null ){if (null != args.start_token)
this.start_token = args.start_token
if (null != args.end_token)
this.end_token = args.end_token
if (null != args.endpoints)
this.endpoints = args.endpoints
}}
TokenRange.prototype = {}
TokenRange.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.end_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.LIST) {
{
var _size21 = 0
var rtmp3
this.endpoints = []
var _etype24 = 0
rtmp3 = input.readListBegin()
_etype24 = rtmp3.etype
_size21 = rtmp3.size
for (var _i25 = 0; _i25 < _size21; ++_i25)
{
var elem26 = null
var rtmp = input.readString()
elem26 = rtmp.value
this.endpoints.push(elem26)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

TokenRange.prototype.write = function(output){ 
output.writeStructBegin('TokenRange')
if (null != this.start_token) {
output.writeFieldBegin('start_token', Thrift.Type.STRING, 1)
output.writeString(this.start_token)
output.writeFieldEnd()
}
if (null != this.end_token) {
output.writeFieldBegin('end_token', Thrift.Type.STRING, 2)
output.writeString(this.end_token)
output.writeFieldEnd()
}
if (null != this.endpoints) {
output.writeFieldBegin('endpoints', Thrift.Type.LIST, 3)
{
output.writeListBegin(Thrift.Type.STRING, this.endpoints.length)
{
for(var iter27 in this.endpoints)
{
iter27=this.endpoints[iter27]
output.writeString(iter27)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

var AuthenticationRequest = module.exports.AuthenticationRequest = function(args){
this.credentials = null
if( args != null ){if (null != args.credentials)
this.credentials = args.credentials
}}
AuthenticationRequest.prototype = {}
AuthenticationRequest.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.MAP) {
{
var _size28 = 0
var rtmp3
this.credentials = {}
var _ktype29 = 0
var _vtype30 = 0
rtmp3 = input.readMapBegin()
_ktype29= rtmp3.ktype
_vtype30= rtmp3.vtype
_size28= rtmp3.size
for (var _i32 = 0; _i32 < _size28; ++_i32)
{
key33 = null
val34 = null
var rtmp = input.readString()
key33 = rtmp.value
var rtmp = input.readString()
val34 = rtmp.value
this.credentials[key33] = val34
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

AuthenticationRequest.prototype.write = function(output){ 
output.writeStructBegin('AuthenticationRequest')
if (null != this.credentials) {
output.writeFieldBegin('credentials', Thrift.Type.MAP, 1)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, this.credentials.length)
{
for(var kiter35 in this.credentials){
var viter36 = this.credentials[kiter35]
output.writeString(kiter35)
output.writeString(viter36)
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

