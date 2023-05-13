import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';
import { NoLimitParagrah } from '../components/NoLimitParagraph';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id='home' pad='small' image={DefaultImages.AutoPlaya}>
      <TextCard header={t('home-text-1')}>
        <NoLimitParagrah>{t('home-text-2')}</NoLimitParagrah>
      </TextCard>
    </SectionBox>
  );
};
