(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["musicutil"] = factory();
	else
		root["musicutil"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module) => {

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var SCALES = [{
  name: "Major",
  alt_names: ["Ionian"],
  intervals: [0, 2, 4, 5, 7, 9, 11, 12],
  chords: [[1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19], [1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22], [24, 26], [1, 2, 3, 4, 5, 6, 7, 14]]
}, {
  name: "Natural Minor",
  alt_names: ["Minor", "Aeolian"],
  intervals: [0, 2, 3, 5, 7, 8, 10, 12],
  chords: [[14, 15, 17, 19, 21, 22], [24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19], [1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22]]
}, {
  name: "Harmonic Minor",
  intervals: [0, 2, 3, 5, 7, 8, 11, 12],
  chords: [[14, 16, 17], [24, 25, 26], [12], [17, 18, 19, 20, 21, 24, 25, 26], [1, 8, 12, 13, 14, 15], [1, 2, 3, 16, 17, 18, 24, 25], [12, 24, 25], [14, 16, 17]]
}, {
  name: "Melodic Minor",
  intervals: [0, 2, 3, 5, 7, 9, 11, 12],
  chords: [[14, 16, 17, 18, 20], [14, 15, 17, 18, 19], [12], [1, 2, 4, 8, 9], [1, 8, 9, 10, 12, 13, 14, 15], [24, 26], [12, 13, 24, 26], [14, 16, 17, 18, 20]]
}, {
  name: "Dorian",
  intervals: [0, 2, 3, 5, 7, 9, 10, 12],
  chords: [[14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19], [1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22], [24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23]]
}, {
  name: "Phrygian",
  intervals: [0, 1, 3, 5, 7, 8, 10, 12],
  chords: [[14, 15, 17, 19], [1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22], [24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19]]
}, {
  name: "Lydian",
  intervals: [0, 2, 4, 6, 7, 9, 11, 12],
  chords: [[1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22], [24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19], [1, 2, 3, 4, 5]]
}, {
  name: "Mixolydian",
  intervals: [0, 2, 4, 5, 7, 9, 10, 12],
  chords: [[1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22], [24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19], [1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15]]
}, {
  name: "Locrian",
  intervals: [0, 1, 3, 5, 6, 8, 10, 12],
  chords: [[24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19], [1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 10, 11, 14, 15], [14, 15, 17, 19, 21, 22], [24, 26]]
}, {
  name: "Gypsy Minor",
  intervals: [0, 2, 3, 6, 7, 8, 11, 12],
  chords: [[16, 17, 24], [], [12], [], [1, 3, 12, 14], [1, 3, 8, 16, 17, 19, 24, 26], [1, 2, 12, 17, 18], [16, 17, 24]]
}, {
  name: "Whole Tone",
  intervals: [0, 2, 4, 6, 8, 10, 12],
  chords: [[12, 13], [12, 13], [12, 13], [12, 13], [12, 13], [12, 13], [12, 13]]
}, {
  name: "Major Pentatonic",
  intervals: [0, 2, 4, 7, 9, 12],
  chords: [[1, 2, 4], [14, 15], [], [14], [14, 15, 17, 19], [1, 2, 4]]
}, {
  name: "Minor Pentatonic",
  intervals: [0, 3, 5, 7, 10, 12],
  chords: [[14, 15, 17, 19], [1, 2, 4], [14, 15], [], [14], [14, 15, 17, 19]]
}, {
  name: "Major Bebop",
  intervals: [0, 2, 4, 5, 7, 8, 9, 11, 12],
  chords: [[1, 2, 3, 4, 5, 6, 7, 12, 14], [14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 8, 12, 13, 14, 15, 17, 19], [1, 2, 3, 4, 5, 16, 17, 18, 20, 24, 25], [1, 2, 4, 8, 9, 10, 11, 14, 15], [12, 24, 25], [14, 15, 16, 17, 19, 21, 22], [24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 12, 14]]
}, {
  name: "Altered Scale",
  intervals: [0, 1, 3, 4, 6, 8, 10, 12],
  chords: [[12, 13, 24, 26], [14, 16, 17, 18, 20], [14, 15, 17, 18, 19], [12], [1, 2, 4, 8, 9], [1, 8, 9, 10, 12, 13, 14, 15], [24, 26], [12, 13, 24, 26]]
}, {
  name: "Dorian Bebop",
  intervals: [0, 2, 3, 4, 5, 7, 9, 10, 12],
  chords: [[1, 2, 4, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19, 21, 22], [1, 2, 3, 4, 5], [24, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19, 24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [1, 2, 4, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21, 22, 23]]
}, {
  name: "Mixolydian Bebop",
  intervals: [0, 2, 4, 5, 7, 9, 10, 11, 12],
  chords: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15], [14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19, 24, 26], [1, 2, 3, 4, 5, 6, 7, 14], [1, 2, 4, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21, 22, 23], [14, 15, 17, 19, 21, 22], [1, 2, 3, 4, 5], [24, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15]]
}, {
  name: "Blues Scale",
  alt_names: ["Blues"],
  intervals: [0, 3, 5, 6, 7, 10, 12],
  chords: [[14, 15, 17, 19, 24, 26], [1, 2, 4, 17, 18, 20], [14, 15], [], [], [14], [14, 15, 17, 19, 24, 26]]
}, {
  name: "Diminished Whole Half",
  intervals: [0, 2, 3, 5, 6, 8, 9, 11, 12],
  chords: [[24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25]]
}, {
  name: "Diminished Half Whole",
  intervals: [0, 1, 3, 4, 6, 7, 9, 10, 12],
  chords: [[1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26], [24, 25], [1, 2, 8, 17, 18, 19, 24, 25, 26]]
}, {
  name: "Neapolitan Major",
  intervals: [0, 1, 3, 5, 7, 9, 11, 12],
  chords: [[14, 16, 17, 18], [12, 13], [12, 13], [1, 8, 9, 12, 13], [12, 13], [12, 13, 24, 26], [12, 13], [14, 16, 17, 18]]
}, {
  name: "Hungarian Major",
  intervals: [0, 3, 4, 6, 7, 9, 10, 12],
  chords: [[1, 2, 8, 17, 18, 19, 24, 25, 26], [1, 2, 17, 18, 24, 25], [24], [24, 25, 26], [], [17, 18, 19, 24, 25, 26], [], [1, 2, 8, 17, 18, 19, 24, 25, 26]]
}, {
  name: "Harmonic Major",
  intervals: [0, 2, 4, 5, 7, 8, 11, 12],
  chords: [[1, 3, 5, 6, 12, 14], [24, 25, 26], [1, 8, 12, 13, 17, 19], [16, 17, 18, 20, 24, 25], [1, 2, 8, 14, 15], [12, 24, 25], [24, 25], [1, 3, 5, 6, 12, 14]]
}, {
  name: "Hungarian Minor",
  intervals: [0, 2, 3, 6, 7, 8, 11, 12],
  chords: [[16, 17, 24], [], [12], [], [1, 3, 12, 14], [1, 3, 8, 16, 17, 19, 24, 26], [1, 2, 12, 17, 18], [16, 17, 24]]
}, {
  name: "Lydian Minor",
  intervals: [0, 2, 4, 6, 7, 8, 10, 12],
  chords: [[1, 8, 9, 12, 13], [12, 13], [12, 13, 24, 26], [12, 13], [14, 16, 17, 18], [12, 13], [12, 13], [1, 8, 9, 12, 13]]
}, {
  name: "Neapolitan Minor",
  intervals: [0, 1, 3, 5, 7, 8, 11, 12],
  chords: [[14, 16, 17], [1, 3, 5, 8, 9], [12, 13], [17, 19, 21, 24, 26], [12, 13], [1, 2, 3, 14, 16, 17, 18], [12], [14, 16, 17]]
}, {
  name: "Major Locrian",
  intervals: [0, 2, 4, 5, 6, 8, 10, 12],
  chords: [[12, 13], [12, 13, 24, 26], [12, 13], [14, 16, 17, 18], [12, 13], [12, 13], [1, 8, 9, 12, 13], [12, 13]]
}, {
  name: "Leading Whole Tone",
  intervals: [0, 2, 4, 6, 8, 10, 11, 12],
  chords: [[12, 13], [12, 13], [1, 8, 9, 12, 13], [12, 13], [12, 13, 24, 26], [12, 13], [14, 16, 17, 18], [12, 13]]
}, {
  name: "Six Tone Symmetrical",
  intervals: [0, 1, 4, 5, 8, 9, 11, 12],
  chords: [[12], [1, 3, 8, 12, 13, 16, 17, 19], [1, 2, 12, 14], [1, 3, 12, 16, 17, 24], [12], [1, 3, 5, 12, 16, 17], [], [12]]
}, {
  name: "Arabian",
  intervals: [0, 2, 4, 5, 6, 8, 10, 12],
  chords: [[12, 13], [12, 13, 24, 26], [12, 13], [14, 16, 17, 18], [12, 13], [12, 13], [1, 8, 9, 12, 13], [12, 13]]
}, {
  name: "Balinese",
  intervals: [0, 1, 3, 7, 8, 12],
  chords: [[17], [], [], [], [1, 3, 14], [17]]
}, {
  name: "Byzantine",
  intervals: [0, 1, 3, 5, 7, 8, 11, 12],
  chords: [[14, 16, 17], [1, 3, 5, 8, 9], [12, 13], [17, 19, 21, 24, 26], [12, 13], [1, 2, 3, 14, 16, 17, 18], [12], [14, 16, 17]]
}, {
  name: "Hungarian Gypsy",
  intervals: [0, 2, 4, 6, 7, 8, 10, 12],
  chords: [[1, 8, 9, 12, 13], [12, 13], [12, 13, 24, 26], [12, 13], [14, 16, 17, 18], [12, 13], [12, 13], [1, 8, 9, 12, 13]]
}, {
  name: "Persian",
  intervals: [0, 1, 4, 5, 6, 8, 11, 12],
  chords: [[12], [1, 3, 8, 14, 15, 16, 17, 19], [1, 2, 4, 12], [16, 17, 24], [14, 15], [12, 13], [14], [12]]
}, {
  name: "East Indian Purvi",
  intervals: [0, 1, 4, 6, 7, 8, 11, 12],
  chords: [[1, 3, 12], [14, 15, 16, 17, 19, 24, 26], [1, 2, 4, 12, 17, 18, 20], [14, 15], [], [12, 13], [14], [1, 3, 12]]
}, {
  name: "Oriental",
  intervals: [0, 1, 4, 5, 6, 9, 10, 12],
  chords: [[], [12], [], [1, 3, 12, 14], [1, 3, 8, 16, 17, 19, 24, 26], [1, 2, 12, 17, 18], [16, 17, 24], []]
}, {
  name: "Double Harmonic",
  intervals: [0, 1, 4, 5, 7, 8, 11, 12],
  chords: [[1, 3, 12, 14], [1, 3, 8, 16, 17, 19, 24, 26], [1, 2, 12, 17, 18], [16, 17, 24], [], [12], [], [1, 3, 12, 14]]
}, {
  name: "Enigmatic",
  intervals: [0, 1, 4, 6, 8, 10, 11, 12],
  chords: [[12, 13], [14, 15, 16, 17, 18, 19], [1, 2, 4, 12], [1, 8, 9, 10, 14, 15], [12, 13], [24, 26], [14], [12, 13]]
}, {
  name: "Overtone",
  intervals: [0, 2, 4, 6, 7, 9, 10, 12],
  chords: [[1, 2, 4, 8, 9], [1, 8, 9, 10, 12, 13, 14, 15], [24, 26], [12, 13, 24, 26], [14, 16, 17, 18, 20], [14, 15, 17, 18, 19], [12], [1, 2, 4, 8, 9]]
}, {
  name: "Eight Tone Spanish",
  intervals: [0, 1, 3, 4, 5, 6, 8, 10, 12],
  chords: [[12, 13, 24, 26], [1, 2, 3, 4, 5, 6, 7, 14, 16, 17, 18, 20], [14, 15, 17, 18, 19, 20, 21, 22, 23], [12], [14, 15, 16, 17, 19], [1, 2, 3, 4, 5, 8, 9], [1, 2, 4, 8, 9, 10, 11, 12, 13, 14, 15], [14, 15, 17, 19, 21, 22, 24, 26], [12, 13, 24, 26]]
}, {
  name: "Prometheus",
  intervals: [0, 2, 4, 6, 9, 10, 12],
  chords: [[], [1, 8, 9, 12, 13], [], [12, 13, 24, 26], [14, 17, 18], [12], []]
}, {
  name: "Gagaku Ryo Sen Pou",
  intervals: [0, 2, 4, 7, 9, 12],
  chords: [[1, 2, 4], [14, 15], [], [14], [14, 15, 17, 19], [1, 2, 4]]
}, {
  name: "Zokugaku Yo Sen Pou",
  intervals: [0, 3, 5, 7, 10, 12],
  chords: [[14, 15, 17, 19], [1, 2, 4], [14, 15], [], [14], [14, 15, 17, 19]]
}, {
  name: "In Sen Pou",
  intervals: [0, 1, 5, 2, 8, 12],
  chords: [[], [1, 3], [17, 18], [24, 26], [], []]
}, {
  name: "Okinawa",
  intervals: [0, 4, 5, 7, 11, 12],
  chords: [[1, 3, 14], [17], [], [], [], [1, 3, 14]]
}, {
  name: "Chromatic",
  intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  chords: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]]
}];
var CHORDS = [{
  name: "Major",
  alt_names: ["Maj"],
  intervals: [0, 4, 7]
}, {
  name: "Major 6",
  alt_names: ["Maj6"],
  intervals: [0, 4, 7, 9]
}, {
  name: "Major 7",
  alt_names: ["Maj7"],
  intervals: [0, 4, 7, 11]
}, {
  name: "Major 69",
  alt_names: ["Maj69"],
  intervals: [0, 4, 7, 9, 14]
}, {
  name: "Major 9",
  alt_names: ["Maj9"],
  intervals: [0, 4, 7, 11, 14]
}, {
  name: "Major 11",
  alt_names: ["Maj11"],
  intervals: [0, 4, 7, 11, 14, 17]
}, {
  name: "Major 13",
  alt_names: ["Maj13"],
  intervals: [0, 4, 7, 11, 14, 17, 21]
}, {
  name: "Dominant 7",
  intervals: [0, 4, 7, 10]
}, {
  name: "Ninth",
  intervals: [0, 4, 7, 10, 14]
}, {
  name: "Eleventh",
  intervals: [0, 4, 7, 10, 14, 17]
}, {
  name: "Thirteenth",
  intervals: [0, 4, 7, 10, 14, 17, 21]
}, {
  name: "Augmented",
  intervals: [0, 4, 8]
}, {
  name: "Augmented 7",
  intervals: [0, 4, 8, 10]
}, {
  name: "Sus4",
  intervals: [0, 5, 7]
}, {
  name: "Seventh sus4",
  intervals: [0, 5, 7, 10]
}, {
  name: "Minor Major 7",
  alt_names: ["MinMaj7"],
  intervals: [0, 3, 7, 11]
}, {
  name: "Minor",
  alt_names: ["Min"],
  intervals: [0, 3, 7]
}, {
  name: "Minor 6",
  alt_names: ["Min6"],
  intervals: [0, 3, 7, 9]
}, {
  name: "Minor 7",
  alt_names: ["Min7"],
  intervals: [0, 3, 7, 10]
}, {
  name: "Minor 69",
  alt_names: ["Min69"],
  intervals: [0, 3, 7, 9, 14]
}, {
  name: "Minor 9",
  alt_names: ["Min9"],
  intervals: [0, 3, 7, 10, 14]
}, {
  name: "Minor 11",
  alt_names: ["Min11"],
  intervals: [0, 3, 7, 10, 14, 17]
}, {
  name: "Minor 13",
  alt_names: ["Min13"],
  intervals: [0, 3, 7, 10, 14, 17, 21]
}, {
  name: "Diminished",
  alt_names: ["Dim"],
  intervals: [0, 3, 6]
}, {
  name: "Diminished 7",
  alt_names: ["Dim7"],
  intervals: [0, 3, 6, 9]
}, {
  name: "Half Diminished 7",
  intervals: [0, 3, 6, 10]
}];

