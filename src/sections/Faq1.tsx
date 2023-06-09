import { Text } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';
import { NoLimitParagrah } from '../components/NoLimitParagraph';

export const Faq1 = () => {
  const { t } = useTranslation();

  const items: number[] = [];
  for (let i = 1; i <= 4; i++) {
    items.push(i);
  }

  return (
    <SectionBox id='faq' pad='small' image={DefaultImages.Motor} imagePosition='right'>
      <TextCard header={t('faq')}>
        {items.map((item) => (
          <>
            <Text size='medium' weight='bold'>
              {t(`faq-text-${item}-q`)}
            </Text>
            <NoLimitParagrah size='medium'>{t(`faq-text-${item}-a`)}</NoLimitParagrah>
          </>
        ))}
      </TextCard>
    </SectionBox>
  );
};
