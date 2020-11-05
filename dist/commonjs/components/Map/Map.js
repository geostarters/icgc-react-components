"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _common = require("@geostarters/common");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));

require("mapbox-gl/dist/mapbox-gl.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Map extends _react.default.Component {
  constructor(props) {
    super(props);
    this.container = `${Date.now()}${Math.random()}`;
    const options = {
      "container": this.container,
      ...this.props.options
    };
    this.map = new _common.MapboxMap(_mapboxGl.default, this.props.mapboxToken || "", options);
  }

  async componentDidMount() {
    await this.map.create();

    if (this.props.mapData) {
      this.setData(this.props.mapData);
    }

    if (this.props.showAttribution) {
      console.log("showAttribution");
      this.map.addControlMap(new _mapboxGl.default.AttributionControl({
        compact: true
      }));
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.options.style !== this.props.options.style) {
      this.refreshStyleMap();
    } else {
      const newObjectWithLayers = this.getNewObjectWithLayers(this.props.mapData.layers, prevProps.mapData.layers);
      const newObjectWithSources = this.getNewObjectWithSources(this.props.mapData.sources, prevProps.mapData.sources);
      this.doUpdateMapData(newObjectWithLayers, newObjectWithSources);
    }
  }

  getNewObjectWithLayers(currentLayers, prevLayers) {
    const layersToAdd = _common.Utils.arrayDifference(currentLayers, prevLayers);

    const layersToDelete = _common.Utils.arrayDifference(prevLayers, currentLayers);

    const layersToUpdate = _common.Utils.arrayDifference(currentLayers, layersToAdd);

    return {
      layersToAdd,
      layersToDelete,
      layersToUpdate
    };
  }

  getNewObjectWithSources(currentSources, prevSources) {
    const newSources = _common.Utils.arrayDifference(currentSources, prevSources);

    const deletedSources = _common.Utils.arrayDifference(prevSources, currentSources);

    return {
      newSources,
      deletedSources
    };
  }

  async doUpdateMapData(objLayers, objSources) {
    //add Sources
    for (const source of objSources.newSources) {
      this.map.addSource(source.name, source);
    } //remove Layers


    for (const layer of objLayers.layersToDelete) {
      this.map.removeLayer(layer.id);
    } //delete Sources


    for (const source of objSources.deletedSources) {
      this.map.removeSource(source.name);
    } //add Layers


    for (const layer of objLayers.layersToAdd) {
      this.map.addLayer(layer);
    } //updates


    objLayers.layersToUpdate.forEach(layer => {
      if (layer.paint) {
        this.updateLayerPaintProperties(layer.id, layer.paint);
      }

      if (layer.layout) {
        this.updateLayerLayoutProperties(layer.id, layer.layout);
      }
    });
  }

  removeDataArray(arr, fn, idPropName = "") {
    return new Promise(resolve => {
      for (const item of arr) {
        fn(idPropName !== "" ? item[idPropName] : item);
      }

      resolve();
    });
  }

  updateLayerPaintProperties(layerId, paintProps) {
    for (const [key, value] of Object.entries(paintProps)) {
      this.map.setPaintProperty(layerId, key, value);
    }
  }

  updateLayerLayoutProperties(layerId, layoutProps) {
    for (const [key, value] of Object.entries(layoutProps)) {
      this.map.setLayoutProperty(layerId, key, value);
    }
  }

  async refreshStyleMap() {
    await this.map.setMapBaseLayer(this.props.options.style);
    this.setData(this.props.mapData);
  }

  setData(data) {
    this.map.setData(data);
    this.addEventsToLayers();
  }

  addEventsToLayers() {
    if (!this.props.layerEvents) {
      return;
    }

    this.props.layerEvents.forEach(eventData => this.map.subscribe(eventData.event, eventData.layerId, eventData.subscriber));
  }

  render() {
    const style = {
      width: "100%",
      height: "100%",
      ...this.props.style
    };
    return /*#__PURE__*/_react.default.createElement("div", {
      id: this.container,
      style: style
    });
  }

}

exports.default = Map;
Map.propTypes = {
  options: _propTypes.default.object,
  //Has to be MapOptions from flow-typed
  container: _propTypes.default.string,
  mapboxToken: _propTypes.default.string,
  mapData: _propTypes.default.object,
  showAttribution: _propTypes.default.bool,
  layerEvents: _propTypes.default.array,
  //Has to be Array<EventData> from flow-typed
  style: _propTypes.default.object
};