// Data data from https://github.com/fredericcormier/WesternMusicElements
//

var SCALE_CHORD_DEGREES = [{
  name: "Major",
  chords: ["I", "ii", "iii", "IV", "V", "vi", "vii°", "I7", "ii7", "iii7", "IV7", "V7", "vi7", "vii°7"]
}, {
  name: "Natural Minor",
  chords: ["i", "ii°", "III", "iv", "v", "VI", "VII", "i7", "ii°7", "III7", "iv7", "v7", "VI7", "VII7"]
}, {
  name: "Harmonic Minor",
  chords: ["i", "ii°", "III+", "iv", "V", "VI", "vii°", "i7", "ii°7", "III+7", "iv7", "V7", "VI7", "vii°7"]
}, {
  name: "Melodic Minor",
  chords: ["i", "ii", "III+", "IV", "V", "vi°", "vii°", "i7", "ii7", "III+7", "IV7", "V7", "vi°7", "vii°7"]
}, {
  name: "Dorian",
  chords: ["i", "ii", "III", "IV", "v", "vi°", "VII", "i7", "ii7", "III7", "IV7", "v7", "vi°7", "VII7"]
}, {
  name: "Phrygian",
  chords: ["i", "II", "III", "iv", "v°", "VI", "vii", "i7", "II7", "III7", "iv7", "v°7", "VI7", "vii7"]
}, {
  name: "Lydian",
  chords: ["I", "II", "iii", "iv°", "V", "vi", "vii", "I7", "II7", "iii7", "iv°7", "V7", "vi7", "vii7"]
}, {
  name: "Mixolydian",
  chords: ["I", "ii", "iii°", "IV", "v", "vi", "VII", "I7", "ii7", "iii°7", "IV7", "v7", "vi7", "VII7"]
}, {
  name: "Locrian",
  chords: ["i°", "II", "iii", "iv", "V", "VI", "vii", "i°7", "II7", "iii7", "iv7", "V7", "VI7", "vii7"]
}];

