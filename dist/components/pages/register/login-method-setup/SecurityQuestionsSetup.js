"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _MSelect = _interopRequireDefault(require("../../../common/MSelect"));
var _HowSvg = _interopRequireDefault(require("../../../svg/HowSvg"));
var _SecurityExampleSvg = _interopRequireDefault(require("../../../svg/SecurityExampleSvg"));
if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/e18bfbb985f94998e74594b6b4706e9f.scss"));
}
class SecurityQuestionSetup extends _react.Component {
  constructor(props) {
    super(props);(0, _defineProperty2.default)(this, "isDisabled",





































































































    () => {
      const { securityItems } = { ...this.state };
      let matched = securityItems.filter(
      securityItem => securityItem.answer.length > 0 && securityItem.question);

      return matched.length < securityItems.length;
    });(0, _defineProperty2.default)(this, "getOptions",

    () => {
      const { securityItems } = { ...this.state };
      return [
      {
        value: 'streetNumGrewOn',
        label: 'What was the street number that you grew up on?',
        isDisabled: securityItems.some(
        securityItem => securityItem.question === 'streetNumGrewOn') },


      {
        value: 'cityGrewIn',
        label: 'In what town or city did you grow up in?',
        isDisabled: securityItems.some(
        securityItem => securityItem.question === 'cityGrewIn') },


      {
        value: 'primarySchool',
        label: 'What primary school did you go to?',
        isDisabled: securityItems.some(
        securityItem => securityItem.question === 'primarySchool') }];



    });let _securityItems = [{ question: undefined, answer: '' }, { question: undefined, answer: '' }, { question: undefined, answer: '' }];_securityItems = props.securityItems ? props.securityItems : _securityItems;this.state = { securityItems: _securityItems };}renderSecurityCard() {const { securityItems } = { ...this.state };const { toggleDisplayHow } = { ...this.props };return /*#__PURE__*/_react.default.createElement("div", { id: "security-questions-setup", className: "card owner1" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-title" }, "Security Questions"), /*#__PURE__*/_react.default.createElement("div", { className: "excerpt1" }, "Select a maximum of three preferred security questions followed by your answers"), securityItems.map((securityItem, i) => {return /*#__PURE__*/_react.default.createElement(_react.Fragment, { key: i }, /*#__PURE__*/_react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/_react.default.createElement("label", null, "Question #", i + 1), /*#__PURE__*/_react.default.createElement(_MSelect.default, { value: this.getOptions().find(option => option.value === securityItem.question), options: this.getOptions(), isSearcheable: false, onChange: e => {securityItem.question = e.value;this.setState({ securityItems });} })), /*#__PURE__*/_react.default.createElement("div", { className: "answer-section" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/_react.default.createElement("div", null, "Answer"), /*#__PURE__*/_react.default.createElement("input", { type: "text", value: securityItem.answer, onChange: e => {securityItem.answer = e.target.value;this.setState({ securityItems });} }))));})), /*#__PURE__*/_react.default.createElement("div", { className: "submit-section" }, /*#__PURE__*/_react.default.createElement("input", { style: { width: '210px' }, type: "button", value: "Set Questions", onClick: () => this.props.handleGoBack('owner', 10, { securityItems }), disabled: this.isDisabled() })), /*#__PURE__*/_react.default.createElement("div", { className: "how", onClick: toggleDisplayHow }, "How does this work?"));}renderHow() {return /*#__PURE__*/_react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/_react.default.createElement(_HowSvg.default, { loginMethod: "securityAnswers" }), /*#__PURE__*/_react.default.createElement("div", { className: "sec-excerpt" }, "Two-step verification is a simple way to authenticate a user by sending a unique code to their mobile device."), /*#__PURE__*/_react.default.createElement(_SecurityExampleSvg.default, null));}render() {const { isDisplayHow } = { ...this.props };return !isDisplayHow ? this.renderSecurityCard() : this.renderHow();}}exports.default = SecurityQuestionSetup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9TZWN1cml0eVF1ZXN0aW9uc1NldHVwLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIlNlY3VyaXR5UXVlc3Rpb25TZXR1cCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZWN1cml0eUl0ZW1zIiwic3RhdGUiLCJtYXRjaGVkIiwiZmlsdGVyIiwic2VjdXJpdHlJdGVtIiwiYW5zd2VyIiwibGVuZ3RoIiwicXVlc3Rpb24iLCJ2YWx1ZSIsImxhYmVsIiwiaXNEaXNhYmxlZCIsInNvbWUiLCJ1bmRlZmluZWQiLCJyZW5kZXJTZWN1cml0eUNhcmQiLCJ0b2dnbGVEaXNwbGF5SG93IiwibWFwIiwiaSIsImdldE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0Iiwid2lkdGgiLCJoYW5kbGVHb0JhY2siLCJyZW5kZXJIb3ciLCJyZW5kZXIiLCJpc0Rpc3BsYXlIb3ciXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEO0FBQ2MsTUFBTUMscUJBQU4sU0FBb0NDLGdCQUFwQyxDQUE4QztBQUMzREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTixFQURpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUdOLFVBQU07QUFDakIsWUFBTSxFQUFFQyxhQUFGLEtBQW9CLEVBQUUsR0FBRyxLQUFLQyxLQUFWLEVBQTFCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHRixhQUFhLENBQUNHLE1BQWQ7QUFD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LEtBQUtZLFNBQUwsRUFBbkQsQ0FDRCxDQXRHMEQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1TZWxlY3QgZnJvbSAnLi4vLi4vLi4vY29tbW9uL01TZWxlY3QnO1xuaW1wb3J0IEhvd1N2ZyBmcm9tICcuLi8uLi8uLi9zdmcvSG93U3ZnJztcbmltcG9ydCBTZWN1cml0eUV4YW1wbGVTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL1NlY3VyaXR5RXhhbXBsZVN2Zyc7XG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBpbXBvcnQoJy4vU2VjdXJpdHlRdWVzdGlvbnNTZXR1cC5zY3NzJyk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN1cml0eVF1ZXN0aW9uU2V0dXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgc2VjdXJpdHlJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcXVlc3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYW5zd2VyOiAnJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGFuc3dlcjogJycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBxdWVzdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBhbnN3ZXI6ICcnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHNlY3VyaXR5SXRlbXMgPSBwcm9wcy5zZWN1cml0eUl0ZW1zID8gcHJvcHMuc2VjdXJpdHlJdGVtcyA6IHNlY3VyaXR5SXRlbXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlY3VyaXR5SXRlbXMsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlclNlY3VyaXR5Q2FyZCgpIHtcbiAgICBjb25zdCB7IHNlY3VyaXR5SXRlbXMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgdG9nZ2xlRGlzcGxheUhvdyB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJzZWN1cml0eS1xdWVzdGlvbnMtc2V0dXBcIiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNlY3VyaXR5IFF1ZXN0aW9uczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjZXJwdDFcIj5cbiAgICAgICAgICAgIFNlbGVjdCBhIG1heGltdW0gb2YgdGhyZWUgcHJlZmVycmVkIHNlY3VyaXR5IHF1ZXN0aW9ucyBmb2xsb3dlZCBieVxuICAgICAgICAgICAgeW91ciBhbnN3ZXJzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3NlY3VyaXR5SXRlbXMubWFwKChzZWN1cml0eUl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UXVlc3Rpb24gI3tpICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPE1TZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0T3B0aW9ucygpLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBzZWN1cml0eUl0ZW0ucXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5nZXRPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoZWFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW0ucXVlc3Rpb24gPSBlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN1cml0eUl0ZW1zIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkFuc3dlcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlY3VyaXR5SXRlbS5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW0uYW5zd2VyID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VjdXJpdHlJdGVtcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtc2VjdGlvblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcgfX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJTZXQgUXVlc3Rpb25zXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKCdvd25lcicsIDEwLCB7IHNlY3VyaXR5SXRlbXMgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmlzRGlzYWJsZWQoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dcIiBvbkNsaWNrPXt0b2dnbGVEaXNwbGF5SG93fT5cbiAgICAgICAgICBIb3cgZG9lcyB0aGlzIHdvcms/XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckhvdygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ctY29udGFpbmVyXCI+XG4gICAgICAgIDxIb3dTdmcgbG9naW5NZXRob2Q9XCJzZWN1cml0eUFuc3dlcnNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1leGNlcnB0XCI+XG4gICAgICAgICAgVHdvLXN0ZXAgdmVyaWZpY2F0aW9uIGlzIGEgc2ltcGxlIHdheSB0byBhdXRoZW50aWNhdGUgYSB1c2VyIGJ5XG4gICAgICAgICAgc2VuZGluZyBhIHVuaXF1ZSBjb2RlIHRvIHRoZWlyIG1vYmlsZSBkZXZpY2UuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VjdXJpdHlFeGFtcGxlU3ZnIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNEaXNwbGF5SG93IH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICByZXR1cm4gIWlzRGlzcGxheUhvdyA/IHRoaXMucmVuZGVyU2VjdXJpdHlDYXJkKCkgOiB0aGlzLnJlbmRlckhvdygpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlY3VyaXR5SXRlbXMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGxldCBtYXRjaGVkID0gc2VjdXJpdHlJdGVtcy5maWx0ZXIoXG4gICAgICAoc2VjdXJpdHlJdGVtKSA9PiBzZWN1cml0eUl0ZW0uYW5zd2VyLmxlbmd0aCA+IDAgJiYgc2VjdXJpdHlJdGVtLnF1ZXN0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gbWF0Y2hlZC5sZW5ndGggPCBzZWN1cml0eUl0ZW1zLmxlbmd0aDtcbiAgfTtcblxuICBnZXRPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VjdXJpdHlJdGVtcyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6ICdzdHJlZXROdW1HcmV3T24nLFxuICAgICAgICBsYWJlbDogJ1doYXQgd2FzIHRoZSBzdHJlZXQgbnVtYmVyIHRoYXQgeW91IGdyZXcgdXAgb24/JyxcbiAgICAgICAgaXNEaXNhYmxlZDogc2VjdXJpdHlJdGVtcy5zb21lKFxuICAgICAgICAgIChzZWN1cml0eUl0ZW0pID0+IHNlY3VyaXR5SXRlbS5xdWVzdGlvbiA9PT0gJ3N0cmVldE51bUdyZXdPbidcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAnY2l0eUdyZXdJbicsXG4gICAgICAgIGxhYmVsOiAnSW4gd2hhdCB0b3duIG9yIGNpdHkgZGlkIHlvdSBncm93IHVwIGluPycsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHNlY3VyaXR5SXRlbXMuc29tZShcbiAgICAgICAgICAoc2VjdXJpdHlJdGVtKSA9PiBzZWN1cml0eUl0ZW0ucXVlc3Rpb24gPT09ICdjaXR5R3Jld0luJ1xuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6ICdwcmltYXJ5U2Nob29sJyxcbiAgICAgICAgbGFiZWw6ICdXaGF0IHByaW1hcnkgc2Nob29sIGRpZCB5b3UgZ28gdG8/JyxcbiAgICAgICAgaXNEaXNhYmxlZDogc2VjdXJpdHlJdGVtcy5zb21lKFxuICAgICAgICAgIChzZWN1cml0eUl0ZW0pID0+IHNlY3VyaXR5SXRlbS5xdWVzdGlvbiA9PT0gJ3ByaW1hcnlTY2hvb2wnXG4gICAgICAgICksXG4gICAgICB9LFxuICAgIF07XG4gIH07XG59XG4iXX0=