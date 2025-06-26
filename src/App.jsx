import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Project"
import NoPage from "./pages/NoPage"

function App() {
//<Route index element={<Home />} /> is Default "/"

//Because path called projects, naming conflict must mean calling Project.jsx
//Route path="about" defines About component as "about" for Links to

/*"Match any route that wasn't matched by previous <Route> definitions."
In other words, it’s a catch-all route — like a 404 Not Found page.*/
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <hr/>
    </>
  );
}

export default App
