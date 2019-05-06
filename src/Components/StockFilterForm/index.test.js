import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, getByTestId, render } from "react-testing-library";
import StockFilterForm from ".";
import { Provider } from "../../Services/context";

describe("<StockFilterForm />", () => {
  let context;

  beforeEach(() => {
    context = {
      initialEndDate: new Date(2019, 0, 2),
      initialStartDate: new Date(2019, 0, 1),
      getStocks: jest.fn(),
      stockSymbols: [],
      socialMediaInfo: []
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider value={context}>
        <StockFilterForm />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should call getStocks with input values on submit", () => {
    const { container } = render(
      <Provider value={context}>
        <StockFilterForm />
      </Provider>
    );

    const stockSymbolSelect = getByTestId(container, "stockSymbolSelect");
    const socialMediaSelect = getByTestId(container, "socialMediaSelect");
    const startDateInput = getByTestId(container, "startDateInput");
    const endDateInput = getByTestId(container, "endDateInput");
    const submitButton = getByTestId(container, "submitButton");

    // TODO: need to see why fireEvent.change is not working with select elements
    fireEvent.change(stockSymbolSelect, {
      target: { value: "new" }
    });
    fireEvent.change(socialMediaSelect, {
      target: { value: "new" }
    });

    const newStartDate = "2020-10-10";
    const newEndDate = "2020-11-10";

    fireEvent.change(startDateInput, { target: { value: newStartDate } });
    fireEvent.change(endDateInput, { target: { value: newEndDate } });

    fireEvent.click(submitButton);

    expect(context.getStocks).toHaveBeenCalledWith(
      newStartDate,
      newEndDate,
      "",
      ""
    );
  });
});
