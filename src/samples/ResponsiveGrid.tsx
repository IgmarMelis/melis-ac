import React from 'react';
import { Box, Grid, ResponsiveContext, Text } from 'grommet';
import styled from 'styled-components';

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
      <ResponsiveContext.Consumer>
        {(size) => {
          console.log('size', size);
          return (
            <Grid columns={size === 'small' ? { count: 1, size: 'small' } : { count: 2, size: 'auto' }} gap='medium'>
              {data.map(({ text, image }, index) => [
                <Box alignSelf='center' margin={{ bottom: 'medium' }}>
                  <Text>{text}</Text>
                </Box>,
                <Box alignSelf='center'>{image}</Box>
              ])}
            </Grid>
          );
        }}
      </ResponsiveContext.Consumer>
    </Box>
  );
}

export default App;
