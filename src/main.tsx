import { createRoot } from 'react-dom/client';

// Import polyfills first
import './lib/polyfills.ts';

// Fonts
import '@fontsource/bebas-neue';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import '@fontsource-variable/dm-sans';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
