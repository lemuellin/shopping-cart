import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
import Shop from '../pages/Shop';

describe("Shop Component", () => {
    it("render correct items", () => {
        const { container } = render(<Shop/>);
        expect(screen.getByText("ECHEVERIA")).toBeInTheDocument();
        expect(screen.getByText("A rare low-growing succulent that forms shrubs of thick chubby leaves.")).toBeInTheDocument();
        expect(screen.getByText("CACTUS")).toBeInTheDocument();
        expect(screen.getByText("GOLDEN BALL CACTUS")).toBeInTheDocument();
        expect(screen.getByText("ALOE")).toBeInTheDocument();
        expect(screen.getByText("Is distinguished by its thick, pointed, and juicy green leaves with a toothed border.")).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});