function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const array = [
{
  firstName: 'Freddy',
  lastName: 'Bes',
  phoneNumber: '555-333-2222' },


{
  firstName: 'Ned',
  lastName: 'Garfield',
  phoneNumber: '222-111-2222' }];



function Call(props) {
  return (
    React.createElement("div", null,
    React.createElement("p", null, "You need to Contact ", props.firstName, " ", props.lastName, " at ", props.phoneNumber), " ", React.createElement(Button, { content: "Pending", variant: "green" })));


}

function Contact(props) {
  return (
    React.createElement("div", null,
    props.contactList.map((array) =>
    React.createElement(Call, {
      firstName: array.firstName,
      lastName: array.lastName,
      phoneNumber: array.phoneNumber }))));





}

class Button extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      color: "orange" });_defineProperty(this, "changeBtn",


    () => {
      this.setState(prevState => ({
        color: "green" }));


    });}

  render() {
    const {
      variant,
      content,
      ...others } =
    this.props;

    return (
      React.createElement("div", null,
      React.createElement("button", _extends({ className: this.state.color }, others, {
        onClick: this.changeBtn }),
      content)));



  }}


ReactDOM.render(
React.createElement(Contact, { contactList: array }),

document.getElementById('app'));