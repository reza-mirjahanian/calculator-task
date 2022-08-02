import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import {RoundBtn, RoundBtnOrange, RoundBtnWhite} from "../../styles/RoundButton.styled";


describe('RoundBtn.styled', () => {
    test('RoundBtn should look like a button', () => {
        const tree = renderer.create(<RoundBtn>7</RoundBtn>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('width', '3rem');
        expect(tree).toHaveStyleRule('font-size', '1.6rem');
        expect(tree).toHaveStyleRule('opacity', '0.25', {
            modifier: ':hover',
        })
    })
    test('RoundBtn should look like smaller in mobile', () => {
        const tree = renderer.create(<RoundBtn>7</RoundBtn>).toJSON();
        expect(tree).toMatchSnapshot();

        let mediaQuery = 'only screen and (max-width:425px)';
        expect(tree).toHaveStyleRule('height', '2rem', {
            media: mediaQuery,
        });
        expect(tree).toHaveStyleRule('font-size', '1.2rem', {
            media: mediaQuery,
        });
        expect(tree).toHaveStyleRule('width', '2rem', {
            media: mediaQuery,
        });

    })


    test('RoundBtn should accept wide argument', () => {
        const tree = renderer.create(<RoundBtn wide="2">AC</RoundBtn>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('width', '100%');
    })


    test('RoundBtnOrange should works', () => {
        const tree = renderer.create(<RoundBtnOrange>/</RoundBtnOrange>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('background-color', '#ff9503');
        expect(tree).toHaveStyleRule('color', '#ff9503', {
            modifier: ':focus',
        })
    })

    test('RoundBtnWhite should works', () => {
        const tree = renderer.create(<RoundBtnWhite>/</RoundBtnWhite>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('color', '#1c1c1c');
        expect(tree).toHaveStyleRule('background-color', '#a5a5a5');
        expect(tree).toHaveStyleRule('background-color', '#fff', {
            modifier: ':focus',
        })
    })
});
