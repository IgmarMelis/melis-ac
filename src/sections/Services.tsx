import { Paragraph } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id='services' pad='small' image={DefaultImages.Circuito} imagePosition='right'>
      <TextCard header={t('services')}>
        <Paragraph>{t('services-text-1')}</Paragraph>
        <Paragraph>{t('services-text-2')}</Paragraph>
        <Paragraph>{t('services-text-3')}</Paragraph>
        <Paragraph>{t('services-text-4')}</Paragraph>
        <Paragraph>{t('services-text-5')}</Paragraph>
      </TextCard>
    </SectionBox>
  );
};
