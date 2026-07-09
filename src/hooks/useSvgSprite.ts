import { useContext } from "react";
import SvgSpriteContext from "components/atoms/svg-sprite-loader/SvgSpriteContext";
import { SvgSpriteContextType } from "types/svg-sprite";

const useSvgSprite = (): SvgSpriteContextType => {
  const context = useContext(SvgSpriteContext);
  if (!context) {
    throw new Error("useSvgSprite must be used within a SvgSpriteLoader");
  }
  return context;
};

export default useSvgSprite;
