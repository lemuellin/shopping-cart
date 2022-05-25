import React from "react";
import { render } from "@testing-library/react";
import Home from '../pages/Home';

describe("Home", () => {
    it("Match Snapshot", () => {
        const { container } = render (<Home/>);
        expect(container).toMatchSnapshot();
    });

});