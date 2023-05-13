import { Send as TelegramIcon, Phone as PhoneIcon, ContactInfo } from 'grommet-icons';
import { DefaultImages } from '../components/DefaultImages';
import { Card,Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import { ImageBox } from '../components/ImageBox';
import { ReactComponent as Logo } from '../assets/logo-melis-ac.svg';

export const Contact = () => {
  const { t } = useTranslation();
  return (
  <ImageBox id='contact' image={DefaultImages.ContactGps}>
      <Card style={{backgroundColor: 'white', position: 'relative', top: '32%', left: '22%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px'}}>
      <Text size='large' weight='bold'>{t('contact')}</Text>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <Logo width='80px' height='80px'/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}><ContactInfo/><span>melisigmar@gmail.com</span></div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}><TelegramIcon style={{padding: '4px'}}/><PhoneIcon style={{padding: '4px'}}/>+53 5 354 0241</div>
        </div></div>
      </Card>
    </ImageBox>
  );
};
