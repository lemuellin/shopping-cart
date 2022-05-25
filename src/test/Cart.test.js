import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
import Cart from "../component/Cart";

describe("Cart Component", () => {
    it("Match Snapshot", () => {
        const cart = [];
        const { container } = render(
            <Cart 
                content={cart} 
                inputField={() => console.log('inputField')} 
                minusButton={() => console.log('minusButton')}  
                plusButton={() => console.log('plusButton')} 
                removeButton={() => console.log('removeButton')} 
                showCart={() => console.log('showCart')} 
        />);

        expect(container).toMatchSnapshot();
    });
    it("Calculate total fee", () => {
        const cart = [1,5,3,0,0,0,0,77,8,9];
        render(
            <Cart 
                content={cart} 
                inputField={() => console.log('inputField')} 
                minusButton={() => console.log('minusButton')}  
                plusButton={() => console.log('plusButton')} 
                removeButton={() => console.log('removeButton')} 
                showCart={() => console.log('showCart')} 
        />);

        const gTotal = screen.getByTestId('gTotal');

        expect(gTotal.textContent).toBe('$ 613.80');
    });
});