/*
  Used offline to generate the chord cross-references in the SCALES table above
  Needs to be updated when either SCALES or CHORDS changes
*/
function generateChordLookups() {
  for (var s = 0; s < SCALES.length; s++) {
    SCALES[s].chords = [];
    var numScaleIntervals = SCALES[s].intervals.length;
    for (var si = 0; si < numScaleIntervals; si++) {
      SCALES[s].chords[si] = [];
      for (var c = 0; c < CHORDS.length; c++) {
        var inKey = true;
        for (var ci = 0; ci < CHORDS[c].intervals.length; ci++) {
          var chordIntervalInKey = false;
          for (var sii = 0; sii < numScaleIntervals; sii++) {
            if ((CHORDS[c].intervals[ci] + SCALES[s].intervals[si]) % 12 === SCALES[s].intervals[sii]) {
              chordIntervalInKey = true;
              break;
            }
          }
          if (!chordIntervalInKey) {
            inKey = false;
            break;
          }
        }
        if (inKey) {
          SCALES[s].chords[si].push(c);
        }
      }
    }

    // Print it all
    var scaleString = "";
    scaleString += "{name: \"".concat(SCALES[s].name, "\"");
    if (SCALES[s].alt_names) {
      scaleString += ", alt_names: [";
      for (var an = 0; an < SCALES[s].alt_names.length; an++) {
        scaleString += "\"".concat(SCALES[s].alt_names[an], "\"");
        if (an < SCALES[s].alt_names.length - 1) {
          scaleString += ", ";
        }
      }
      scaleString += "]";
    }
    scaleString += ", intervals: [";
    for (var _int = 0; _int < SCALES[s].intervals.length; _int++) {
      scaleString += SCALES[s].intervals[_int];
      if (_int < SCALES[s].intervals.length - 1) {
        scaleString += ", ";
      }
    }
    scaleString += "], chords: [";
    for (var _c = 0; _c < SCALES[s].chords.length; _c++) {
      scaleString += "[";
      for (var _ci = 0; _ci < SCALES[s].chords[_c].length; _ci++) {
        scaleString += SCALES[s].chords[_c][_ci] + 1;
        if (_ci < SCALES[s].chords[_c].length - 1) {
          scaleString += ", ";
        }
      }
      scaleString += "]";
      if (_c < SCALES[s].chords.length - 1) {
        scaleString += ", ";
      }
    }
    scaleString += "]}";
    if (s < SCALES.length - 1) {
      scaleString += ",";
    }
    console.log(scaleString);
  }
}
function lookup_data(lookup_array, search) {
  var search_normalized = search.toLowerCase();
  var index = lookup_array.findIndex(function (s) {
    var found = s.name.toLowerCase() === search_normalized;
    if (found) return true;
    return s.alt_names ? s.alt_names.some(function (n) {
      return n.toLowerCase() === search_normalized;
    }) : false;
  });
  if (index === -1) {
    throw Error("".concat(search, " not found"));
  }
  return lookup_array[index];
}
function generate_scale_array(root_num, scale_data, length) {
  var out_array = [];
  var scale_len = scale_data.intervals.length;
  var i = 0;
  while (out_array.length < length) {
    if (i > 0 && i % scale_len == 0) {
      root_num = root_num + scale_data.intervals[scale_len - 1];
    } else {
      var note_num = root_num + scale_data.intervals[i % scale_len];
      if (note_num > 127) break;else out_array.push(note_num);
    }
    i = i + 1;
  }
  return out_array;
}

