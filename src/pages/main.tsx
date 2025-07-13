import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../components/layout';
import ErrorBoundary from '../components/error-boundary';
import { LanguageProvider } from '../i18n/context';
import { lazy, Suspense } from 'react';
import { APP_CONFIG } from '../constants/config';

const Home = lazy(() => import('./home.tsx'));
const About = lazy(() => import('./about.tsx'));
const CV = lazy(() => import('./cv.tsx'));
const GSoC = lazy(() => import('./gsoc.tsx'));
const Projects = lazy(() => import('./projects.tsx'));
const Skills = lazy(() => import('./skills.tsx'));
const NotFound = lazy(() => import('./not-found.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ErrorBoundary>
        <BrowserRouter basename={APP_CONFIG.BASENAME}>
          <Layout>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen" role="status" aria-live="polite">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="sr-only">Loading page content...</span>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/gsoc" element={<GSoC />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </LanguageProvider>
  </StrictMode>,
)
