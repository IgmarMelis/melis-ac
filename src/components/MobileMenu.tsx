import { Menu, ResponsiveContext } from 'grommet';
import { t } from 'i18next';
import { Menu as MenuIcon } from 'grommet-icons';

export const MobileMenu = () => (
  <ResponsiveContext.Consumer>
    {(size) =>
      size === 'small' ? (
        <Menu
          icon={<MenuIcon />}
          items={[
            { label: t('home'), href: '#home' },
            { label: t('services'), href: '#services' },
            { label: t('faq'), href: '#faq' },
            { label: t('about'), href: '#about' },
            { label: t('contact'), href: '#contact' }
          ]}
        />
      ) : null
    }
  </ResponsiveContext.Consumer>
);
