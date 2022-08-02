import React from 'react'
import renderer from 'react-test-renderer'


import Calculator from "../Calculator";
import {fireEvent, render, screen} from "@testing-library/react";


describe('Calculator', () => {

    test('the digits prop should work correctly', () => {
        const { rerender } = render(<Calculator result={0} dispatch={(digits,ops)=>{}}/>);
        const calcScreen = screen.getByTestId('screen');
        expect(calcScreen).toHaveTextContent('0');
        rerender(<Calculator result={-1} dispatch={(digits,ops)=>{}}/>);
        expect(calcScreen).toHaveTextContent('-1');
        rerender(<Calculator result={2323.2} dispatch={(digits,ops)=>{}}/>);
        expect(calcScreen).toHaveTextContent('2323.2');
    });

    test('buttons should work correctly', () => {

        const mockDispatch = jest.fn((digits: number, operation: string) => {

        });
        render(<Calculator result={0} dispatch={mockDispatch}/>)
        const oneBtn = screen.getByText('1');
        const twoBtn = screen.getByText('2');
        const threeBtn = screen.getByText('3');
        const fourBtn = screen.getByText('4');
        const fiveBtn = screen.getByText('5');
        const sixBtn = screen.getByText('6');
        const sevenBtn = screen.getByText('7');
        const eightBtn = screen.getByText('8');
        const nineBtn = screen.getByText('9');
        const zeroBtn = screen.getByTestId('btn0'); //Screen has '0' text already
        const plusButton = screen.getByText('+');
        const minusButton = screen.getByText('-');
        const negateBtn = screen.getByText('±');
        const percentBtn = screen.getByText('%');
        const divideBtn = screen.getByText('÷');
        const multiBtn = screen.getByText('×');
        const equalBtn = screen.getByText('=');
        const dotBtn = screen.getByText('.');
        const resetBtn = screen.getByText('AC');
        const calcScreen = screen.getByTestId('screen');

        // 12 +  -12  12
        fireEvent.click(oneBtn);
        fireEvent.click(twoBtn);
        fireEvent.click(plusButton)
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(12, '+');
        expect(calcScreen).toHaveTextContent('12')
        fireEvent.click(negateBtn)
        expect(calcScreen).toHaveTextContent('-12')
        fireEvent.click(negateBtn)
        expect(calcScreen).toHaveTextContent('12');

        // 3345 - 78906
        fireEvent.click(resetBtn);
        fireEvent.click(threeBtn);
        fireEvent.click(threeBtn)
        fireEvent.click(fourBtn)
        fireEvent.click(fiveBtn)
        fireEvent.click(minusButton)
        expect(mockDispatch).toHaveBeenCalledTimes(3); // AC + -
        expect(mockDispatch).toHaveBeenCalledWith(3345, '-');
        expect(calcScreen).toHaveTextContent('3345');
        fireEvent.click(sevenBtn);
        fireEvent.click(eightBtn);
        fireEvent.click(nineBtn);
        fireEvent.click(zeroBtn);
        fireEvent.click(sixBtn);
        fireEvent.click(equalBtn)
        expect(mockDispatch).toHaveBeenCalledTimes(4);
        expect(mockDispatch).toHaveBeenCalledWith(78906, '=');
        expect(calcScreen).toHaveTextContent('78906');

        //10.05 %
        fireEvent.click(resetBtn);
        fireEvent.click(oneBtn);
        fireEvent.click(zeroBtn);
        fireEvent.click(dotBtn);
        fireEvent.click(dotBtn);
        fireEvent.click(dotBtn); // nice try:)
        fireEvent.click(zeroBtn);
        fireEvent.click(fiveBtn);
        expect(calcScreen).toHaveTextContent('10.05');
        fireEvent.click(percentBtn);
        expect(mockDispatch).toHaveBeenCalledTimes(6);
        expect(mockDispatch).toHaveBeenCalledWith(10.05, '%');
        expect(calcScreen).toHaveTextContent('10.05');

        // 0 /
        fireEvent.click(resetBtn);
        fireEvent.click(divideBtn);
        expect(calcScreen).toHaveTextContent('0');
        expect(mockDispatch).toHaveBeenCalledTimes(8);
        expect(mockDispatch).toHaveBeenCalledWith(0, '/');


        // 0023 *
        fireEvent.click(resetBtn);
        fireEvent.click(zeroBtn);
        fireEvent.click(zeroBtn);
        fireEvent.click(twoBtn);
        fireEvent.click(threeBtn);
        fireEvent.click(multiBtn);
        expect(calcScreen).toHaveTextContent('23');
        expect(mockDispatch).toHaveBeenCalledTimes(10);
        expect(mockDispatch).toHaveBeenCalledWith(23, '*');
    })


});
