import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {Container} from "../Container.styled";



test('Container should works', () => {
    const tree = renderer.create(<Container >Reza</Container>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('padding', '0 20px');
    expect(tree).toHaveStyleRule('margin', '0 auto');
    expect(tree).toHaveStyleRule('min-height', '100vh');
})
