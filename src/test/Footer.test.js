import React from "react";
import { render } from "@testing-library/react";
import Footer from '../component/Footer';

describe("Footer", () => {
    it("Match Snapshot", () => {
        const { container } = render (<Footer/>);
        expect(container).toMatchSnapshot();
    });

});