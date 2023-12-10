import React, { Suspense, lazy } from 'react'
import { Routes, Route, } from 'react-router-dom';
const HomeComp = lazy(() => import("./components/home"));
const App = () => {
  return (
    <Suspense fallback=<h1>Loading Screen</h1>>

      <Routes>
        {/* Route for the home page */}

        <Route path="/" element={<HomeComp />} />

      </Routes>
    </Suspense>
  )
}

export default App