/* Generate scale from a root note.
   @param root_num MIDI note number (0-127) where scale will begin.
   @param scale_type String defining scale type (eg, "major", "aeolian" or "neapolitan major"), see class for full list.
   @param[opt] octaves Number of octaves to return, defaults to 1.
   @return Array of MIDI note number
*/
function generate_scale(root_num) {
  var scale_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var octaves = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (typeof root_num !== "number" || root_num < 0 || root_num > 127) {
    return null;
  }
  var scale_data = lookup_data(SCALES, scale_type);
  if (!scale_data) {
    return null;
  }
  var length = octaves * scale_data.intervals.length - (Math.round(octaves) - 1);
  return generate_scale_array(root_num, scale_data, length);
}

/*
   Generate given number of notes of a scale from a root note.
   @param root_num MIDI note number (0-127) where scale will begin.
   @param scale_type String defining scale type (eg, "major", "aeolian" or "neapolitan major"), see class for full list.
   @param length Number of notes to return, defaults to 8.
   @return Array of MIDI note numbers.
*/
function generate_scale_of_length(root_num, scale_type, length) {
  length = length || 8;
  var scale_data = lookup_data(SCALES, scale_type);
  if (!scale_data) return null;
  return generate_scale_array(root_num, scale_data, length);
}

/*
 Generate chord from a root note.
 @param integer root_num MIDI note number (0-127) for chord.
 @param string chord_type String defining chord type (eg, "major", "minor 7" or "sus4"), see class for full list.
 @param[opt] integer inversion Number of chord inversion.
 @return {integer...} Array of MIDI note numbers.
*/
function generate_chord(root_num) {
  var chord_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var inversion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (typeof root_num !== "number" || root_num < 0 || root_num > 127) return null;
  var chord_data = lookup_data(CHORDS, chord_type);
  if (!chord_data) return null;
  var out_array = [];
  for (var i = 0; i <= chord_data.intervals.length - 1; i++) {
    var note_num = root_num + chord_data.intervals[i];
    if (note_num > 127) break;
    out_array.push(note_num);
  }
  if (inversion) {
    for (var _i = 0; _i < inversion; _i++) {
      var note = out_array.shift();
      out_array.push(note);
    }
  }
  return out_array;
}

