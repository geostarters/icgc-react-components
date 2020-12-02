//@flow

import React from "react";
import { action } from "@storybook/addon-actions";

import * as CONSTANTS from "../constants";

import Map from "../components/Map/Map";
import NavButtons from "../components/NavButtons/NavButtons";
import LogoICGC from "../components/LogoICGC/LogoICGC";
import TreeView from "../components/TreeView/TreeView";
import ButtonOpacityPicker from "../components/ButtonOpacityPicker/ButtonOpacityPicker";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import Footer from "../components/Footer/Footer";
import ChooseStyle from "../components/ChooseStyle/ChooseStyle";
import Geocoder from "../components/Geocoder/Geocoder";

import mapDataRubi from "./mapDataRubi.json";
import treeData from "./treeData.json";
import styleList from "./styleList.json";

import "semantic-ui-css/semantic.min.css";



export default {
  title: 'NavButtons',
};

export const AnteriorISeguent = () => (
        <NavButtons goPrevStep={() => console.log("goPrevStep")} goNextStep={() => console.log("goNextStep")}/>
    );

AnteriorISeguent.story = {
  name: 'Anterior i Seguent',
};

export const AmbAmplada100 = () => (
        <NavButtons color="teal" fullWidth={true} goPrevStep={actionsData.onClick} goNextStep={() => console.log("goNextStep")} prevText="Prev" nextText="Next"/>
    );

AmbAmplada100.story = {
  name: 'amb amplada 100%',
};

export const AmbAmplada100NextDisable = () => (
        <NavButtons color="teal" disabledNext={true} fullWidth={true} goPrevStep={actionsData.onClick} goNextStep={() => console.log("goNextStep")} prevText="Prev" nextText="Next"/>
    );

AmbAmplada100NextDisable.story = {
  name: 'amb amplada 100% next disable',
};

export default {
  title: 'Logo ICGC',
};

export const LogoIcgc = () => (
        <div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
            <LogoICGC/>
        </div>
    );

LogoIcgc.story = {
  name: 'Logo ICGC',
};

export const LogoIcgcVersioAmbText = () => (
        <div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
            <LogoICGC logoType="icgc-logotxt"/>
        </div>
    );

LogoIcgcVersioAmbText.story = {
  name: 'Logo ICGC versió amb text',
};

export const LogoIcgcVersio2AmbText = () => (
        <div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
            <LogoICGC logoType="icgc-logo2-text"/>
        </div>
    );

LogoIcgcVersio2AmbText.story = {
  name: 'Logo ICGC versió 2 amb text',
};

export const LogoIcgcVersio2BlancAmbText = () => (
        <div style={{borderBottom: "2px solid gray", width: "100%", height: "200px", backgroundColor: "gray"}}>
            <LogoICGC logoType="icgc-logo-white-text" position="top-left"/>
        </div>
    );

LogoIcgcVersio2BlancAmbText.story = {
  name: 'Logo ICGC versió 2 blanc amb text',
};

export const LogoIcgcTopLeft = () => (
        <div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
            <LogoICGC position="top-left"/>
        </div>
    );

LogoIcgcTopLeft.story = {
  name: 'Logo ICGC top left',
};

export const LogoIcgcAmbTextPropi = () => (
        <div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
            <LogoICGC addText="ICGC"/>
        </div>
    );

LogoIcgcAmbTextPropi.story = {
  name: 'Logo ICGC amb text propi',
};

export default {
  title: 'Map',
};

export const MapaFosc = () => <Map style={{"height": "100vh"}} ></Map>;

MapaFosc.story = {
  parameters: {
			info:{
          text: "Cal afegir l'import de mapbox-gl.css",
			}

  },
};

export const MapaClar = () => <Map style={{"height": "100vh"}} showNavControl={true} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style}}></Map>;

MapaClar.story = {
  parameters: {
			info:{
          text: "Cal afegir l'import de mapbox-gl.css",
			}

  },
};

export const MapaOrto = () => <Map showLogoControl={true} style={{"height": "100vh"}} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[1].style}}></Map>;

MapaOrto.story = {
  parameters: {
			info:{
          text: "Cal afegir l'import de mapbox-gl.css",
			}

  },
};

export const MapaSostenibilitat = () => <Map showAttribution={true} style={{"height": "100vh"}} mapData={mapDataRubi} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style, "center": [2.0349243,  41.4971174], "zoom": 12, "attributionControl": false}}></Map>;

MapaSostenibilitat.story = {
  parameters: {
			info:{
          text: "Cal afegir l'import de mapbox-gl.css",
			}

  },
};

export default {
  title: 'TreeView',
};

export const _TreeView = () => <TreeView nodes={treeData} {...actionsData}></TreeView>;

_TreeView.story = {
  name: 'TreeView',
};



export default {
  title: 'ButtonOpacityPicker',
};

export const _ButtonOpacityPicker = () => <ButtonOpacityPicker></ButtonOpacityPicker>;

_ButtonOpacityPicker.story = {
  name: 'ButtonOpacityPicker',
};

export const ButtonOpacityPickerOpacity = () => <ButtonOpacityPicker
    opacity={0.5}
    handleChangeOpacity={ action("onChange") }
></ButtonOpacityPicker>;

ButtonOpacityPickerOpacity.story = {
  name: 'ButtonOpacityPicker opacity',
};

