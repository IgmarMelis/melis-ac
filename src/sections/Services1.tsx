import { Text } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { TextCard } from '../components/TextCard';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';
import { NoLimitParagrah } from '../components/NoLimitParagraph';

export const Services1 = () => {
  const { t } = useTranslation();

  const items: number[] = [];
  for (let i = 1; i <= 3; i++) {
    items.push(i);
  }

  return (
    <SectionBox id='services' pad='small' image={DefaultImages.Circuito} imagePosition='right'>
      <TextCard header={t('services')}>
        {items.map((item) => (
          <>
            <Text size='medium' weight='bold'>
              {t(`services-title-${item}`)}
            </Text>
            <NoLimitParagrah size='medium'>{t(`services-text-${item}`)}</NoLimitParagrah>
          </>
        ))}
      </TextCard>
    </SectionBox>
  );
};
