import React from 'react';

import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global'
import Calculator from "./components/calculator/Calculator";
import {FlexCenter} from "./components/styles/Flex.styled";
import WithSocket from "./components/WithSocket";

function App() {
  return (
    <div >
      <GlobalStyles />
      <Container>

        <h1>
          full-stack calculator

        </h1>


          <FlexCenter>
              <WithSocket Comp={Calculator} />
          </FlexCenter>

        </Container>

    </div>
  );
}

export default App;
