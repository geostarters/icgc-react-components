// @flow

import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

import { Search } from "semantic-ui-react";

import styles from "./Geocoder.module.css";

const peliasUrl = "https://aws.icgc.cat/cerca_pelias/";

const initialState = {
	loading: false,
	results: [],
	value: "",
};

function exampleReducer(state, action) {

	switch (action.type) {

	case "CLEAN_QUERY":
		return initialState;
	case "START_SEARCH":
		return { ...state, loading: true, value: action.query };
	case "FINISH_SEARCH":
		return { ...state, loading: false, results: action.results };
	case "UPDATE_SELECTION":
		return { ...state, value: action.selection.properties.label };
	default:
		throw new Error();

	}

}

function Geocoder({showLayer, maxResults, layers, autocomplete, handleResultSelect, resultTextStyle, resultLayerTextStyle}) {

	const [state, dispatch] = React.useReducer(exampleReducer, initialState);
	const { loading, results, value } = state;

	const timeoutRef = React.useRef();
	const handleSearchChange = React.useCallback((e, data, url) => {

		clearTimeout(timeoutRef.current);
		dispatch({ type: "START_SEARCH", query: data.value });

		timeoutRef.current = setTimeout(async () => {

			if (data.value.length === 0) {

				dispatch({ type: "CLEAN_QUERY" });
				return;

			}

			const response = await Axios.get(`${url}${data.value}`);

			dispatch({
				type: "FINISH_SEARCH",
				results: response.data.features,
			});

		}, 300);

	}, []);
	React.useEffect(() => () => {

		clearTimeout(timeoutRef.current);

	}, []);

	const resultRenderer = feature => <div className={styles.result} key={feature.properties.label}>
		<div className={styles.resultLabel} style={resultTextStyle}>{feature.properties.label}</div>
		{showLayer ? <div className={styles.resultLayer} style={resultLayerTextStyle}>{feature.properties.layer}</div> : null}
	</div>;

	return (
		<Search
			loading={loading}
			onResultSelect={(e, data) => {

				handleResultSelect(data.result);
				dispatch({ type: "UPDATE_SELECTION", selection: data.result });

			}}
			onSearchChange={(e, data) => {

				const url = `${peliasUrl}${autocomplete ? "autocomplete" : "cerca"}?size=${maxResults}&layers=${layers.join(",")}&text=`;
				handleSearchChange(e, data, url);

			}}
			resultRenderer={resultRenderer}
			results={results}
			noResultsMessage={"Sense resultats."}
			value={value}
			minCharacters={3}
		/>
	);

}

export default Geocoder;

Geocoder.defaultProps = {
	showLayer: true,
	layers: [],
	maxResults: 10,
	autocomplete: true
};

Geocoder.propTypes = {
	showLayer: PropTypes.bool,
	layers: PropTypes.array,
	maxResults: PropTypes.number,
	autocomplete: PropTypes.bool,
	handleResultSelect: PropTypes.func,
	resultTextStyle: PropTypes.object,
	resultLayerTextStyle: PropTypes.object
};
