import { Box, Anchor, ResponsiveContext } from 'grommet';
import { useTranslation } from 'react-i18next';

export const MainMenu = () => {
  const { t } = useTranslation();

  return (
  <ResponsiveContext.Consumer>
    {(size) => {
      const gap = size === 'small' || size === 'medium' ? 'small' : 'medium';
      return size === 'small' ? null : (
        <Box direction='row' align='center' gap={gap}>
          <Anchor href='#home' style={{ whiteSpace: 'nowrap' }}>
            {t('home')}
          </Anchor>
          <Anchor href='#services' style={{ whiteSpace: 'nowrap' }}>
            {t('services')}
          </Anchor>
          <Anchor href='#faq' style={{ whiteSpace: 'nowrap' }}>
            {t('faq')}
          </Anchor>
          <Anchor href='#about' style={{ whiteSpace: 'nowrap' }}>
            {t('about')}
          </Anchor>
          <Anchor href='#contact' style={{ whiteSpace: 'nowrap' }}>
            {t('contact')}
          </Anchor>
        </Box>
      );
    }}
  </ResponsiveContext.Consumer>
);
}
