import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "../component/NavBar.js";


describe("NavBar", () => {
    it("Match Snapshot", () => {
        const { container } = render (
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });

});