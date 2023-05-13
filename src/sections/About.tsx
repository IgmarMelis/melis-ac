import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';
import { NoLimitParagrah } from '../components/NoLimitParagraph';

export const About = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id='about' pad='small' image={DefaultImages.Convertible} imagePosition='right'>
      <TextCard header={t('about-text-1')}>
        <NoLimitParagrah>{t('about-text-2')}</NoLimitParagrah>
      </TextCard>
    </SectionBox>
  );
};
