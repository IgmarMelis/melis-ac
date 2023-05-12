import React from 'react';
import { Box, ThemeType, Grommet, Header, Text } from 'grommet';

const theme: ThemeType = {
  global: {
    colors: {
      brand: '#7D4CDB',
      focus: 'none'
    }
  }
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <Header background='brand' pad='small' justify='center' height='60px' style={{ position: 'sticky', top: 0 }}>
        <Text color='white' size='large' weight='bold'>
          Sticky Header
        </Text>
      </Header>
      <Box flex align='center' justify='center'>
        {Array.from({ length: 50 }, (_, i) => (
          <Text key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ullamcorper enim, sit amet volutpat
            nulla. Vestibulum eu mi quis velit ultricies volutpat vel eu nisi. Nunc bibendum felis ut faucibus cursus.
            Morbi suscipit purus et mauris euismod, sed sollicitudin nulla placerat. Praesent vulputate, nibh in
            fringilla commodo, nibh elit tincidunt sapien, nec elementum tellus eros vitae nisi. Sed varius eleifend
            tellus in cursus. Donec vel rutrum enim. Nam at velit vitae odio hendrerit dignissim sed eu metus. Curabitur
            sodales arcu in ligula faucibus ultrices. Ut volutpat mauris et ex auctor, eget convallis sapien faucibus.
          </Text>
        ))}
      </Box>
    </Grommet>
  );
};

export default App;
