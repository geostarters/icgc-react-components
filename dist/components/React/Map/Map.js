import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import { Utils as IcgcUtils, MapboxMap } from "icgc-js-common";
import PropTypes from "prop-types";

import "./Map.css";

var Map = function (_React$Component) {
		_inherits(Map, _React$Component);

		function Map(props) {
				_classCallCheck(this, Map);

				var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

				_this.container = "" + Date.now();

				var options = Object.assign({
						"container": _this.container
				}, _this.props.options);

				_this.map = new MapboxMap(_this.props.mapboxToken || "", options);

				return _this;
		}

		_createClass(Map, [{
				key: "componentDidMount",
				value: function () {
						var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
								return _regeneratorRuntime.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																_context.next = 2;
																return this.map.create();

														case 2:

																if (this.props.mapData) {

																		this.setData(this.props.mapData);
																}

																if (this.props.showAttribution) {

																		this.map.addControlMap(MapboxMap.ATTRIBUTION_CONTROL);
																}

														case 4:
														case "end":
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function componentDidMount() {
								return _ref.apply(this, arguments);
						}

						return componentDidMount;
				}()
		}, {
				key: "componentDidUpdate",
				value: function componentDidUpdate(prevProps) {

						if (prevProps.options.style !== this.props.options.style) {

								this.refreshStyleMap();
						} else {

								this.updateSources(this.props.mapData.sources, prevProps.mapData.sources);
								this.updateLayers(this.props.mapData.layers, prevProps.mapData.layers);
						}
				}
		}, {
				key: "componentWillUnmount",
				value: function componentWillUnmount() {

						this.map.remove();
				}
		}, {
				key: "updateSources",
				value: function updateSources(currentSources, prevSources) {
						var _this2 = this;

						var newSources = IcgcUtils.arrayDifference(currentSources, prevSources);
						var deletedSources = IcgcUtils.arrayDifference(prevSources, currentSources);

						newSources.forEach(function (source) {

								_this2.map.addSource(source.name, source);
						});

						deletedSources.forEach(function (source) {

								_this2.map.removeSource(source.name);
						});
				}
		}, {
				key: "updateLayers",
				value: function updateLayers(currentLayers, prevLayers) {
						var _this3 = this;

						var layersToAdd = IcgcUtils.arrayDifference(currentLayers, prevLayers);
						var layersToDelete = IcgcUtils.arrayDifference(prevLayers, currentLayers);
						var layersToUpdate = IcgcUtils.arrayDifference(currentLayers, layersToAdd);

						layersToAdd.forEach(function (layer) {

								_this3.map.addLayer(layer);
						});

						layersToDelete.forEach(function (layer) {

								_this3.map.removeLayer(layer.id);
						});

						layersToUpdate.forEach(function (layer) {

								_this3.updateLayerPaintProperties(layer.id, layer.paint);
								_this3.updateLayerLayoutProperties(layer.id, layer.layout);
						});
				}
		}, {
				key: "updateLayerPaintProperties",
				value: function updateLayerPaintProperties(layerId, paintProps) {
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {

								for (var _iterator = paintProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var prop = _step.value;


										this.map.setPaintProperty(layerId, prop, paintProps[prop]);
								}
						} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
						} finally {
								try {
										if (!_iteratorNormalCompletion && _iterator.return) {
												_iterator.return();
										}
								} finally {
										if (_didIteratorError) {
												throw _iteratorError;
										}
								}
						}
				}
		}, {
				key: "updateLayerLayoutProperties",
				value: function updateLayerLayoutProperties(layerId, layoutProps) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {

								for (var _iterator2 = layoutProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
										var prop = _step2.value;


										this.map.setLayoutProperty(layerId, prop, layerId[prop]);
								}
						} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
						} finally {
								try {
										if (!_iteratorNormalCompletion2 && _iterator2.return) {
												_iterator2.return();
										}
								} finally {
										if (_didIteratorError2) {
												throw _iteratorError2;
										}
								}
						}
				}
		}, {
				key: "refreshStyleMap",
				value: function () {
						var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
								return _regeneratorRuntime.wrap(function _callee2$(_context2) {
										while (1) {
												switch (_context2.prev = _context2.next) {
														case 0:
																_context2.next = 2;
																return this.map.setMapBaseLayer(this.props.options.style);

														case 2:
																this.setData(this.props.mapData);

														case 3:
														case "end":
																return _context2.stop();
												}
										}
								}, _callee2, this);
						}));

						function refreshStyleMap() {
								return _ref2.apply(this, arguments);
						}

						return refreshStyleMap;
				}()
		}, {
				key: "setData",
				value: function setData(data) {

						this.map.setData(data);

						this.addEventsToLayers();
				}
		}, {
				key: "addEventsToLayers",
				value: function addEventsToLayers() {
						var _this4 = this;

						if (!this.props.layerEvents) {

								return;
						}

						this.props.layerEvents.forEach(function (eventData) {
								return _this4.map.subscribe(eventData.event, eventData.layerId, eventData.subscriber);
						});
				}
		}, {
				key: "render",
				value: function render() {

						//const style = { width: "100%", height: "100%"};
						return React.createElement("div", { id: this.container, className: "container-map" });
				}
		}]);

		return Map;
}(React.Component);

export default Map;


Map.propTypes = {
		options: PropTypes.object, //Has to be MapOptions from flow-typed
		container: PropTypes.string,
		mapboxToken: PropTypes.string,
		mapData: PropTypes.object,
		showAttribution: PropTypes.bool,
		layerEvents: PropTypes.array //Has to be Array<EventData> from flow-typed
};