/*
  Generate chord from a root note.
  @param integer root_num MIDI note number (0-127) defining the key.
  @param string scale_type String defining scale type (eg, "major", "dorian"), see class for full list.
  @param string roman_chord_type Roman-numeral-style string defining chord type (eg, "V", "iv7" or "III+")
    including limited bass notes (e.g. "iv6-9") and lowercase-letter inversion notation (e.g. "IIb" for first inversion)
    Will only return chords defined in MusicUtil.CHORDS.
  @return {integer...} Array of MIDI note numbers.
*/
function generate_chord_roman(root_num, scale_type, roman_chord_type) {
  if (typeof root_num !== "number" || root_num < 0 || root_num > 127) {
    return null;
  }
  var rct = roman_chord_type || "I";
  var scale_data = lookup_data(SCALES, scale_type);
  if (!scale_data) {
    return null;
  }
  rct = rct.replaceAll("\xB0", "*").replaceAll("\xBA", "*");
  var _rct$match$slice = rct.match(/([ivxIVX]+)([+*]?)([0-9]*)-?([0-9]?)([bcdefg]?)/).slice(1),
    _rct$match$slice2 = _slicedToArray(_rct$match$slice, 5),
    degree_string = _rct$match$slice2[0],
    augdim_string = _rct$match$slice2[1],
    added_string = _rct$match$slice2[2],
    bass_string = _rct$match$slice2[3],
    inv_string = _rct$match$slice2[4];
  var d = degree_string.toLowerCase();
  var is_major = degree_string !== d;
  var is_augmented = augdim_string === "+";
  var is_diminished = augdim_string === "*";
  var is_seventh = added_string === "7";
  var chord_type = null;
  switch (true) {
    case is_major && is_augmented && is_seventh:
      chord_type = "Augmented 7";
      break;
    case is_major && is_augmented:
      chord_type = "Augmented";
      break;
    case is_major && is_diminished && is_seventh:
      chord_type = "Diminished 7";
      break;
    case is_major && is_diminished:
      chord_type = "Diminished";
      break;
    case is_major && added_string === "6" && bass_string === "9":
      chord_type = "Major 69";
      break;
    case is_major && added_string === "6":
      chord_type = "Major 6";
      break;
    case is_major && is_seventh:
      chord_type = "Major 7";
      break;
    case is_major && added_string === "9":
      chord_type = "Major 9";
      break;
    case is_major && added_string === "11":
      chord_type = "Major 11";
      break;
    case is_major && added_string === "13":
      chord_type = "Major 13";
      break;
    case is_major:
      chord_type = "Major";
      break;
    case !is_major && is_augmented && is_seventh:
      chord_type = "Augmented 7";
      break;
    case !is_major && is_augmented:
      chord_type = "Augmented";
      break;
    case !is_major && is_diminished && is_seventh:
      chord_type = "Diminished 7";
      break;
    case !is_major && is_diminished:
      chord_type = "Diminished";
      break;
    case !is_major && added_string === "6" && bass_string === "9":
      chord_type = "Minor 69";
      break;
    case !is_major && added_string === "6":
      chord_type = "Minor 6";
      break;
    case !is_major && is_seventh:
      chord_type = "Minor 7";
      break;
    case !is_major && added_string === "9":
      chord_type = "Minor 9";
      break;
    case !is_major && added_string === "11":
      chord_type = "Minor 11";
      break;
    case !is_major && added_string === "13":
      chord_type = "Minor 13";
      break;
    default:
      chord_type = is_major ? "Major" : "Minor";
      break;
  }
  var degree = null;
  var roman_numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
  for (var i = 0; i < roman_numerals.length; i++) {
    if (roman_numerals[i] === d) {
      degree = i;
      break;
    }
  }
  if (degree === null) return null;
  var inv = inv_string.toLowerCase();
  var inversion = 0;
  var inversioncodes = ["b", "c", "d", "e", "f", "g"];
  for (var _i2 = 0; _i2 < inversioncodes.length; _i2++) {
    if (inversioncodes[_i2] === inv) {
      inversion = _i2;
      break;
    }
  }
  var degree_note = root_num + scale_data.intervals[degree];
  return generate_chord(degree_note, chord_type, inversion);
}

