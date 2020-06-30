import  React, { useState, useEffect } from  'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const  Module = (props) => {
  return (
  <>
    <Header active="module"/>
      <main className="container">
        <p className="article">
          Материалы для скачивания
        </p>
        <div className="download">
          <p className="desc">крсовой_опт_ХДж.zip</p>
          <button className="main-btn active">Скачать</button>
        </div>
      </main>
    <Footer/>
  </>
  );
};

export default Module;