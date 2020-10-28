"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ICGC_BACKGROUNDS = exports.LAYER_TYPE_SYMBOL = exports.LAYER_TYPE_LINE = exports.LAYER_TYPE_RASTER = exports.LAYER_TYPE_FILL_EXTRUSION = exports.LAYER_TYPE_FILL = exports.LAYER_TYPE_CIRCLE = exports.LAYER_TYPE_BACKGROUND = exports.SOURCE_TYPE_GEOJSON = exports.SOURCE_TYPE_VECTOR = exports.SOURCE_TYPE_RASTER = exports.SCHEME_TMS = exports.SCHEME_XYZ = void 0;
const SCHEME_XYZ = "xyz";
exports.SCHEME_XYZ = SCHEME_XYZ;
const SCHEME_TMS = "tms";
exports.SCHEME_TMS = SCHEME_TMS;
const SOURCE_TYPE_RASTER = "raster";
exports.SOURCE_TYPE_RASTER = SOURCE_TYPE_RASTER;
const SOURCE_TYPE_VECTOR = "vector";
exports.SOURCE_TYPE_VECTOR = SOURCE_TYPE_VECTOR;
const SOURCE_TYPE_GEOJSON = "geojson";
exports.SOURCE_TYPE_GEOJSON = SOURCE_TYPE_GEOJSON;
const LAYER_TYPE_BACKGROUND = "background";
exports.LAYER_TYPE_BACKGROUND = LAYER_TYPE_BACKGROUND;
const LAYER_TYPE_CIRCLE = "circle";
exports.LAYER_TYPE_CIRCLE = LAYER_TYPE_CIRCLE;
const LAYER_TYPE_FILL = "fill";
exports.LAYER_TYPE_FILL = LAYER_TYPE_FILL;
const LAYER_TYPE_FILL_EXTRUSION = "fill-extrusioN";
exports.LAYER_TYPE_FILL_EXTRUSION = LAYER_TYPE_FILL_EXTRUSION;
const LAYER_TYPE_RASTER = "raster";
exports.LAYER_TYPE_RASTER = LAYER_TYPE_RASTER;
const LAYER_TYPE_LINE = "line";
exports.LAYER_TYPE_LINE = LAYER_TYPE_LINE;
const LAYER_TYPE_SYMBOL = "symbol";
exports.LAYER_TYPE_SYMBOL = LAYER_TYPE_SYMBOL;
const DEFAULT_ICGC_BACKGROUNDS = [{
  "name": "Clar",
  "styleid": 0,
  "style": "https://geoserveis.icgc.cat/contextmaps/positron.json",
  "icon": "https://openicgc.github.io/img/positron.png"
}, {
  "name": "Orto",
  "styleid": 1,
  "style": "https://geoserveis.icgc.cat/contextmaps/hibrid.json",
  "icon": "https://openicgc.github.io/img/orto.png"
}, {
  "name": "Fosc",
  "styleid": 2,
  "style": "http://tilemaps.icgc.cat/tileserver/styles/water.json",
  "icon": "https://openicgc.github.io/img/fulldark.png"
}, {
  "name": "Terreny",
  "styleid": 3,
  "style": "https://tilemaps.icgc.cat/tileserver/styles/terrain.json",
  "icon": "https://openicgc.github.io/img/terrain.png"
}];
exports.DEFAULT_ICGC_BACKGROUNDS = DEFAULT_ICGC_BACKGROUNDS;