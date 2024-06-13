import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Loding from './components/Loding';
import DynamicRouter from './components/DynamicRouter';
import './App.css';

function App() {
  return (
    <div>
      <Suspense fallback={<Loding />}>
        <BrowserRouter>
        <DynamicRouter />
          {/* <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<NotFind />}></Route>
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes> */}
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
