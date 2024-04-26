import { ListIcon } from 'components/ListIcon/ListIcon';
import {
  FeaturesContainer,
  FeaturesDetailsContainer,
  FeaturesDetailsText,
  FeaturesTitle,
} from './Features.styled';

export const Features = ({ adverts }) => {
  const { adults, transmission, engine } = adverts;

  const FeaturesDetails = { adults, transmission, engine, ...adverts.details };

  return (
    <FeaturesContainer>
      <ListIcon details={FeaturesDetails} />
      <FeaturesTitle>Vehicle details</FeaturesTitle>
      <FeaturesDetailsContainer>
        <FeaturesDetailsText>Form</FeaturesDetailsText>
        <FeaturesDetailsText>{adverts.form}</FeaturesDetailsText>
      </FeaturesDetailsContainer>
      <FeaturesDetailsContainer>
        <FeaturesDetailsText>Length</FeaturesDetailsText>
        <FeaturesDetailsText>{adverts.length}</FeaturesDetailsText>
      </FeaturesDetailsContainer>
      <FeaturesDetailsContainer>
        <FeaturesDetailsText>Width</FeaturesDetailsText>
        <FeaturesDetailsText>{adverts.width}</FeaturesDetailsText>
      </FeaturesDetailsContainer>
      <FeaturesDetailsContainer>
        <FeaturesDetailsText>Height</FeaturesDetailsText>
        <FeaturesDetailsText>{adverts.height}</FeaturesDetailsText>
      </FeaturesDetailsContainer>
      <FeaturesDetailsContainer>
        <FeaturesDetailsText>Tank</FeaturesDetailsText>
        <FeaturesDetailsText>{adverts.tank}</FeaturesDetailsText>
      </FeaturesDetailsContainer>
      <FeaturesDetailsContainer>
        <FeaturesDetailsText>Consumption</FeaturesDetailsText>
        <FeaturesDetailsText>{adverts.consumption}</FeaturesDetailsText>
      </FeaturesDetailsContainer>
    </FeaturesContainer>
  );
};
