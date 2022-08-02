import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {FlexCenter} from "../Flex.styled";



test('FlexCenter should works', () => {
    const tree = renderer.create(<FlexCenter >Reza</FlexCenter>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('justify-content', 'center');
    expect(tree).toHaveStyleRule('align-items', 'center');
})
