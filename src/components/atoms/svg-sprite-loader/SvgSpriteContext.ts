import { createContext } from "react";
import { SvgSpriteContextType } from "../../../types/svg-sprite";

const SvgSpriteContext = createContext<SvgSpriteContextType | null>(null);

export default SvgSpriteContext;
