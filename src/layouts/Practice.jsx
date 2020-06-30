import  React, { useState, useEffect } from  'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import im1 from "../img/practice/image001.png";
import im2 from "../img/practice/image002.png";
import im3 from "../img/practice/image003.png";
import im4 from "../img/practice/image004.png";
import im5 from "../img/practice/image005.png";
import im6 from "../img/practice/image006.png";
import im7 from "../img/practice/image007.png";
import im8 from "../img/practice/image008.png";
import im9 from "../img/practice/image009.png";

const  Practice = (props) => {
  return (
  <>
    <Header active="practice"/>
    <main className="container">
      <p class="article">
        3.3. Метод Хука-Дживса
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Метод Хука-Дживса относится к группе итерационных методов с ускоряющим шагом спуска.
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Этот метод строится на базе метода «Циклического покоординатного спуска», но существенно ускоряет 
        его сходимость и устраняет важный недостаток преждевременной остановки при выходе на «ось оврага».
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Первый шаг метода полностью идентичен шагу метода «Циклического покоординатного спуска».
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Начиная со второго шага, между двумя циклами спуска по координатным направлениям осуществляется 
        спуск по «ускоряющему направлению», построенному как вектор, определенный достигнутой и 
        предыдущей базовыми точками:
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im1}/></p>
        <p class="sf2">(3.6)</p>
      </div>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Таким образом, точка  <img className="formula" src={im2}/> схемы (3.5) начала цикла спусков по координатным направлениям (3.3) 
        в этом методе не совпадает с базовой точкой <img className="formula" src={im3}/>, а определяется по принципу параметрической 
        одномерной оптимизации (2.24) при спуске по ускоряющему направлению (3.6):
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im4}/>, </p>
        <p class="sf2"><img className="formula" src={im5}/></p>
      </div>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Между промежуточными точками осуществляется спуск по координатным 
        направлением так же, как в базовом методе (3.4).
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Схема метода:
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im6}/></p>
        <p class="sf2">(3.7)</p>
      </div>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Критерий остановки метода соответствует (3.1): 
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im7}/>, </p>
        <p class="sf2"><img className="formula" src={im8}/></p>
      </div>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        На рис. 3.2 приведена графическая иллюстрация 
        особенностей построения траектории спуска в методе Хука-Дживса.
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im9}/></p>
      </div>

      <div class="flex">
        <p class="desc bold">Рис. 3.2. Графическая иллюстрация особенностей построения
траектории спуска в методе Хука-Дживса</p>
      </div>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Таким образом, метод Хука-Дживса является явно 
        адаптивным (на «ускоряющем шаге» используется «поиск по образцу»).
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        За счет ускоряющего в методе Хука-Дживса шага достигается существенное увеличение 
        скорости сходимости, причем основной 
        цикл спуска выполняется по стандартной последовательности координатных направлений (3.3).
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        При помощи направления ускоряющего шага также 
        отслеживается изменение поведения функции в достигнутой базовой точке.
      </p>

      <p class="desc">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Имеет смысл отметить, что в ряде литературных источников, 
        в том числе в широко цитируемом издании [9], используется уточняющая суть данного метода 
        терминология: шаги спуска по координатным направлениям принято называть шагами 
        «исследующего поиска», а шаг спуска по ускоряющему направлению – «поиском по образцу». 
        Хотя эти названия являются наследием описания алгоритма исходного метода Хука-Дживса с 
        дискретным шагом по направлениям, тем не менее, она правомерна и в его более современной 
        версии с использованием внутреннего этапа однопараметрической оптимизации (п. 2.7) 
        при спуске по каждому из направлений.
      </p>

      <div class="flex bottom">
        <button class="main-btn unactive">Назад</button>
        <p class="center page-info">Страница 1 из 5</p>
        <button class="main-btn active">Далее</button>
      </div>

    </main>
    <Footer/>
  </>
  );
};

export default Practice;