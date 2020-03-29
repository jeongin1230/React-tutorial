import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/* // 1. 
function Hi(props) {
  return (
    <div className="test">
      <h1>Hello {props.name}!</h1>
      <head>Header</head>
      <ol>
        <li>Ordered list 1</li>
        <li>Ordered list 2</li>
        <li>Ordered list 3</li>
      </ol>
      <ul>
        <li>Unordered list 1</li>
        <li>Unordered list 2</li>
        <li>Unordered list 3</li>
      </ul>
    </div>
  );
} 
*/
/* // 2. 3 different ways of component
const Hello = ({name}) => {
  return (
    <div>hello {name}!</div>
  )
}
const Hello = ({name}) => (
  <div>hello {name}!</div>
)
const Hello = ({name}) => <div>hello {name}!</div>;
*/

/* // 3. multiple props
function HiFullName(props) {
  return (
    <div>Hi {props.firstName} {props.lastName}!</div>
  )
}
*/
/* // 4.
function MediaCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl} alt="Appl" />
    </div>
  );
}
*/

// 5. use ternary operator
const Gate = ({ isOpen }) => {
  return <div>{isOpen ? "True! It is open!" : "False! It is closed!"}</div>;
};

ReactDOM.render(
  /* //1. 
  <Hi name="JP" />,
  */
  /* //2. 3 different ways of component
  <Hello name="Jeongin" />,
  */
  /* //3. multiple props
  <HiFullName firstName="Jeongin" lastName="Park" />,
  */
  /* //4.
  <MediaCard
    title="Title: Apple"
    body="Apple is delicious"
    imageUrl="data:image/jpeg;base64,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"
  />,
  */
  //5.
  <Gate isOpen={false} />,
  document.querySelector("#root")
);

// Before react runs, <div>Hello World!</div> becomes
// -> React.createElement('div', null, 'Hello World!')

/*
<CustomButton
  green={true}
  width={64}
  options={{ awesome: "yes", disabled: "no" }}
  onClick={doStuffFunc}
/>
*/
