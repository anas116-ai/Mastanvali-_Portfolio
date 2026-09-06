"use client";

import dynamic from 'next/dynamic';
import { useWebGLSupport } from '@/hooks/useWebGLSupport';
import { SceneFallback } from './SceneFallback';

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <SceneFallback />
});

export function HeroScene() {
  const isWebGLSupported = useWebGLSupport();

  if (!isWebGLSupported) {
    return <SceneFallback />;
  }

  return <Scene3D />;
}
