import { PageContent } from 'grommet';
import { PropsWithChildren } from 'react';

export const SectionOdd = (props: PropsWithChildren<{ image: string }>) => {
  return (
    <PageContent
      background={{
        fill: 'horizontal',
        image: `url(${props.image})`,
        size: 'contain',
        position: 'left'
      }}
    >
      {props.children}
    </PageContent>
  );
};

export const SectionNoImage = (props: PropsWithChildren<{ reverse?: string }>) => {
  return (
    <PageContent
      background={{
        fill: 'horizontal',
        color: '#FFFFFF', // ensure correct font color and contrast
        image: `linear-gradient(
    180deg, 
    #FDFDFD 0%,
    #8f8f8f 100%
  )`
      }}
    >
      {' '}
      {props.children}
    </PageContent>
  );
};
