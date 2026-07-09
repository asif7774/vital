import React, { useEffect, useState, useCallback } from "react";
import {
  SvgSpriteLoaderProps,
  SvgSpriteState,
} from "../../../types/svg-sprite";
import {
  getCachedSvgSprite,
  cacheSvgSprite,
  loadSvgSprite,
  injectSvgSprite,
  isSvgSpriteInjected,
  hasVersionChanged,
  isSpriteLoaded,
  markSpriteAsLoaded,
} from "../../../utils/svgSpriteUtils";
import SvgSpriteContext from "./SvgSpriteContext";

const SvgSpriteLoader: React.FC<SvgSpriteLoaderProps> = ({
  url,
  version = "1.0.0",
  onLoad,
  onError,
  children,
}) => {
  const [state, setState] = useState<SvgSpriteState>({
    status: "loading",
  });

  const loadSprite = useCallback(
    async (spriteUrl: string, spriteVersion: string = "1.0.0") => {
      const isDev = import.meta.env.DEV;
      try {
        if (isDev) {
          console.warn(`[SvgSpriteLoader] Loading sprite: ${spriteUrl}`);
        }
        setState({ status: "loading" });

        if (isSpriteLoaded(spriteUrl)) {
          if (isDev) {
            console.warn(
              `[SvgSpriteLoader] Sprite already loaded globally, skipping load (React Strict Mode)`,
            );
          }
          setState({ status: "loaded" });
          onLoad?.();
          return;
        }

        if (isSvgSpriteInjected()) {
          if (isDev) {
            console.warn(
              `[SvgSpriteLoader] Sprite already injected, skipping load`,
            );
          }
          markSpriteAsLoaded(spriteUrl);
          setState({ status: "loaded" });
          onLoad?.();
          return;
        }

        const cachedData = getCachedSvgSprite(spriteUrl);

        if (cachedData && !hasVersionChanged(spriteUrl, spriteVersion)) {
          if (isDev) {
            console.warn(`[SvgSpriteLoader] Using cached sprite: ${spriteUrl}`);
          }
          injectSvgSprite(cachedData.data);
          markSpriteAsLoaded(spriteUrl);
          setState({ status: "loaded" });
          onLoad?.();
          return;
        }

        if (isDev) {
          console.warn(
            `[SvgSpriteLoader] Loading sprite from URL: ${spriteUrl}`,
          );
        }
        const svgData = await loadSvgSprite(spriteUrl);

        cacheSvgSprite(spriteUrl, svgData, spriteVersion);
        injectSvgSprite(svgData);
        markSpriteAsLoaded(spriteUrl);

        if (isDev) {
          console.warn(
            `[SvgSpriteLoader] Successfully loaded and injected sprite: ${spriteUrl}`,
          );
        }
        setState({ status: "loaded" });
        onLoad?.();
      } catch (error) {
        const errorObj =
          error instanceof Error ? error : new Error("Unknown error occurred");

        if (isDev || onError) {
          console.error(
            `[SvgSpriteLoader] Error loading sprite ${spriteUrl}:`,
            errorObj,
          );
        }
        setState({
          status: "error",
          error: errorObj,
        });
        onError?.(errorObj);
      }
    },
    [onLoad, onError],
  );

  useEffect(() => {
    if (url) {
      const loadSpriteDeferred = () => {
        void loadSprite(url, version);
      };

      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(loadSpriteDeferred, { timeout: 2000 });
      } else {
        setTimeout(loadSpriteDeferred, 0);
      }
    }
  }, [url, version, loadSprite]);

  const contextValue = {
    isLoaded: state.status === "loaded",
    isLoading: state.status === "loading",
    error: state.error ?? null,
    loadSprite,
  };

  return (
    <SvgSpriteContext.Provider value={contextValue}>
      {children}
    </SvgSpriteContext.Provider>
  );
};

export default SvgSpriteLoader;
