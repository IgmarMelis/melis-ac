import { Grommet, Page, PageContent, Grid } from 'grommet';

import { createGlobalStyle } from 'styled-components';

import { grayScaleTheme } from './theme/theme';
import { About } from './sections/About';
import { Services1 } from './sections/Services1';
import { Home } from './sections/Home';
import { Faq1 } from './sections/Faq1';
import { Faq2 } from './sections/Faq2';
import { Contact } from './sections/Contact';
import { Services2 } from './sections/Services2';
import { AppHeader } from './components/AppHeader';

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

const App = () => {
  return (
    <Grommet theme={grayScaleTheme}>
      <GlobalStyle />
      <Page>
        <PageContent>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '70px' }}>
            <Home />
            <Services1 />
            <Services2 />
            <Faq1 />
            <Faq2 />
            <About />
            <Contact />
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
