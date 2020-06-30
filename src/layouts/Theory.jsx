import  React, { useState, useEffect } from  'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import im1 from "../img/page1/image001.png";
import im2 from "../img/page1/image002.png";
import im3 from "../img/page1/image003.png";
import im4 from "../img/page1/image004.png";
import im5 from "../img/page1/image005.png";
import im6 from "../img/page1/image006.png";
import im7 from "../img/page1/image007.png";
import im8 from "../img/page1/image008.png";
import im9 from "../img/page1/image009.png";
import im10 from "../img/page1/image010.png";
import im11 from "../img/page1/image011.png";
import im12 from "../img/page1/image012.png";
import im13 from "../img/page1/image013.png";
import im14 from "../img/page1/image014.png";
import im15 from "../img/page1/image015.png";
import im16 from "../img/page1/image016.png";
import im17 from "../img/page1/image017.png";
import im18 from "../img/page1/image018.png";
import "../styles/theory.css";
const Theory = (props) => {
  return (
  <>
    <Header active="theory"/>
    <main class="container">
      <p class="article">
      1. ТЕОРЕТИЧЕСКИЕ ОСНОВЫ И ЧИСЛЕННЫЕ МЕТОДЫ РЕШЕНИЯ ЭКСТРЕМАЛЬНОЙ ЗАДАЧИ 
В  НЕЛИНЕЙНОЙ ПОСТАНОВКЕ
      </p>
      <p class="article">
      1.1. Постановка экстремальной задачи
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Экстремальной задачей в математике называется задача оптимизации функции 
        <img className="formula" src={im1} alt="edit source"/>, 
        т.е. определение экстремального значения <img className="formula" src={im2} alt="edit source"/> 
        (<img className="formula" src={im3} alt="edit source"/> или &nbsp;
        <img className="formula" src={im4} alt="edit source"/>) этой функции и значения ее 
        аргумента <img className="formula" src={im5} alt="edit source"/>   
        (вектора переменных), при котором достигается это значение: 
      </p>

      <p class="center"><img className="formula" src={im6} alt="edit source"/>.</p>

      <p class="description">
      &nbsp;&nbsp;&nbsp;&nbsp;
        В общем случае функция зависит от нескольких переменных. Случай оптимизации функции,
         зависящей от одной переменной (параметра), является частным случаем общей постановки задачи.
      </p>

      <p class="description">
        Полная постановка задачи оптимизации в стандартной форме: определить минимум значения функции от нескольких переменных
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im7} alt="edit source"/></p>
        <p class="sf2">(1.1)</p>
      </div>

      <p class="description">в допустимой области D изменения аргумента, т.е. 
        при выполнении дополнительных ограничений (условий):</p>
      
      <div class="flex">
        <p class="sf1"><img className="formula" src={im8} alt="edit source"/></p>
        <p class="sf2">(1.2)</p>
      </div>
      
      <div class="flex">
        <p class="sf1"><img className="formula" src={im9} alt="edit source"/></p>
        <p class="sf2">(1.3)</p>
      </div>

      <div class="flex">
        <p class="sf1">
          <img className="formula" src={im10} alt="edit source"/>
          , <img className="formula" src={im11} alt="edit source"/>
        </p>
        <p class="sf2">(1.4)</p>
      </div>

      <p class="description">Вектор переменных</p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im12} alt="edit source"/></p>
        <p class="sf2">(1.5)</p>
      </div>

      <p class="description">определяет точку в области определения функции. 
      Точка  <img className="formula" src={im5} alt="edit source"/> называется целевой точкой и  
      принадлежит допустимой области <img className="formula" src={im13} alt="edit source"/>.</p>

      <p class="description">Функция <img className="formula" src={im1}/> (1.1) в 
      экстремальной задаче (1.2) называется «целевая функция» или «основной 
      критерий качества» оптимизации.</p>

      <p class="description">Условия типа неравенств  в системе <img className="formula" src={im14}/>
      (1.3) определяют допустимое положение точки 
      в части пространства аргумента, ограниченной поверхностью (кривой) <img className="formula" src={im15}/>, 
      <img className="formula" src={im16}/>.</p>

      <p class="description">Условия типа равенств в системе (1.3) определяют допустимое 
      положение точки непосредственно на соответствующей поверхности
      (или кривой линии) <img className="formula" src={im17}/>, <img className="formula" src={im18}/>. Условия этого типа налагают более жесткие ограничения, 
      чем условия типа <img className="formula" src={im14}/>.</p>

      <div class="flex bottom">
        <button class="main-btn unactive">Назад</button>
        <p class="center page-info">Страница 1 из 134</p>
        <button class="main-btn active">Далее</button>
      </div>

    </main>
    <Footer/>
  </>
  );
};

export default Theory;