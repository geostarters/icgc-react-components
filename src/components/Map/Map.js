//@flow

import React from "react";
import { Utils as IcgcUtils, MapboxMap } from "@geostarters/common";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends React.Component {

	constructor(props) {

		super(props);

		this.container = `${Date.now()}${Math.random()}`;

		const options = {
			"container": this.container,
			...this.props.options
		};

		this.map = new MapboxMap(mapboxgl, this.props.mapboxToken || "", options);

	}

	async componentDidMount() {

		await this.map.create();

		if (this.props.mapData) {

			this.setData(this.props.mapData);

		}

		if (this.props.showAttribution) {

			console.log("showAttribution");
			this.map.addControlMap(new mapboxgl.AttributionControl({
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

		const layersToAdd = IcgcUtils.arrayDifference(currentLayers, prevLayers);
		const layersToDelete = IcgcUtils.arrayDifference(prevLayers, currentLayers);
		const layersToUpdate = IcgcUtils.arrayDifference(currentLayers, layersToAdd);

		return {
			layersToAdd,
			layersToDelete,
			layersToUpdate
		};

	}

	getNewObjectWithSources(currentSources, prevSources) {

		const newSources = IcgcUtils.arrayDifference(currentSources, prevSources);
		const deletedSources = IcgcUtils.arrayDifference(prevSources, currentSources);

		return {
			newSources,
			deletedSources
		};

	}

	async doUpdateMapData(objLayers: NewObjectLayers, objSources: NewObjectSources) {


		//add Sources
		for (const source of objSources.newSources) {

			this.map.addSource(source.name, source);

		}

		//remove Layers
		for (const layer of objLayers.layersToDelete) {

			this.map.removeLayer(layer.id);

		}

		//delete Sources
		for (const source of objSources.deletedSources) {

			this.map.removeSource(source.name);

		}

		//add Layers
		for (const layer of objLayers.layersToAdd) {

			this.map.addLayer(layer);

		}

		//updates
		objLayers.layersToUpdate.forEach((layer) => {

			if (layer.paint) {

				this.updateLayerPaintProperties(layer.id, layer.paint);

			}
			if (layer.layout) {

				this.updateLayerLayoutProperties(layer.id, layer.layout);

			}

		});

	}


	removeDataArray(arr, fn, idPropName = "") {

		return new Promise((resolve) => {

			for (const item of arr) {

				fn((idPropName !== "" ? item[idPropName] : item));

			}

			resolve();

		});

	}


	updateLayerPaintProperties(layerId, paintProps: Object) {

		for (const  [key, value] of Object.entries(paintProps)) {

			this.map.setPaintProperty(layerId, key, value);

		}

	}

	updateLayerLayoutProperties(layerId, layoutProps: Object) {

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
		return (<div id={this.container} style={style}/>);

	}

}

Map.propTypes = {
	options: PropTypes.object, //Has to be MapOptions from flow-typed
	container: PropTypes.string,
	mapboxToken: PropTypes.string,
	mapData: PropTypes.object,
	showAttribution: PropTypes.bool,
	layerEvents: PropTypes.array, //Has to be Array<EventData> from flow-typed
	style: PropTypes.object
};
