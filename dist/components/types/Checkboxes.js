"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theming = require("@storybook/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CheckboxesWrapper = _theming.styled.div(function (_ref) {
  var isInline = _ref.isInline;
  return isInline ? {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '> * + *': {
      marginLeft: 10
    }
  } : {};
});
var CheckboxFieldset = _theming.styled.fieldset({
  border: 0,
  padding: 0,
  margin: 0
});
var CheckboxLabel = _theming.styled.label({
  padding: '3px 0 3px 5px',
  lineHeight: '18px',
  display: 'inline-block'
});
var CheckboxesType = exports["default"] = /*#__PURE__*/function (_Component) {
  function CheckboxesType(props) {
    var _this;
    _classCallCheck(this, CheckboxesType);
    _this = _callSuper(this, CheckboxesType, [props]);
    _defineProperty(_this, "handleChange", function (e) {
      var onChange = _this.props.onChange;
      var currentValue = e.target.value;
      var values = _this.state.values;
      if (values.includes(currentValue)) {
        values.splice(values.indexOf(currentValue), 1);
      } else {
        values.push(currentValue);
      }
      _this.setState({
        values: values
      });
      onChange(values);
    });
    _defineProperty(_this, "renderCheckboxList", function (_ref2) {
      var options = _ref2.options;
      return Object.keys(options).map(function (key) {
        return _this.renderCheckbox(key, options[key]);
      });
    });
    _defineProperty(_this, "renderCheckbox", function (label, value) {
      var knob = _this.props.knob;
      var name = knob.name;
      var id = "".concat(name, "-").concat(value);
      var values = _this.state.values;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: id
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        id: id,
        name: name,
        value: value,
        onChange: _this.handleChange,
        checked: values.includes(value)
      }), /*#__PURE__*/_react["default"].createElement(CheckboxLabel, {
        htmlFor: id
      }, label));
    });
    var _knob = props.knob;
    _this.state = {
      values: _knob.defaultValue || []
    };
    return _this;
  }
  _inherits(CheckboxesType, _Component);
  return _createClass(CheckboxesType, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        knob = _this$props.knob,
        isInline = _this$props.isInline;
      return /*#__PURE__*/_react["default"].createElement(CheckboxFieldset, null, /*#__PURE__*/_react["default"].createElement(CheckboxesWrapper, {
        isInline: isInline
      }, this.renderCheckboxList(knob)));
    }
  }]);
}(_react.Component);
_defineProperty(CheckboxesType, "defaultProps", {
  knob: {},
  onChange: function onChange(value) {
    return value;
  },
  isInline: false
});
_defineProperty(CheckboxesType, "propTypes", {
  knob: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    value: _propTypes["default"].array,
    options: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object])
  }),
  onChange: _propTypes["default"].func,
  isInline: _propTypes["default"].bool
});
_defineProperty(CheckboxesType, "serialize", function (value) {
  return value;
});
_defineProperty(CheckboxesType, "deserialize", function (value) {
  return value;
});