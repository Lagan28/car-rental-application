import React from 'react';
import './App.css';
import {Homepage} from "./app/containers/Homepage";
import styled from 'styled-components';
import tw from 'twin.macro';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return <AppContainer>
    <Homepage />
  </AppContainer>
}

export default App;
