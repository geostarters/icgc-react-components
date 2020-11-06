/* eslint-disable no-undef */
//@flow

import { Utils } from "@geostarters/common";

import IMAGES from "../../resources/images";

export default class LogoControl {

	constructor({
		image = IMAGES.ICGC_white,
		url = "https://icgc.cat",
		imageWidth = "120px",
		imageHeight = "40px",
		compact = true,
		compactWidth = "40px",
		compactHeight = "40px"
	} = {}) {

		this._image = image;
		this._url = url;
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;
		this._compact = compact;
		this._compactWidth = compactWidth;
		this._compactHeight = compactHeight;
		Utils.bindAll(["_updateCompact"], this);

	}

	onAdd(map) {

		this._map = map;

		this._container = document.createElement("div");
		this._container.className = "mapboxgl-ctrl";
		this._anchor = document.createElement("a");
		this._anchor.target = "_blank";
		this._anchor.rel = "noopener nofollow";
		this._anchor.href = this._url;
		this._anchor.setAttribute("aria-label", this._map._getUIString("LogoControl.Title"));
		this._anchor.setAttribute("rel", "noopener nofollow");
		this._logo = document.createElement("img");
		this._logo.src = this._image;
		this._logo.style.objectFit = "cover";
		this._logo.style.objectPosition = "0 0";
		this._logo.style.opacity = 0.6;
		this._logo.style.width = this._imageWidth;
		this._logo.style.height = this._imageHeight;
		this._anchor.appendChild(this._logo);

		this._container.appendChild(this._anchor);

		this._map.on("resize", this._updateCompact);
		this._updateCompact();

		return this._container;

	}

	onRemove() {

		this._container.parentNode.removeChild(this._container);
		this._map = undefined;
		this._map.off("resize", this._updateCompact);

	}

	getDefaultPosition() {

		return "bottom-left";

	}

	_updateCompact() {

		if (this._compact) {

			if (this._map.getCanvasContainer().offsetWidth < 350) {

				this._logo.style.width = this._compactWidth;
				this._logo.style.height = this._compactHeight;

			} else {

				this._logo.style.width = this._imageWidth;
				this._logo.style.height = this._imageHeight;

			}

		}

	}

}
