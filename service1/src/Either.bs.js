// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function fold(hl, hr, elr) {
  if (elr.tag) {
    return Curry._1(hr, elr[0]);
  } else {
    return Curry._1(hl, elr[0]);
  }
}

function flatMap(fn, elr) {
  if (elr.tag) {
    return Curry._1(fn, elr[0]);
  } else {
    return /* Left */Block.__(0, [elr[0]]);
  }
}

function fmap(fn, x) {
  if (x.tag) {
    return /* Right */Block.__(1, [Curry._1(fn, x[0])]);
  } else {
    return /* Left */Block.__(0, [x[0]]);
  }
}

function bimap(fl, fr, elr) {
  if (elr.tag) {
    return /* Right */Block.__(1, [Curry._1(fr, elr[0])]);
  } else {
    return /* Left */Block.__(0, [Curry._1(fl, elr[0])]);
  }
}

function from_option(errMsg, opt) {
  if (opt !== undefined) {
    return /* Right */Block.__(1, [Js_primitive.valFromOption(opt)]);
  } else {
    return /* Left */Block.__(0, [errMsg]);
  }
}

exports.fold = fold;
exports.flatMap = flatMap;
exports.fmap = fmap;
exports.bimap = bimap;
exports.from_option = from_option;
/* No side effect */
