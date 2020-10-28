"use strict";

var _enzyme = require("enzyme");

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _react = _interopRequireDefault(require("react"));

var _ResizeComponent = _interopRequireDefault(require("./ResizeComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ResizeComponent HOC Component", () => {
  const MockComponent = () => /*#__PURE__*/_react.default.createElement("div", null, "Mock Component"); // eslint-disable-next-line new-cap


  const ResizeContainer = (0, _ResizeComponent.default)(MockComponent);
  let component;
  beforeEach(() => {
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(ResizeContainer, null, "Testing Resize Component"));
  });
  afterEach(() => {
    component.unmount();
  });
  it("match the snapshot ", () => {
    expect((0, _enzymeToJson.default)(component)).toMatchSnapshot();
  });
  it("passes the width prop to composed component ", () => {
    expect(component.find(MockComponent).props("width")).toBeDefined();
  });
});