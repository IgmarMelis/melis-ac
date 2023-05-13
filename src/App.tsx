import { Grommet, Box, Header, Text, Page, PageContent, Grid } from 'grommet';

import { createGlobalStyle } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Logo } from './assets/logo-melis-ac.svg';
import { grayScaleTheme } from './theme/theme';
import { MainMenu } from './components/MainMenu';
import { MobileMenu } from './components/MobileMenu';
import { LanguageMenu } from './components/LanguageMenu';
import { About } from './sections/About';
import { Services1 } from './sections/Services1';
import { Home } from './sections/Home';
import { Faq1 } from './sections/Faq1';
import { Faq2 } from './sections/Faq2';
import { Contact } from './sections/Contact';
import { Services2 } from './sections/Services2';

// https://design-system.hpe.design/components/page#full-width-background-color
// Define the translations for each language
// Initialize i18next

// Define the global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme as any).global.colors.background};
    margin: 0;
  }
`;

const AppHeader = () => {
  const { t } = useTranslation();

  return (
    <Header background='brand' pad={{ vertical: 'small' }} style={{ position: 'sticky', top: '0' }}>
      <Box direction='row' align='center' gap='medium'>
        <MobileMenu />
        <Logo width={'60px'} height={'60px'} />
        <Text size='large' weight='bold'>
          {t('title')}
        </Text>
      </Box>
      <MainMenu />
      <LanguageMenu />
    </Header>
  );
};

const App = () => {
  return (
    <Grommet theme={grayScaleTheme}>
      <GlobalStyle />
      <Page>
        <PageContent>
          <div style={{ marginTop: '30px' }}>
            <Grid columns={['auto']} rows={['auto', 'auto', 'auto', 'auto', 'auto']}>
              <Home />
              <Services1 />
              <Services2 />
              <Faq1 />
              <Faq2 />
              <About />
              <Contact/>
            </Grid>
          </div>
        </PageContent>
        <PageContent style={{ position: 'fixed', top: 0 }}>
          <AppHeader />
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default App;
