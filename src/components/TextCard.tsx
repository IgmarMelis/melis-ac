import { Box, Heading } from 'grommet';
import { PropsWithChildren } from 'react';

export const TextCard = (props: PropsWithChildren<{ header?: string | null }>) => (
  <Box gridArea='introduction'>
    <Heading gridArea='heading' level={2} size='medium' margin={{ top: 'medium', bottom: 'medium' }}>
      {props.header}
    </Heading>
    {props.children}
  </Box>
);
