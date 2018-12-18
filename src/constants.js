//@flow

export const SCHEME_XYZ = "xyz";
export const SCHEME_TMS = "tms";

export const SOURCE_TYPE_RASTER = "raster";
export const SOURCE_TYPE_VECTOR = "vector";
export const SOURCE_TYPE_GEOJSON = "geojson";

export const LAYER_TYPE_BACKGROUND = "background";
export const LAYER_TYPE_CIRCLE = "circle";
export const LAYER_TYPE_FILL = "fill";
export const LAYER_TYPE_FILL_EXTRUSION = "fill-extrusioN";
export const LAYER_TYPE_RASTER = "raster";
export const LAYER_TYPE_LINE = "line";
export const LAYER_TYPE_SYMBOL = "symbol";

export const  DEFAULT_ICGC_BACKGROUNDS = [
	{
		"name": "Clar",
		"styleid": 0,
		"style": "https://geoserveis.icgc.cat/contextmaps/positron.json",
		"icon": "https://openicgc.github.io/img/positron.png"
	},
	{
		"name": "Orto",
		"styleid": 1,
		"style": "https://geoserveis.icgc.cat/contextmaps/hibrid.json",
		"icon": "https://openicgc.github.io/img/orto.png"
	},
	{
		"name": "Fosc",
		"styleid": 2,
		"style": "http://tilemaps.icgc.cat/tileserver/styles/water.json",
		"icon": "https://openicgc.github.io/img/fulldark.png"
	},
	{
		"name": "Terreny",
		"styleid": 3,
		"style": "https://tilemaps.icgc.cat/tileserver/styles/terrain.json",
		"icon": "https://openicgc.github.io/img/terrain.png"
	}
];
