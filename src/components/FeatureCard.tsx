import React from "react";
interface FeatureCardProps {
  cardStyle: string;
  Icon: React.FunctionComponent;
  iconStyle: string;
  title: string;
  titleStyle: string;
  featureDetail: string;
}
const FeatureCard = ({
  cardStyle,
  Icon,
  iconStyle,
  title,
  titleStyle,
  featureDetail,
}: FeatureCardProps) => {
  return (
    <div
      className={`transition-card group/card my-3 max-w-[300px] rounded-2xl border-[3px] border-white bg-white p-[20px_25px_40px_25px] shadow-lg duration-300 ${cardStyle} md:my-0`}
    >
      <div
        className={`mb-4 inline-block rounded-full p-4 text-white duration-300 group-hover/card:text-white ${iconStyle}`}
      >
        {<Icon />}
      </div>
      <h4 className={`mb-2 text-[1.2rem] font-bold duration-300 ${titleStyle}`}>
        {title}
      </h4>
      <p className="text-justify">{featureDetail}</p>
    </div>
  );
};
export default FeatureCard;
