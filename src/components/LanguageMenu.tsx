import { useState } from 'react';
import styled from 'styled-components';
import { Anchor, Box, Menu } from 'grommet';
import i18n, { t } from 'i18next';

const SmallMenuAnchor = styled(Anchor)`
  font-size: 14px;
  color: ${(props) => props.theme.global.colors.text};
`;

export const LanguageMenu = () => {
  const [activeLanguage, setActiveLanguage] = useState('en');

  return (
    <Box direction='row' align='center' gap='medium'>
      <Box>
        <Menu
          style={{}}
          label={<SmallMenuAnchor>{t(activeLanguage)}</SmallMenuAnchor>}
          items={[
            {
              label: 'English',
              onClick: () => {
                i18n.changeLanguage('en');
                setActiveLanguage('en');
              }
            },
            {
              label: 'Français',
              onClick: () => {
                i18n.changeLanguage('fr');
                setActiveLanguage('fr');
              }
            },
            {
              label: 'Español',
              onClick: () => {
                i18n.changeLanguage('es');
                setActiveLanguage('es');
              }
            }
          ]}
        />
      </Box>
    </Box>
  );
};
