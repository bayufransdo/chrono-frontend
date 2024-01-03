import React from 'react';
interface FeatureCardProps {
  cardOrder: string;
  Icon: React.FunctionComponent;
  featureName: string;
  featureDetail: string;
}
const FeatureCard = ({
  cardOrder,
  Icon,
  featureName,
  featureDetail,
}: FeatureCardProps) => {
  return (
    <div className={`feature-item ${cardOrder}`}>
      <div className="icon">{<Icon />}</div>
      <h4>{featureName}</h4>
      <p>{featureDetail}</p>
    </div>
  );
};
export default FeatureCard;