/*
   Generate chord from a root note.
   @param integer root_num MIDI note number (0-127) defining the key.
   @param string scale_type String defining scale type (eg, "major", "dorian"), see class for full list.
   @param integer degree Number between 1-7 selecting the degree of the chord.
      See MusicUtil.SCALE_CHORD_DEGREES for chords assigned to each degree.
      Will only return chords defined in MusicUtil.CHORDS.
   @param[opt] boolean seventh Return the 7th chord if set to true (optional)
   @return {integer...} Array of MIDI note numbers.
*/
function generate_chord_scale_degree(root_num, scale_type, degree, seventh) {
  var d = Math.min(Math.max(degree, 1), 7);
  if (seventh) d + 7, _readOnlyError("d");
  var scale_data = lookup_data(MusicUtil.SCALE_CHORD_DEGREES, scale_type);
  return generate_chord_roman(root_num, scale_type, scale_data.chords[d]);
}

/*
  List chord types for a given root note and key.
  @param integer note_num MIDI note number (0-127) for root of chord.
  @param integer key_root MIDI note number (0-127) for root of key.
  @param string key_type String defining key type (eg, "major", "aeolian" or "neapolitan major"), see class for full list.
  @return {string...} Array of chord type strings that fit the criteria.
*/
function chord_types_for_note(note_num, key_root) {
  var key_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (typeof key_root !== "number" || key_root < 0 || key_root > 127) {
    return null;
  }
  var scale_data = lookup_data(SCALES, key_type);
  if (!scale_data) {
    return null;
  }
  var position_in_scale;
  for (var i = 0; i < scale_data.intervals.length; i++) {
    if (scale_data.intervals[i] == (note_num - key_root) % 12) {
      position_in_scale = i;
      break;
    }
  }
  var out_array = [];
  if (position_in_scale !== undefined) {
    for (var _i3 = 0; _i3 < scale_data.chords[position_in_scale].length; _i3++) {
      var index = scale_data.chords[position_in_scale][_i3];
      var chord_name = CHORDS[index].name;
      out_array.push(chord_name);
    }
  }
  return out_array;
}