export const ButtonOpacityPickerImagen = () => <ButtonOpacityPicker
    opacity={0.5}
    handleChangeOpacity={ action("onChange") }
    image = {"https://www.instamaps.cat/static/img/map-backgrounds/orto.jpg"}
></ButtonOpacityPicker>;

ButtonOpacityPickerImagen.story = {
  name: 'ButtonOpacityPicker imagen',
};

export default {
  title: 'SideBar',
};

export const _SideBar = () => <SideBar></SideBar>;

_SideBar.story = {
  name: 'SideBar',
};

export const SideBarClose = () => <SideBar showInitial={false}></SideBar>;

SideBarClose.story = {
  name: 'SideBar close',
};

export const SideBarWithTreeview = () => <SideBar><TreeView nodes={treeData} {...actionsData}></TreeView></SideBar>;

SideBarWithTreeview.story = {
  name: 'SideBar with treeview',
};

export default {
  title: 'Header',
};

export const _Header = () => <Header></Header>;

export const Header2Logos = () => <Header title="VERSIÓ BETA" pathLogo="https://eines.icgc.cat/contextmaps/static/media/CONTEXTMAPS_LOGO_2019.dc127f4a.svg" logoSize="medium" customStyleBar={{backgroundColor: "#0064af", color: "#fff"}} showRightElements={true} customStyleLogo={{maxWidth: "15em"}}>
    <div>
				<LogoICGC position="top-right" />
    </div>
</Header>;

Header2Logos.story = {
  name: 'Header 2 logos',
};

export default {
  title: 'Modal',
};

export const _Modal = () => <Modal trigger={<Button>Show Modal</Button>}>text content</Modal>;

export const ModalWithHeader = () => <Modal
    trigger={<Button>Show Modal</Button>}
    headertitle="text header"
>text content</Modal>;

ModalWithHeader.story = {
  name: 'Modal with header',
};

export const ModalWithButtons = () => <Modal
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
</Modal>;

ModalWithButtons.story = {
  name: 'Modal with buttons',
};

export default {
  title: 'Footer',
};

export const _Footer = () => (<Footer/>);
export const FooterCustomStyle = () => (<Footer title="Styled" customStyleBar={{backgroundColor: "#ccc", color: "#999", position: "relative"}}/>);

FooterCustomStyle.story = {
  name: 'Footer custom style',
};

export const FooterLogo = () => <Footer title="VERSIÓ BETA" pathLogo="https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png" logoSize="small" customStyleBar={{backgroundColor: "#ccc", color: "#999"}} customStyleLogo={{maxWidth: "7em"}}>
</Footer>;

FooterLogo.story = {
  name: 'Footer logo',
};

export const FooterLogo2Columns = () => <Footer title="VERSIÓ BETA" pathLogo="https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png" logoSize="small" customStyleBar={{backgroundColor: "#ccc", color: "#999"}} customStyleLogo={{maxWidth: "7em"}} showRightElements={true}>
    <div>
				Test footer
    </div>
</Footer>;

FooterLogo2Columns.story = {
  name: 'Footer logo 2 columns',
};

export const Footer2Columns = () => <Footer title="VERSIÓ BETA" showRightElements={true}>
    <div>
				Test footer
    </div>
</Footer>;

Footer2Columns.story = {
  name: 'Footer 2 columns',
};

export default {
  title: 'ChooseStyle',
};

export const _ChooseStyle = () => (<ChooseStyle stylesList={styleList}></ChooseStyle>);

_ChooseStyle.story = {
  name: 'ChooseStyle',
};

export const ChooseStyleSelected = () => (<ChooseStyle stylesList={styleList} currentStyleId={0}></ChooseStyle>);

ChooseStyleSelected.story = {
  name: 'ChooseStyle selected',
};

export const ChooseStyleWithStyleAndAction = () => (<ChooseStyle stylesList={styleList} selectedColor={"#ff0000"} labelColor={"#0000ff"} currentStyleId={1} handleClickStyle={action("handleClickStyle")}></ChooseStyle>);

ChooseStyleWithStyleAndAction.story = {
  name: 'ChooseStyle with style and action',
};

export default {
  title: 'Geocoder',
};

export const _Geocoder = () => (<Geocoder></Geocoder>);
export const GeocoderNoLayer = () => (<Geocoder showLayer={false}></Geocoder>);

GeocoderNoLayer.story = {
  name: 'Geocoder no layer',
};

export const GeocoderLayersMunYCom = () => (<Geocoder layers={["mun", "com"]}></Geocoder>);

GeocoderLayersMunYCom.story = {
  name: 'Geocoder layers mun y com',
};

export const GeocoderMaxresults3 = () => (<Geocoder maxResults={3}></Geocoder>);

GeocoderMaxresults3.story = {
  name: 'Geocoder maxresults 3',
};

export const GeocoderSelectResultAction = () => (<Geocoder handleResultSelect={action("handleResultSelect")}></Geocoder>);

GeocoderSelectResultAction.story = {
  name: 'Geocoder select result action',
};

export const GeocoderAutocompleteFalse = () => (<Geocoder autocomplete={false}></Geocoder>);

GeocoderAutocompleteFalse.story = {
  name: 'Geocoder autocomplete false',
};

export const GeocoderCustomStyle = () => (<Geocoder resultTextStyle={{color: "#c00000", fontSize: 13}} resultLayerTextStyle={{color: "#666666", fontSize: 11, fontWeight: 100, fontStyle: "italic"}}></Geocoder>);

GeocoderCustomStyle.story = {
  name: 'Geocoder custom style',
};
