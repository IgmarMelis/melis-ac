import { Card, Text, Box } from 'grommet';
import { Send as TelegramIcon, Phone as PhoneIcon, ContactInfo } from 'grommet-icons';
import { useTranslation } from 'react-i18next';

import { DefaultImages } from '../components/DefaultImages';
import { ImageBox } from '../components/ImageBox';
import { ReactComponent as Logo } from '../assets/logo-melis-ac.svg';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <Box id='contact' direction='column' align='center' gap={'small'}>
      <Card
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
          margin: '20px'
        }}
      >
        <Text size='large' weight='bold'>
          {t('contact')}
        </Text>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Logo width='80px' height='80px' />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
              <ContactInfo />
              <span>info@melis-ac.tech</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
              <TelegramIcon style={{ padding: '4px' }} />
              <PhoneIcon style={{ padding: '4px' }} />
              +53 5 354 0241
            </div>
          </div>
        </div>
      </Card>
      <ImageBox image={DefaultImages.ContactGps} />
    </Box>
  );
};