/*
   Snap a MIDI note number to the nearest note number in an array.
   @param note_num MIDI note number input (0-127).
   @param snap_array Array of MIDI note numbers to snap to, must be in low to high order.
   @return Adjusted note number.
*/
function snap_note_to_array(note_num, snap_array) {
  var closest = snap_array[0];
  for (var i = 0; i < snap_array.length; i++) {
    if (Math.abs(note_num - snap_array[i]) < Math.abs(note_num - closest)) {
      closest = snap_array[i];
    }
  }
  return closest;
}

/*
   Snap an array of MIDI note numbers to an array of note numbers.
   @param note_nums_array Array of input MIDI note numbers.
   @param snap_array Array of MIDI note numbers to snap to, must be in low to high order.
   @return Array of adjusted note numbers.
*/
function snap_notes_to_array(note_nums_array, snap_array) {
  return note_nums_array.map(function (n) {
    return snap_note_to_array(n, snap_array);
  });
}

/*
   Return a MIDI note number's note name.
   @param note_num MIDI note number (0-127).
   @param[opt] include_octave Include octave number in return string if set to true.
   @return Name string (eg, "C#3").
*/
function note_num_to_name(note_num, include_octave) {
  var name = NOTE_NAMES[note_num % 12];
  if (include_octave) {
    name = name + Math.floor(note_num / 12 - 2);
  }
  return name;
}

