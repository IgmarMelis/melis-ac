import { Box, BoxExtendedProps, ResponsiveContext } from 'grommet';
import { PropsWithChildren } from 'react';
import { ImageBox } from './ImageBox';
import { innerBoxProps } from './CommonProps';

export const SectionBox = (
  props: PropsWithChildren<
    { image?: string; imagePosition?: 'left' | 'right' } & Omit<
      BoxExtendedProps,
      'backrground' | 'direction' | 'gap' | 'align'
    >
  >
) => {
  const { imagePosition = 'left' } = props;

  const mainBoxBackground = props.image
    ? undefined
    : {
        image: 'linear-gradient(180deg, #FDFDFD 0%, #8f8f8f 100%)',
        size: 'contain',
        position: 'left'
      };

  const imageBox = props.image ? <ImageBox image={props.image} /> : undefined;

  return (
    <Box {...props} direction='row-responsive' gap='none' align='center' background={mainBoxBackground}>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'small' ? (
            <>
              {imageBox}
              <Box {...innerBoxProps}>{props.children}</Box>
            </>
          ) : (
            <>
              {imagePosition === 'left' ? imageBox : undefined}
              {props.children && (
                <Box {...innerBoxProps} pad={'20px'}>
                  {props.children}
                </Box>
              )}
              {imagePosition === 'right' ? imageBox : undefined}
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};
