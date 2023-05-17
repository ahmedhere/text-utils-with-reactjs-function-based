import React, { useState } from "react";

export default function TextFrom(props) {
  let [text, setText] = useState("Enter text in the above box");
  let [count, setCount] = useState(0);
  let [words, setWords] = useState(0);
  let handleCapitalize = () => {
    let x = text.split(" ");

    props.showAlert("The text has been Capitalized", "success");

    setText(
      x
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ")
    );
  };
  return (
    <>
      <div
        className={`container mt-5 p-5 bg-${props.mode} text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className="row mt-3">
          <div className="col-12">
            <h1>{props.heading}</h1>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="8"
              value={text}
              onChange={(event) => {
                let newText = event.target.value;
                setText(newText);
                setCount(event.target.value.length);
                setWords(
                  event.target.value.split(" ").filter((element) => {
                    return element.length !== 0;
                  }).length
                );
              }}
              className={`form-control bg-${
                props.mode === "dark" ? "secondary" : "light"
              } text-${props.mode === "dark" ? "light" : "dark"}`}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-3 offset-9">
            <p align="right">
              Total Words: {words} Total Characters: {count}
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <button
              className="btn btn-primary"
              onClick={() => {
                setText(
                  document.getElementById("textarea").value.toUpperCase()
                );
                props.showAlert(
                  "The text has been converted to Upper Case",
                  "success"
                );
              }}
            >
              Convert to UpperCase
            </button>
            <button
              className="btn btn-info mx-2"
              onClick={() => {
                setText(
                  document.getElementById("textarea").value.toLowerCase()
                );
                props.showAlert(
                  "The text has been converted to Lower Case",
                  "success"
                );
              }}
            >
              Convert to lowerCase
            </button>
            <button className="btn btn-warning mx-2" onClick={handleCapitalize}>
              Capitalize paragaraph text
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h2>Preview:</h2>
            <div id="result">
              {text.length > 0
                ? text
                : "Enter text in the above box to preview it here."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
