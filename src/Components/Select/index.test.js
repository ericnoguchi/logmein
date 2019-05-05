import Select from ".";
import React from "react";
import ReactDOM from "react-dom";

describe("<Select /> rendering", () => {
  let props = {
    collection: [
      {
        valueProp: "value1",
        titleProp: "title1"
      },
      {
        valueProp: "value2",
        titleProp: "title2"
      }
    ],
    valueProp: "valueProp",
    titleProp: "titleProp",
    className: "testClassName",
    value: "testValue",
    onChange: jest.fn()
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Select {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