/*
   Return an array of MIDI note numbers' names.
   @param note_nums_array Array of MIDI note numbers.
   @param[opt] include_octave Include octave number in return strings if set to true.
   @return Array of name strings.
*/
function note_nums_to_names(note_nums_array, include_octave) {
  return note_nums_array.map(function (n) {
    return note_num_to_name(n, include_octave);
  });
}

/*
   Return a MIDI note number's frequency.
   @param note_num MIDI note number (0-127).
   @return Frequency number in Hz.
*/
function note_num_to_freq(note_num) {
  return 13.75 * Math.pow(2, (note_num - 9) / 12);
}

/*
   Return an array of MIDI note numbers' frequencies.
   @param note_nums_array Array of MIDI note numbers.
   @return Array of frequency numbers in Hz.
*/
function note_nums_to_freqs(note_nums_array) {
  return note_nums_array.map(note_num_to_freq);
}

/*
   Return a frequency's nearest MIDI note number.
   @param freq Frequency number in Hz.
   @return MIDI note number (0-127).
*/
function freq_to_note_num(freq) {
  return Math.min(Math.max(Math.floor(12 * Math.log(freq / 440.0) / Math.log(2) + 69.5), 0), 127);
}

/*
   Return an array of frequencies' nearest MIDI note numbers.
   @param freqs_array Array of frequency numbers in Hz.
   @return Array of MIDI note numbers.
*/
function freqs_to_note_nums(freqs_array) {
  return freqs_array.map(freq_to_note_num);
}

/*
   Return the ratio of an interval.
   @param interval Interval in semitones.
   @return Ratio number.
*/
function interval_to_ratio(interval) {
  return Math.pow(2, interval / 12);
}

/*
   Return an array of ratios of intervals.
   @param intervals_array Array of intervals in semitones.
   @return Array of ratio numbers.
*/
function intervals_to_ratios(intervals_array) {
  return intervals_array.map(interval_to_ratio);
}

/*
   Return the interval of a ratio.
   @param ratio Ratio number.
   @return Interval in semitones.
*/
function ratio_to_interval(ratio) {
  return 12 * Math.log(ratio) / Math.log(2);
}

/*
   Return an array of intervals of ratios.
   @param ratios_array Array of ratio numbers.
   @return Array of intervals in semitones.
*/
function ratios_to_intervals(ratios_array) {
  return ratios_array.map(ratio_to_interval);
}
module.exports = {
  NOTE_NAMES: NOTE_NAMES,
  SCALES: SCALES,
  SCALE_CHORD_DEGREES: SCALE_CHORD_DEGREES,
  lookup_data: lookup_data,
  generate_scale_array: generate_scale_array,
  generate_scale: generate_scale,
  generate_scale_of_length: generate_scale_of_length,
  generate_chord: generate_chord,
  generate_chord_roman: generate_chord_roman,
  generate_chord_scale_degree: generate_chord_scale_degree,
  chord_types_for_note: chord_types_for_note,
  snap_note_to_array: snap_note_to_array,
  snap_notes_to_array: snap_notes_to_array,
  note_num_to_name: note_num_to_name,
  note_nums_to_names: note_nums_to_names,
  note_num_to_freq: note_num_to_freq,
  note_nums_to_freqs: note_nums_to_freqs,
  freq_to_note_num: freq_to_note_num,
  freqs_to_note_nums: freqs_to_note_nums,
  interval_to_ratio: interval_to_ratio,
  intervals_to_ratios: intervals_to_ratios,
  ratio_to_interval: ratio_to_interval,
  ratios_to_intervals: ratios_to_intervals
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});