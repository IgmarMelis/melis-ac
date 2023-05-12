import { Grommet, Box, Header, Text, Page, PageContent, Grid } from 'grommet';

import styled, { createGlobalStyle } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Logo } from './assets/logo-melis-ac.svg';
import { grayScaleTheme } from './theme/theme';
import { MainMenu } from './components/MainMenu';
import { MobileMenu } from './components/MobileMenu';
import { LanguageMenu } from './components/LanguageMenu';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Home } from './sections/Home';
import { Faq } from './sections/Faq';

// https://design-system.hpe.design/components/page#full-width-background-color
// Define the translations for each language
// Initialize i18next

// Define the global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme as any).global.colors.background};
  }
`;

// Define the styled components
const Section = styled(Box)`
  background: white;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
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
  const { t } = useTranslation();

  return (
    <Grommet theme={grayScaleTheme}>
      <GlobalStyle />
      <Page>
        <PageContent>
          <div style={{ marginTop: '30px' }}>
            <Grid columns={['auto']} rows={['auto', 'auto', 'auto', 'auto', 'auto']}>
              <Home />
              <Services />
              <About />
              <Faq />
              <Section id='contact' pad='medium'>
                <Text size='xxlarge' weight='bold'>
                  {t('contact')}
                </Text>
              </Section>
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
