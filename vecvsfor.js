#!/usr/local/bin/node

var VEC_LEN = 1000000
var AVERAGING = 1000

var A = new Array(VEC_LEN);
var B = new Array(VEC_LEN);

for (var i = 0; i < VEC_LEN; ++i) {
  A[i] = Math.random();
  B[i] = Math.random();
}

var c = 0.0;

var start = new Date().getTime();

for (var j = 0; j < AVERAGING; ++j) {
  c = 0;
  for (var i = 0; i < VEC_LEN; ++i) {
    c += A[i] * B[i];
  }
}

var elapsed = new Date().getTime() - start;

console.log("c:", c);
console.log("For loop:", elapsed / AVERAGING);

