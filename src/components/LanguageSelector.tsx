import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Text, Anchor } from 'grommet';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu
      label={<Text size='small'>{i18n.language.toUpperCase()}</Text>}
      items={[
        {
          label: 'English',
          onClick: () => changeLanguage('en')
        },
        {
          label: 'Français',
          onClick: () => changeLanguage('fr')
        },
        {
          label: 'Español',
          onClick: () => changeLanguage('es')
        }
      ]}
      dropAlign={{ top: 'bottom', right: 'right' }}
    >
      <Anchor />
    </Menu>
  );
}

export default LanguageSelector;
