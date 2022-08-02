import {Body, Keypad, Screen} from "./styles/Body.styled";
import {RoundBtnOrange, RoundBtn, RoundBtnWhite} from "./styles/RoundButton.styled";
import {useEffect, useState} from "react";

import {socketDispatch} from "../WithSocket";

const MAX_SCREEN_SIZE = 14;


interface Props {
    result: number;
    dispatch: socketDispatch;
}

export default function Calculator(props: Props) {
    const {result, dispatch} = props;
    const [digits, setDigits] = useState('0'); // Numbers on screen
    const [refreshDigits, setRefreshDigits] = useState(false); // Start a new number (afer + - ...)

    //Monitor result from the server
    useEffect(() => {
        setDigits(result.toString())
    }, [result]);


    //AC Btn
    function handleAcButton() {
        setDigits('0')
        dispatchUpdate('AC')// Reset the server buffer.
    }

    //Publish digits and operation event.
    function dispatchUpdate(operation: string) {
        dispatch(parseFloat(digits), operation);
    }

    //[0-9|.|±] buttons
    function handleDigits(event: { input: string }) {
        const {input} = event
        let newDigits = '0';


        //Handle overflow for screen. it is not the best method, but for now would enough
        if (digits.length > MAX_SCREEN_SIZE) {
            return; //@todo warning message for user
        }

        // Allow '.' only once
        if (input === '.' && digits.includes('.')) {
            return;
        }

        if (digits === '0' && !['.', '±'].includes(input)) { // Prevent leading zero like :0124
            newDigits = input;
        } else if (input === '±') {//Negate numbers
            if (digits !== '0') {
                newDigits = (digits.startsWith('-')) ? digits.substring(1, digits.length) : `-${digits}`;
            }
        } else { // Concat numbers.
            newDigits = refreshDigits ? input : digits + input;
        }
        setRefreshDigits(false);
        setDigits(newDigits)
    }

    //[= + - % ÷ × ]
    function handleOperators(event: { input: string }) {
        dispatchUpdate(event.input);
        setRefreshDigits(true);
    }

    return (
        <Body>
            <Screen data-testid="screen" >
                {/*@todo make output comma separate*/}
                {digits}
            </Screen>
            <Keypad>
                <RoundBtnWhite onClick={handleAcButton}>AC</RoundBtnWhite>
                <RoundBtnWhite onClick={() => handleDigits({input: '±'})}>±</RoundBtnWhite>
                <RoundBtnWhite onClick={() => handleOperators({input: '%'})}>%</RoundBtnWhite>
                <RoundBtnOrange onClick={() => handleOperators({input: '/'})}>÷</RoundBtnOrange>

                <RoundBtn onClick={() => handleDigits({input: '7'})}>7</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '8'})}>8</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '9'})}>9</RoundBtn>
                <RoundBtnOrange onClick={() => handleOperators({input: '*'})}>×</RoundBtnOrange>

                <RoundBtn onClick={() => handleDigits({input: '4'})}>4</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '5'})}>5</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '6'})}>6</RoundBtn>
                <RoundBtnOrange onClick={() => handleOperators({input: '-'})}>-</RoundBtnOrange>

                <RoundBtn onClick={() => handleDigits({input: '1'})}>1</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '2'})}>2</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '3'})}>3</RoundBtn>
                <RoundBtnOrange onClick={() => handleOperators({input: '+'})}>+</RoundBtnOrange>

                <RoundBtn wide="2" data-testid="btn0"  onClick={() => handleDigits({input: '0'})}>0</RoundBtn>
                <RoundBtn onClick={() => handleDigits({input: '.'})}>.</RoundBtn>
                <RoundBtnOrange onClick={() => handleOperators({input: '='})}>=</RoundBtnOrange>
            </Keypad>


        </Body>


    )
}
