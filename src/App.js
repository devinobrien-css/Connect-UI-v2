import React from "react";
import "./index.css";
import Nav from './components/nav/nav'
import ContentRouter from './components/content_router/content_router'

export default function App() {
  return (
    <div className='dark:bg-gray-700 h-screen w-screen transition-all flex no-wrap'>
      <Nav />
      <ContentRouter />
    </div>
  );
}
