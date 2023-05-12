import { Paragraph } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id='home' pad='small' image={DefaultImages.AutoPlaya}>
      <TextCard header={t('home-text-1')}>
        <Paragraph>{t('home-text-2')}</Paragraph>
      </TextCard>
    </SectionBox>
  );
};
