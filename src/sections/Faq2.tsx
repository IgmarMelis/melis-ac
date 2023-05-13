import { Text, Paragraph } from 'grommet';
import { DefaultImages } from '../components/DefaultImages';
import { SectionBox } from '../components/SectionBox';
import { useTranslation } from 'react-i18next';
import { TextCard } from '../components/TextCard';

export const Faq2 = () => {
  const { t } = useTranslation();

  const items: number[] = [];
  for (let i = 4; i <= 8; i++) {
    items.push(i);
  }

  return (
    <SectionBox id='faq' pad='small' image={DefaultImages.Garage}>
      <TextCard>
        {items.map((item) => (
          <>
            <Text size='medium' weight='bold'>
              {t(`faq-text-${item}-q`)}
            </Text>
            <Paragraph size='medium'>{t(`faq-text-${item}-a`)}</Paragraph>
          </>
        ))}
      </TextCard>
    </SectionBox>
  );
};
