import { shallow } from "enzyme";
import React from "react";
import Select from ".";

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

  let Component;

  beforeEach(() => {
    props.onChange.mockClear();
    Component = <Select {...props} />;
  });

  // snapshot demo
  it("should render to match snapshot", () => {
    expect(shallow(Component)).toMatchSnapshot();
  });

  // simulate event and spy fn demo
  it("should should call props on change with value changes", () => {
    let wrap = shallow(Component);
    wrap.find("select").simulate("change", "changedValue");
    expect(props.onChange).toHaveBeenCalledWith("changedValue");
  });
});
