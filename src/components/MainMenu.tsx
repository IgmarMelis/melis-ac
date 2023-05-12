import { Box, Anchor, ResponsiveContext } from 'grommet';
import { t } from 'i18next';

export const MainMenu = () => (
  <ResponsiveContext.Consumer>
    {(size) =>
      size === 'small' ? null : (
        <Box direction='row' align='center' gap='medium'>
          <Anchor href='#home' style={{ whiteSpace: 'nowrap' }}>
            {t('home')}
          </Anchor>
          <Anchor href='#services' style={{ whiteSpace: 'nowrap' }}>
            {t('services')}
          </Anchor>
          <Anchor href='#about' style={{ whiteSpace: 'nowrap' }}>
            {t('about')}
          </Anchor>
          <Anchor href='#faq' style={{ whiteSpace: 'nowrap' }}>
            {t('faq')}
          </Anchor>
          <Anchor href='#contact' style={{ whiteSpace: 'nowrap' }}>
            {t('contact')}
          </Anchor>
        </Box>
      )
    }
  </ResponsiveContext.Consumer>
);
