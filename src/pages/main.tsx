import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './home.tsx';
import About from './about.tsx';
import CV from './cv.tsx';
import GSoC from './gsoc.tsx';
import Projects from './projects.tsx';
import Skills from './skills.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='personal-website-static'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/gsoc" element={<GSoC />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
