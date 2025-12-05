import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { SvgSpriteLoaderProps, SvgSpriteState, SvgSpriteContextType } from '../../../types/svg-sprite';
import { 
  getCachedSvgSprite, 
  cacheSvgSprite, 
  loadSvgSprite, 
  injectSvgSprite, 
  isSvgSpriteInjected,
  hasVersionChanged,
  isSpriteLoaded,
  markSpriteAsLoaded
} from '../../../utils/svgSpriteUtils';

const SvgSpriteContext = createContext<SvgSpriteContextType | null>(null);

export const useSvgSprite = (): SvgSpriteContextType => {
  const context = useContext(SvgSpriteContext);
  if (!context) {
    throw new Error('useSvgSprite must be used within a SvgSpriteLoader');
  }
  return context;
};

const SvgSpriteLoader: React.FC<SvgSpriteLoaderProps> = ({ 
  url, 
  version = '1.0.0', 
  onLoad, 
  onError, 
  children 
}) => {
  const [state, setState] = useState<SvgSpriteState>({
    status: 'loading'
  });

  const loadSprite = useCallback(async (spriteUrl: string, spriteVersion: string = '1.0.0') => {
    try {
      console.log(`[SvgSpriteLoader] Loading sprite: ${spriteUrl}`);
      setState({ status: 'loading' });

      // Check if sprite is already loaded globally (prevents duplicate loading in Strict Mode)
      if (isSpriteLoaded(spriteUrl)) {
        console.log(`[SvgSpriteLoader] Sprite already loaded globally, skipping load (React Strict Mode)`);
        setState({ status: 'loaded' });
        onLoad?.();
        return;
      }

      // Check if sprite is already injected
      if (isSvgSpriteInjected()) {
        console.log(`[SvgSpriteLoader] Sprite already injected, skipping load`);
        markSpriteAsLoaded(spriteUrl);
        setState({ status: 'loaded' });
        onLoad?.();
        return;
      }

      // Check cache first
      const cachedData = getCachedSvgSprite(spriteUrl);
      
      if (cachedData && !hasVersionChanged(spriteUrl, spriteVersion)) {
        console.log(`[SvgSpriteLoader] Using cached sprite: ${spriteUrl}`);
        // Use cached data
        injectSvgSprite(cachedData.data);
        markSpriteAsLoaded(spriteUrl);
        setState({ status: 'loaded' });
        onLoad?.();
        return;
      }

      console.log(`[SvgSpriteLoader] Loading sprite from URL: ${spriteUrl}`);
      // Load from URL
      const svgData = await loadSvgSprite(spriteUrl);
      
      // Cache the data
      cacheSvgSprite(spriteUrl, svgData, spriteVersion);
      
      // Inject into DOM
      injectSvgSprite(svgData);
      
      // Mark as loaded globally
      markSpriteAsLoaded(spriteUrl);
      
      console.log(`[SvgSpriteLoader] Successfully loaded and injected sprite: ${spriteUrl}`);
      setState({ status: 'loaded' });
      onLoad?.();
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error('Unknown error occurred');
      console.error(`[SvgSpriteLoader] Error loading sprite ${spriteUrl}:`, errorObj);
      setState({ 
        status: 'error', 
        error: errorObj 
      });
      onError?.(errorObj);
    }
  }, [onLoad, onError]);

  useEffect(() => {
    if (url) {
      loadSprite(url, version);
    }
  }, [url, version, loadSprite]);

  const contextValue: SvgSpriteContextType = {
    isLoaded: state.status === 'loaded',
    isLoading: state.status === 'loading',
    error: state.error || null,
    loadSprite
  };

  return (
    <SvgSpriteContext.Provider value={contextValue}>
      {children}
    </SvgSpriteContext.Provider>
  );
};

export default SvgSpriteLoader;
