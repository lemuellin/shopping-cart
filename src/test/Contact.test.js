import React from "react";
import { render } from "@testing-library/react";
import Contact from '../pages/Contact';

describe("Contact", () => {
    it("Match Snapshot", () => {
        const { container } = render (<Contact/>);
        expect(container).toMatchSnapshot();
    });

});