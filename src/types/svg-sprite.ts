export interface SvgIconProps {
  name: string;
  viewBox: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export interface SvgSpriteLoaderProps {
  url: string;
  version?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  children?: React.ReactNode;
}

export interface SvgSpriteState {
  status: 'loading' | 'loaded' | 'error';
  error?: Error;
}

export interface CachedSvgSprite {
  data: string;
  version: string;
  timestamp: number;
}

export interface SvgSpriteContextType {
  isLoaded: boolean;
  isLoading: boolean;
  error: Error | null;
  loadSprite: (url: string, version?: string) => Promise<void>;
}
