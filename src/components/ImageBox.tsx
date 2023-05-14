import { ResponsiveContext, Box } from 'grommet';
import { innerBoxProps } from './CommonProps';
import { PropsWithChildren } from 'react';

export const ImageBox = (props: PropsWithChildren<{ id?: string; image: String }>) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === 'small' ? (
          <Box
            {...innerBoxProps}
            id={props.id}
            height={{ min: 'medium', height: '100%' }}
            background={{
              image: `url(${props.image})`,
              size: 'contain'
            }}
          >
            {props.children}
          </Box>
        ) : (
          <Box
            {...innerBoxProps}
            id={props.id}
            height={{ min: 'large', height: '100%' }}
            background={{
              image: `url(${props.image})`,
              size: 'contain'
            }}
          >
            {props.children}
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  );
};
