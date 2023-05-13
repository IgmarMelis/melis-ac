import { Text } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';
import { NoLimitParagrah } from '../components/NoLimitParagraph';
import { TextCard } from '../components/TextCard';

export const Services2 = () => {
  const { t } = useTranslation();

  const items: number[] = [];
  for (let i = 4; i <= 5; i++) {
    items.push(i);
  }

  return (
    <SectionBox id='services' pad='small' image={DefaultImages.Circuito} imagePosition='left'>
      <TextCard>
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