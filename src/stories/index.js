//@flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as CONSTANTS from "../constants";

import Map from "../components/Map/Map";
import Button from "../components/Button/Button";
import NavButtons from "../components/NavButtons/NavButtons";
import LogoICGC from "../components/LogoICGC/LogoICGC";
import TreeView from "../components/TreeView/TreeView";
import ButtonColorPicker from "../components/ButtonColorPicker/ButtonColorPicker";
import ButtonOpacityPicker from "../components/ButtonOpacityPicker/ButtonOpacityPicker";
import ButtonNipple from "../components/ButtonNipple/ButtonNipple";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import Footer from "../components/Footer/Footer";

import mapDataRubi from "./mapDataRubi.json";
import treeData from "./treeData.json";

import "semantic-ui-css/semantic.min.css";

const actionsData = {
	onClick: action("onClick"),
};

storiesOf("Button", module)
	.add("Ok button", () => (<Button content="OK"/>))
	.add("Icon button", () => (<Button icon="sign-in"/>))
	.add("Basic button", () => (<Button basic={true} content="Basic"/>))
	.add("Cancel button", () => (
		<Button color="red" content="Cancel" {...actionsData}/>
	));

storiesOf("NavButtons", module)
	.add("Anterior i Seguent", () => (
		<NavButtons goPrevStep={() => console.log("goPrevStep")} goNextStep={() => console.log("goNextStep")}/>
	))
	.add("amb amplada 100%", () => (
		<NavButtons color="teal" fullWidth={true} goPrevStep={actionsData.onClick} goNextStep={() => console.log("goNextStep")} prevText="Prev" nextText="Next"/>
	))
	.add("amb amplada 100% next disable", () => (
		<NavButtons color="teal" disabledNext={true} fullWidth={true} goPrevStep={actionsData.onClick} goNextStep={() => console.log("goNextStep")} prevText="Prev" nextText="Next"/>
	));

storiesOf("Logo ICGC", module)
	.add("Logo ICGC", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC/>
		</div>
	))
	.add("Logo ICGC versió amb text", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC logoType="icgc-logotxt"/>
		</div>
	))
	.add("Logo ICGC versió 2 amb text", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC logoType="icgc-logo2-text"/>
		</div>
	))
	.add("Logo ICGC versió 2 blanc amb text", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px", backgroundColor: "gray"}}>
			<LogoICGC logoType="icgc-logo-white-text"/>
		</div>
	))
	.add("Logo ICGC top left", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC position="top-left"/>
		</div>
	))
	.add("Logo ICGC amb text propi", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC addText="ICGC"/>
		</div>
	));

storiesOf("Map", module)
	.add(
		"Mapa Fosc",
		() => <Map style={{"height": "100vh"}} ></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	).add(
		"Mapa Clar",
		() => <Map style={{"height": "100vh"}} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	).add(
		"Mapa Orto",
		() => <Map showAttribution={true} style={{"height": "100vh"}} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[1].style}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	).add(
		"Mapa Sostenibilitat",
		() => <Map showAttribution={true} style={{"height": "100vh"}} mapData={mapDataRubi} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style, "center": [2.0349243,  41.4971174], "zoom": 12, "attributionControl": false}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	);

storiesOf("TreeView", module)
	.add(
		"TreeView",
		() => <TreeView nodes={treeData} {...actionsData}></TreeView>
	);

storiesOf("ButtonColorPicker", module)
	.add(
		"ButtonColorPicker",
		() => <ButtonColorPicker></ButtonColorPicker>
	)
	.add(
		"ButtonColorPicker color",
		() => <ButtonColorPicker
			color={{rgb: {r: 255, g:255, b: 0, a: 1} }}
			handleChangeColor={ action("onChange") }
		>
		</ButtonColorPicker>
	);


storiesOf("ButtonOpacityPicker", module)
	.add(
		"ButtonOpacityPicker",
		() => <ButtonOpacityPicker></ButtonOpacityPicker>
	).add(
		"ButtonOpacityPicker opacity",
		() => <ButtonOpacityPicker
			opacity={0.5}
			handleChangeOpacity={ action("onChange") }
		></ButtonOpacityPicker>
	).add(
		"ButtonOpacityPicker imagen",
		() => <ButtonOpacityPicker
			opacity={0.5}
			handleChangeOpacity={ action("onChange") }
			image = {"https://www.instamaps.cat/static/img/map-backgrounds/orto.jpg"}
		></ButtonOpacityPicker>
	);

storiesOf("ButtonNipple", module)
	.add(
		"ButtonNipple",
		() => <ButtonNipple></ButtonNipple>
	)
	.add(
		"ButtonNipple angle",
		() => <ButtonNipple angle={{degree: 150, exaggeration: 0.5}} handleChangeAngle={ action("onChange") }></ButtonNipple>
	);

storiesOf("SideBar", module)
	.add(
		"SideBar",
		() => <SideBar></SideBar>
	).add(
		"SideBar close",
		() => <SideBar show={false}></SideBar>
	).add(
		"SideBar with treeview",
		() => <SideBar><TreeView nodes={treeData} {...actionsData}></TreeView></SideBar>
	);

storiesOf("Header", module)
	.add(
		"Header",
		() => <Header></Header>
	)
	.add(
		"Header 2 logos",
		() => <Header title="VERSIÓ BETA" pathLogo="https://eines.icgc.cat/contextmaps/static/media/CONTEXTMAPS_LOGO_2019.dc127f4a.svg" logoSize="medium" customStyleBar={{backgroundColor: "#0064af", color: "#fff"}} showRightElements={true} customStyleLogo={{maxWidth: "15em"}}>
			<div>
				<LogoICGC position="top-right" />
			</div>
		</Header>
	);

storiesOf("Modal", module)
	.add(
		"Modal",
		() => <Modal trigger={<Button>Show Modal</Button>}>text content</Modal>
	).add(
		"Modal with header",
		() => <Modal
			trigger={<Button>Show Modal</Button>}
			headertitle="text header"
		>text content</Modal>
	).add(
		"Modal with buttons",
		() => <Modal
			headertitle="Avís"
			trigger={<Button>Show Modal</Button>}
			actionbuttons={[
				{label: "Carregar", color: "green", handler: action("onClick"), icon: "check" },
				{label: "Cancel·lar", color: "grey", handler: action("onClick"), icon: "remove"}
			]}
		>
			<div>
				<p>Aquest estil no ha estat generat a Contextmaps i per tant no es podrà editar.</p>
				<p>Vols continuar amb la càrrega?</p>
			</div>
		</Modal>
	);

storiesOf("Footer", module)
	.add("Footer", () => (<Footer/>))
	.add(
		"Footer logo",
		() => <Footer title="VERSIÓ BETA" pathLogo="https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png" logoSize="small" customStyleBar={{backgroundColor: "#ccc", color: "#999"}} customStyleLogo={{maxWidth: "7em"}}>
		</Footer>
	)
	.add(
		"Footer logo 2 columns",
		() => <Footer title="VERSIÓ BETA" pathLogo="https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png" logoSize="small" customStyleBar={{backgroundColor: "#ccc", color: "#999"}} customStyleLogo={{maxWidth: "7em"}} showRightElements={true}>
			<div>
				Test footer
			</div>
		</Footer>
	).add(
		"Footer 2 columns",
		() => <Footer title="VERSIÓ BETA" showRightElements={true}>
			<div>
				Test footer
			</div>
		</Footer>
	);
