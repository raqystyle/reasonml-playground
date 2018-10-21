// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function create(id, name) {
  return /* record */[
          /* id */id,
          /* name */name
        ];
}

function encodeUser(user) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "id",
                String(user[/* id */0])
              ],
              /* :: */[
                /* tuple */[
                  "name",
                  user[/* name */1]
                ],
                /* [] */0
              ]
            ]);
}

function decodeUser(data) {
  return /* record */[
          /* id */Json_decode.field("id", Json_decode.$$int, data),
          /* name */Json_decode.field("name", Json_decode.string, data)
        ];
}

exports.create = create;
exports.encodeUser = encodeUser;
exports.decodeUser = decodeUser;
/* Json_encode Not a pure module */
