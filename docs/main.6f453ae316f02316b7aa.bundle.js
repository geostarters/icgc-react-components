(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1333:function(module,exports,__webpack_require__){},1334:function(module,exports,__webpack_require__){},153:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Map}));var E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(310),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(109),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(216),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(107),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(209),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(210),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(213),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(211),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(214),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),_geostarters_common__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(110),mapbox_gl__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(306),mapbox_gl__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_11__),Map=function(_React$Component){function Map(props){var _this;Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,Map),(_this=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.a)(this,Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(Map).call(this,props))).container="".concat(Date.now()).concat(Math.random());var options=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({container:_this.container},_this.props.options);return _this.map=new _geostarters_common__WEBPACK_IMPORTED_MODULE_10__.a(mapbox_gl__WEBPACK_IMPORTED_MODULE_11___default.a,_this.props.mapboxToken||"",options),_this}var _refreshStyleMap,_doUpdateMapData,_componentDidMount;return Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a)(Map,_React$Component),Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(Map,[{key:"componentDidMount",value:(_componentDidMount=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee(){return E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,this.map.create();case 2:this.props.mapData&&this.setData(this.props.mapData),this.props.showAttribution&&(console.log("showAttribution"),this.map.addControlMap(new mapbox_gl__WEBPACK_IMPORTED_MODULE_11___default.a.AttributionControl({compact:!0})));case 4:case"end":return _context.stop()}}),_callee,this)}))),function componentDidMount(){return _componentDidMount.apply(this,arguments)})},{key:"componentWillUnmount",value:function componentWillUnmount(){this.map.remove()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.options.style!==this.props.options.style)this.refreshStyleMap();else{var newObjectWithLayers=this.getNewObjectWithLayers(this.props.mapData.layers,prevProps.mapData.layers),newObjectWithSources=this.getNewObjectWithSources(this.props.mapData.sources,prevProps.mapData.sources);this.doUpdateMapData(newObjectWithLayers,newObjectWithSources)}}},{key:"getNewObjectWithLayers",value:function getNewObjectWithLayers(currentLayers,prevLayers){var layersToAdd=_geostarters_common__WEBPACK_IMPORTED_MODULE_10__.b.arrayDifference(currentLayers,prevLayers);return{layersToAdd:layersToAdd,layersToDelete:_geostarters_common__WEBPACK_IMPORTED_MODULE_10__.b.arrayDifference(prevLayers,currentLayers),layersToUpdate:_geostarters_common__WEBPACK_IMPORTED_MODULE_10__.b.arrayDifference(currentLayers,layersToAdd)}}},{key:"getNewObjectWithSources",value:function getNewObjectWithSources(currentSources,prevSources){return{newSources:_geostarters_common__WEBPACK_IMPORTED_MODULE_10__.b.arrayDifference(currentSources,prevSources),deletedSources:_geostarters_common__WEBPACK_IMPORTED_MODULE_10__.b.arrayDifference(prevSources,currentSources)}}},{key:"doUpdateMapData",value:(_doUpdateMapData=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee2(objLayers,objSources){var _iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,source,_iteratorNormalCompletion2,_didIteratorError2,_iteratorError2,_iterator2,_step2,layer,_iteratorNormalCompletion3,_didIteratorError3,_iteratorError3,_iterator3,_step3,_source,_iteratorNormalCompletion4,_didIteratorError4,_iteratorError4,_iterator4,_step4,_layer,_this2=this;return E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:for(_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0,_context2.prev=3,_iterator=objSources.newSources[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)source=_step.value,this.map.addSource(source.name,source);_context2.next=11;break;case 7:_context2.prev=7,_context2.t0=_context2.catch(3),_didIteratorError=!0,_iteratorError=_context2.t0;case 11:_context2.prev=11,_context2.prev=12,_iteratorNormalCompletion||null==_iterator.return||_iterator.return();case 14:if(_context2.prev=14,!_didIteratorError){_context2.next=17;break}throw _iteratorError;case 17:return _context2.finish(14);case 18:return _context2.finish(11);case 19:for(_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0,_context2.prev=22,_iterator2=objLayers.layersToDelete[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)layer=_step2.value,this.map.removeLayer(layer.id);_context2.next=30;break;case 26:_context2.prev=26,_context2.t1=_context2.catch(22),_didIteratorError2=!0,_iteratorError2=_context2.t1;case 30:_context2.prev=30,_context2.prev=31,_iteratorNormalCompletion2||null==_iterator2.return||_iterator2.return();case 33:if(_context2.prev=33,!_didIteratorError2){_context2.next=36;break}throw _iteratorError2;case 36:return _context2.finish(33);case 37:return _context2.finish(30);case 38:for(_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0,_context2.prev=41,_iterator3=objSources.deletedSources[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)_source=_step3.value,this.map.removeSource(_source.name);_context2.next=49;break;case 45:_context2.prev=45,_context2.t2=_context2.catch(41),_didIteratorError3=!0,_iteratorError3=_context2.t2;case 49:_context2.prev=49,_context2.prev=50,_iteratorNormalCompletion3||null==_iterator3.return||_iterator3.return();case 52:if(_context2.prev=52,!_didIteratorError3){_context2.next=55;break}throw _iteratorError3;case 55:return _context2.finish(52);case 56:return _context2.finish(49);case 57:for(_iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0,_context2.prev=60,_iterator4=objLayers.layersToAdd[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0)_layer=_step4.value,this.map.addLayer(_layer);_context2.next=68;break;case 64:_context2.prev=64,_context2.t3=_context2.catch(60),_didIteratorError4=!0,_iteratorError4=_context2.t3;case 68:_context2.prev=68,_context2.prev=69,_iteratorNormalCompletion4||null==_iterator4.return||_iterator4.return();case 71:if(_context2.prev=71,!_didIteratorError4){_context2.next=74;break}throw _iteratorError4;case 74:return _context2.finish(71);case 75:return _context2.finish(68);case 76:objLayers.layersToUpdate.forEach((function(layer){layer.paint&&_this2.updateLayerPaintProperties(layer.id,layer.paint),layer.layout&&_this2.updateLayerLayoutProperties(layer.id,layer.layout)}));case 77:case"end":return _context2.stop()}}),_callee2,this,[[3,7,11,19],[12,,14,18],[22,26,30,38],[31,,33,37],[41,45,49,57],[50,,52,56],[60,64,68,76],[69,,71,75]])}))),function doUpdateMapData(_x,_x2){return _doUpdateMapData.apply(this,arguments)})},{key:"removeDataArray",value:function removeDataArray(arr,fn){var idPropName=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new Promise((function(resolve){var _iteratorNormalCompletion5=!0,_didIteratorError5=!1,_iteratorError5=void 0;try{for(var _step5,_iterator5=arr[Symbol.iterator]();!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=!0){var item=_step5.value;fn(""!==idPropName?item[idPropName]:item)}}catch(err){_didIteratorError5=!0,_iteratorError5=err}finally{try{_iteratorNormalCompletion5||null==_iterator5.return||_iterator5.return()}finally{if(_didIteratorError5)throw _iteratorError5}}resolve()}))}},{key:"updateLayerPaintProperties",value:function updateLayerPaintProperties(layerId,paintProps){for(var _i=0,_Object$entries=Object.entries(paintProps);_i<_Object$entries.length;_i++){var _Object$entries$_i=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];this.map.setPaintProperty(layerId,key,value)}}},{key:"updateLayerLayoutProperties",value:function updateLayerLayoutProperties(layerId,layoutProps){for(var _i2=0,_Object$entries2=Object.entries(layoutProps);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_Object$entries2[_i2],2),key=_Object$entries2$_i[0],value=_Object$entries2$_i[1];this.map.setLayoutProperty(layerId,key,value)}}},{key:"refreshStyleMap",value:(_refreshStyleMap=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee3(){return E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,this.map.setMapBaseLayer(this.props.options.style);case 2:this.setData(this.props.mapData);case 3:case"end":return _context3.stop()}}),_callee3,this)}))),function refreshStyleMap(){return _refreshStyleMap.apply(this,arguments)})},{key:"setData",value:function setData(data){this.map.setData(data),this.addEventsToLayers()}},{key:"addEventsToLayers",value:function addEventsToLayers(){var _this3=this;this.props.layerEvents&&this.props.layerEvents.forEach((function(eventData){return _this3.map.subscribe(eventData.event,eventData.layerId,eventData.subscriber)}))}},{key:"render",value:function render(){var style=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({width:"100%",height:"100%"},this.props.style);return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{id:this.container,style:style})}}]),Map}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)},155:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(107),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(217);function Button(props){var buttonProps=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({color:"yellow",onClick:function onClick(){return console.log("click")}},props);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,buttonProps)}Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button\\Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\components\\Button\\Button.js"})},156:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return LogoICGC}));var E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(107),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__(1334);function LogoICGC(props){var logoProps=Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({addText:!1,position:"bottom-right",url:"http://www.icgc.cat/",logoType:"icgc-logo"},props);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:logoProps.position},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:logoProps.logoType,target:"_blank",rel:"noopener noreferrer",href:logoProps.url,"aria-label":"Icgc"}),logoProps.addText&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"logo-text"},logoProps.addText))}LogoICGC.__docgenInfo={description:"",methods:[],displayName:"LogoICGC"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\LogoICGC\\LogoICGC.js"]={name:"LogoICGC",docgenInfo:LogoICGC.__docgenInfo,path:"src\\components\\LogoICGC\\LogoICGC.js"})},215:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DEFAULT_ICGC_BACKGROUNDS}));var DEFAULT_ICGC_BACKGROUNDS=[{name:"Clar",styleid:0,style:"https://geoserveis.icgc.cat/contextmaps/positron.json",icon:"https://openicgc.github.io/img/positron.png"},{name:"Orto",styleid:1,style:"https://geoserveis.icgc.cat/contextmaps/hibrid.json",icon:"https://openicgc.github.io/img/orto.png"},{name:"Fosc",styleid:2,style:"http://tilemaps.icgc.cat/tileserver/styles/water.json",icon:"https://openicgc.github.io/img/fulldark.png"},{name:"Terreny",styleid:3,style:"https://tilemaps.icgc.cat/tileserver/styles/terrain.json",icon:"https://openicgc.github.io/img/terrain.png"}]},309:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NavButtons}));var E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(209),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(210),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(213),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(211),E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(214),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(217),NavButtons=(__webpack_require__(1333),function(_Component){function NavButtons(){return Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,NavButtons),Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(NavButtons).apply(this,arguments))}return Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(NavButtons,_Component),Object(E_usuaris_w_szczerban_icgc_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(NavButtons,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a.Group,{className:this.props.fullWidth?"full-width":""},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{basic:!0,color:this.props.color?this.props.color:"yellow",disabled:this.props.disabledPrev,floated:"left",labelPosition:"left",icon:"left chevron",content:"Anterior",onClick:this.props.goPrevStep}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{color:this.props.color?this.props.color:"yellow",disabled:this.props.disabledNext,floated:"right",labelPosition:"right",icon:"right chevron",content:"Següent",onClick:this.props.goNextStep}))}}]),NavButtons}(react__WEBPACK_IMPORTED_MODULE_5__.Component))},478:function(module){module.exports=JSON.parse('{"sources":[{"id":"WMSSostenibilitatIrradiacio","tiles":["http://geoserveis.icgc.cat/sostenibilitat/rubi/wms?layers=rad_global_roofs&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&"],"maxzoom":20,"type":"raster"},{"id":"WMSSostenibilitatIdoneitatFV","tiles":["http://geoserveis.icgc.cat/sostenibilitat/rubi/wms?layers=idoFV_RGB&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&"],"maxzoom":20,"type":"raster"},{"id":"WMSSostenibilitatIdoneitatSTA","tiles":["http://geoserveis.icgc.cat/sostenibilitat/rubi/wms?layers=idoTS_RGB&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&"],"maxzoom":20,"type":"raster"},{"id":"sostenibilitat_source","tiles":["https://tilemaps.icgc.cat/tileserver/tileserver.php/rubi-12-20/{z}/{x}/{y}.pbf"],"maxzoom":20,"type":"vector"}],"layers":[{"id":"WMSSostenibilitatIrradiacio","type":"raster","source":"WMSSostenibilitatIrradiacio","minzoom":12,"maxzoom":20,"layout":{"visibility":"none"}},{"id":"WMSSostenibilitatIdoneitatFV","type":"raster","source":"WMSSostenibilitatIdoneitatFV","minzoom":12,"maxzoom":20,"layout":{"visibility":"none"}},{"id":"WMSSostenibilitatIdoneitatSTA","type":"raster","source":"WMSSostenibilitatIdoneitatSTA","minzoom":12,"maxzoom":20,"layout":{"visibility":"none"}},{"id":"VectorSostenibilitatIdoneitatFV","type":"fill","source":"sostenibilitat_source","source-layer":"edificis_sostenibilitat","minzoom":12,"maxzoom":22,"layout":{"visibility":"visible"},"paint":{"fill-color":["case",["==",["all",[">=",["get","sfv4"],["get","sfv1"]],[">=",["get","sfv4"],["get","sfv2"]],[">=",["get","sfv4"],["get","sfv3"]]],true],"#FFFF00",["==",["all",[">=",["get","sfv3"],["get","sfv1"]],[">=",["get","sfv3"],["get","sfv2"]],[">=",["get","sfv3"],["get","sfv4"]]],true],"#FFB002",["==",["all",[">=",["get","sfv2"],["get","sfv1"]],[">=",["get","sfv2"],["get","sfv3"]],[">=",["get","sfv2"],["get","sfv4"]]],true],"#BB6910",["==",["all",[">=",["get","sfv1"],["get","sfv2"]],[">=",["get","sfv1"],["get","sfv3"]],[">=",["get","sfv1"],["get","sfv4"]]],true],"#3B1B00","red"],"fill-opacity":0.9,"fill-antialias":true}},{"id":"VectorSostenibilitatIdoneitatSTA","type":"fill","source":"sostenibilitat_source","source-layer":"edificis_sostenibilitat","minzoom":12,"maxzoom":22,"layout":{"visibility":"none"},"paint":{"fill-color":["case",["==",["all",[">=",["get","sts3"],["get","sts1"]],[">=",["get","sts3"],["get","sts2"]]],true],"#FFFF00",["==",["all",[">=",["get","sts2"],["get","sts1"]],[">=",["get","sts2"],["get","sts3"]]],true],"#FFB002",["==",["all",[">=",["get","sts1"],["get","sts2"]],[">=",["get","sts1"],["get","sts3"]]],true],"#3B1B00","red"],"fill-opacity":0.9,"fill-antialias":true}},{"id":"EdificisSostenibilitatPol","type":"fill","source":"sostenibilitat_source","source-layer":"edificis_sostenibilitat","minzoom":12,"maxzoom":22,"layout":{"visibility":"visible"},"paint":{"fill-color":"#0000FF","fill-opacity":0}},{"id":"EdificisSostenibilitatContorn","type":"line","source":"sostenibilitat_source","source-layer":"edificis_sostenibilitat","minzoom":17,"maxzoom":22,"layout":{"visibility":"visible"},"paint":{"line-color":"#0000FF","line-width":1.5}},{"id":"EdificisSostenibilitatSeleccio","type":"line","source":"sostenibilitat_source","source-layer":"edificis_sostenibilitat","minzoom":12,"maxzoom":22,"layout":{"visibility":"visible"},"paint":{"line-color":"#ff00ee","line-width":2.5},"filter":["==","cat",0]}]}')},488:function(module,exports,__webpack_require__){__webpack_require__(489),__webpack_require__(632),module.exports=__webpack_require__(633)},551:function(module,exports){},633:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(108);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(784)}),module)}.call(this,__webpack_require__(358)(module))},784:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(108),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(152),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(215),_components_Map_Map__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(153),_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(155),_components_NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(309),_components_LogoICGC_LogoICGC__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(156),_mapDataRubi_json__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(478);__webpack_require__(1335);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo).add("Ok button",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,{content:"OK"})})).add("Icon button",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,{icon:"sign-in"})})).add("Basic button",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,{basic:!0,content:"Basic"})})).add("Cancel button",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,{color:"red",content:"Cancel"})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("NavButtons",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo).add("Anterior i Seguent",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_6__.a,{color:"teal",goPrevStep:function goPrevStep(){return console.log("goPrevStep")},goNextStep:function goNextStep(){return console.log("goPrevStep")},content:"OK"})})).add("amb amplada 100%",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_6__.a,{color:"teal",fullWidth:!0,goPrevStep:function goPrevStep(){return console.log("goPrevStep")},goNextStep:function goNextStep(){return console.log("goPrevStep")},content:"OK"})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Logo ICGC",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo).add("Logo ICGC",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{borderBottom:"2px solid gray",width:"100%",height:"200px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoICGC_LogoICGC__WEBPACK_IMPORTED_MODULE_7__.a,null))})).add("Logo ICGC versió amb text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{borderBottom:"2px solid gray",width:"100%",height:"200px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoICGC_LogoICGC__WEBPACK_IMPORTED_MODULE_7__.a,{logoType:"icgc-logotxt"}))})).add("Logo ICGC top left",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{borderBottom:"2px solid gray",width:"100%",height:"200px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoICGC_LogoICGC__WEBPACK_IMPORTED_MODULE_7__.a,{position:"top-left"}))})).add("Logo ICGC amb text propi",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{borderBottom:"2px solid gray",width:"100%",height:"200px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoICGC_LogoICGC__WEBPACK_IMPORTED_MODULE_7__.a,{addText:"ICGC"}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Map",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo).add("Mapa Fosc",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map_Map__WEBPACK_IMPORTED_MODULE_4__.a,{style:{height:"100vh"}})}),{info:{text:"Cal afegir l'import de mapbox-gl.css"}}).add("Mapa Clar",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map_Map__WEBPACK_IMPORTED_MODULE_4__.a,{style:{height:"100vh"},options:{style:_constants__WEBPACK_IMPORTED_MODULE_3__.a[0].style}})}),{info:{text:"Cal afegir l'import de mapbox-gl.css"}}).add("Mapa Orto",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map_Map__WEBPACK_IMPORTED_MODULE_4__.a,{showAttribution:!0,style:{height:"100vh"},options:{style:_constants__WEBPACK_IMPORTED_MODULE_3__.a[1].style}})}),{info:{text:"Cal afegir l'import de mapbox-gl.css"}}).add("Mapa Sostenibilitat",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map_Map__WEBPACK_IMPORTED_MODULE_4__.a,{showAttribution:!0,style:{height:"100vh"},mapData:_mapDataRubi_json__WEBPACK_IMPORTED_MODULE_8__,options:{style:_constants__WEBPACK_IMPORTED_MODULE_3__.a[0].style,center:[2.0349243,41.4971174],zoom:12,attributionControl:!1}})}),{info:{text:"Cal afegir l'import de mapbox-gl.css"}})}.call(this,__webpack_require__(358)(module))},787:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":416,"./nestedObjectAssign.js":416};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=787}},[[488,1,2]]]);
//# sourceMappingURL=main.6f453ae316f02316b7aa.bundle.js.map