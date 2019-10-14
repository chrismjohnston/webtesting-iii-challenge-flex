// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from './Controls';


describe("<Controls />", () => {
    it("button is disabled", () => {
        const { getByText, getByTestId, container } = render(
            <Controls locked={true} closed={true} />
        );

        const disabledButton = getByText(/disabled/i);


        expect(getByTestId(container, disabledButton)).toBeDisabled();

        expect(disabledButton).toHaveAttribute("disabled");
    });

    it("unmounts component after each test", () => {
        console.log(document.body.outerHTML);
    });
});