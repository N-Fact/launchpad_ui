import CardLarge2 from "components/CardLarge2/CardLarge2";
import { FC, useState } from "react";

export interface SectionLargeSliderProps {
  className?: string;
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  className = "",
}) => {
  const [indexActive, setIndexActive] = useState(0);

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= 2) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return 2;
      }
      return state - 1;
    });
  };

  return (
    <div className={`nc-SectionLargeSlider relative ${className}`}>
      {[1, 1, 1].map((_, index) =>
        indexActive === index ? (
          <CardLarge2
            key={index}
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
          />


          // <CardLarge1
          //   key={index}
          //   isShowing
          //   featuredImgUrl={nftsLargeImgs[index]}
          //   onClickNext={handleClickNext}
          //   onClickPrev={handleClickPrev}
          // />
        ) : null
      )}
    </div>

  );
};

export default SectionLargeSlider;