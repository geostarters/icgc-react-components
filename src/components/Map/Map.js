//@flow

import React from "react";
import { Utils as IcgcUtils, MapboxMap } from "icgc-js-common";
import PropTypes from "prop-types";

export default class Map extends React.Component {

	map;
	container;

	constructor(props) {

		super(props);

		this.container = `${Date.now()}`;

		const options = {
			"container": this.container,
			...this.props.options
		};

		this.map = new MapboxMap(this.props.mapboxToken || "", options);

	}

	async componentDidMount() {

		await this.map.create();

		if (this.props.mapData) {

			this.setData(this.props.mapData);

		}

		if (this.props.showAttribution) {

			this.map.addControlMap(MapboxMap.ATTRIBUTION_CONTROL);

		}

	}

	componentDidUpdate(prevProps) {

		if (prevProps.options.style !== this.props.options.style) {

			this.refreshStyleMap();

		} else {

			this.updateSources(this.props.mapData.sources, prevProps.mapData.sources);
			this.updateLayers(this.props.mapData.layers, prevProps.mapData.layers);

		}

	}

	componentWillUnmount() {

		this.map.remove();

	}

	updateSources(currentSources, prevSources) {

		const newSources = IcgcUtils.arrayDifference(currentSources, prevSources);
		const deletedSources = IcgcUtils.arrayDifference(prevSources, currentSources);

		newSources.forEach(source => {

			this.map.addSource(source.name, source);

		});

		deletedSources.forEach(source => {

			this.map.removeSource(source.name);

		});

	}

	updateLayers(currentLayers, prevLayers) {

		const layersToAdd = IcgcUtils.arrayDifference(currentLayers, prevLayers);
		const layersToDelete = IcgcUtils.arrayDifference(prevLayers, currentLayers);
		const layersToUpdate = IcgcUtils.arrayDifference(currentLayers, layersToAdd);

		layersToAdd.forEach(layer => {

			this.map.addLayer(layer);

		});

		layersToDelete.forEach(layer => {

			this.map.removeLayer(layer.id);

		});

		layersToUpdate.forEach(layer => {

			this.updateLayerPaintProperties(layer.id, layer.paint);
			this.updateLayerLayoutProperties(layer.id, layer.layout);

		});

	}

	updateLayerPaintProperties(layerId, paintProps: Object) {

		for (const prop of paintProps) {

			this.map.setPaintProperty(layerId, prop, paintProps[prop]);

		}

	}

	updateLayerLayoutProperties(layerId, layoutProps: Object) {

		for (const prop of layoutProps) {

			this.map.setLayoutProperty(layerId, prop, layerId[prop]);

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

		this.props.layerEvents.forEach((eventData) => this.map.subscribe(eventData.event, eventData.layerId, eventData.subscriber));

	}


	render() {

		const style = { width: "100%", height: "100%"};
		return (<div id={this.container} className={style}/>);

	}

}


Map.propTypes = {
	options: PropTypes.object,				//Has to be MapOptions from flow-typed
	container: PropTypes.string,
	mapboxToken: PropTypes.string,
	mapData: PropTypes.object,
	showAttribution: PropTypes.bool,
	layerEvents: PropTypes.array 			//Has to be Array<EventData> from flow-typed
};
