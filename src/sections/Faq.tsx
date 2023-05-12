import { Paragraph } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';

export const Faq = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id='faq' pad='small' image={DefaultImages.Motor}>
      <TextCard header={t('faq')}>
        <Paragraph>{t('faq')}</Paragraph>
      </TextCard>
    </SectionBox>
  );
};
