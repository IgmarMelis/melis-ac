import { Paragraph } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id='about' pad='small' image={DefaultImages.Convertible}>
      <TextCard header={t('about-text-1')}>
        <Paragraph>{t('about-text-2')}</Paragraph>
      </TextCard>
    </SectionBox>
  );
};
