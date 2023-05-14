import { Header, Text, Box, ResponsiveContext } from 'grommet';

import { useTranslation } from 'react-i18next';
import { LanguageMenu } from './LanguageMenu';
import { MainMenu } from './MainMenu';
import { MobileMenu } from './MobileMenu';
import { ReactComponent as Logo } from '../assets/logo-melis-ac.svg';

const SiteTitle = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === 'small' || size === 'medium' ? (
          <Box direction='column' align='left' gap='medium'>
            <Text size='large' weight='bold'>
              Melis A/C
            </Text>
            <Text size='large' weight='bold'>
              {t('title-short')}
            </Text>
          </Box>
        ) : (
          <Text size='large' weight='bold'>
            {t('title')}
          </Text>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

export const AppHeader = () => {
  return (
    <Header background='brand' pad={{ vertical: 'small' }} style={{ position: 'sticky', top: '0' }}>
      <Box direction='row' align='center' gap='small'>
        <MobileMenu />
        <Logo width={'60px'} height={'60px'} />
        <SiteTitle />
      </Box>
      <MainMenu />
      <LanguageMenu />
    </Header>
  );
};
