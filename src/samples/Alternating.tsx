import React from 'react';
import { Box, Text } from 'grommet';
import styled from 'styled-components';

const Section = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
`;

const LeftSide = styled(Box)`
  flex: 1;
`;

const RightSide = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.svg`
  max-width: 100%;
  max-height: 100%;
`;

const data = [
  {
    text: 'Lorem ipsum dolor sit amet',
    image: (
      <Image viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='50' />
      </Image>
    )
  },
  {
    text: 'Consectetur adipiscing elit',
    image: (
      <Image viewBox='0 0 100 100'>
        <rect x='0' y='0' width='100' height='100' />
      </Image>
    )
  },
  {
    text: 'Sed do eiusmod tempor incididunt',
    image: (
      <Image viewBox='0 0 100 100'>
        <polygon points='50,0 100,100 0,100' />
      </Image>
    )
  }
];

function App() {
  return (
    <Box pad='medium'>
      {data.map(({ text, image }, index) => (
        <Section key={index}>
          <LeftSide>
            <Text>{text}</Text>
          </LeftSide>
          <RightSide>{image}</RightSide>
        </Section>
      ))}
    </Box>
  );
}

export default App;
