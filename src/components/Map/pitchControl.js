/* eslint-disable no-undef */
//@flow

export default class PitchControl {

	constructor({ pitch = 0 } = {}) {

		this._pitch = pitch;

	}

	onAdd(map) {

		this._map = map;

		this._btnIcon = document.createElement("i");
		this._btnIcon.className = "road icon";
		this._btnIcon.style = "margin:0px";
		this._btn = document.createElement("button");
		this._btn.className = "mapboxgl-ctrl-icon";
		this._btn.type = "button";
		this._btn["aria-label"] = "Toggle Pitch";
		this._btn.appendChild(this._btnIcon);
		this._btn.onclick = function () {

			if (map.getPitch() === 0) {

				map.easeTo({ pitch: 30});

			} else if (map.getPitch() === 30) {

				map.easeTo({ pitch: 60});

			} else {

				map.easeTo({ pitch: 0});

			}

		};

		this._container = document.createElement("div");
		this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
		this._container.appendChild(this._btn);

		return this._container;

	}

	onRemove() {

		this._container.parentNode.removeChild(this._container);
		this._map = undefined;

	}

}
