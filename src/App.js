import React from "react";
import "./index.css";
import Nav from './components/nav/nav'
import Header from './components/header/header'
import ContentRouter from './components/content_router/content_router'

export default function App() {
  return (
    <div className='dark:bg-gray-700 h-screen transition-all'>
      <Nav />
      <Header />
      <ContentRouter />
    </div>
  );
}
