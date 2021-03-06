import  React, { useState, useEffect } from  'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import im1 from "../img/dictionary/image001.jpg";
import im2 from "../img/dictionary/image002.gif";
import im3 from "../img/dictionary/image003.gif";
import im4 from "../img/dictionary/image004.gif";
import im5 from "../img/dictionary/image005.gif";
import im6 from "../img/dictionary/image006.gif";
import im7 from "../img/dictionary/image007.gif";
const  Dictionary = (props) => {
  return (
  <>
  <Header active="dict"/>
    <main class="container">
      <p class="article">
        СЛОВАРЬ ТЕРМИНОВ
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bold">1. Критические точки</span> — это точки в 
        которых производная функции равна нулю или не существует. 
        Если производная равна 0 то функция в этой точке принимает локальный минимум
        или максимум. На графике в таких точках функция имеет горизонтальную асимптоту,
        то есть касательная параллельна оси Ох.
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bold">2. Локальный экстремум</span>  — Пусть функция y=f(x) определена в некоторой δ-окрестности точки 
        x0, где δ&gt;0. Говорят, что функция f(x) имеет локальный максимум в точке x0, 
        если для всех точек x≠x0, принадлежащих окрестности (x0−δ,x0+δ), выполняется 
        неравенствоf(x)≤f(x0).Если для всех точек x≠x0 из некоторой окрестности точки x0 
        выполняется строгое неравенство f(x) &lt; f(x0) то точка x0 является точкой строгого 
        локального максимума.
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Аналогично определяется локальный минимум функции f(x). 
        В этом случае для всех точек x≠x0 из δ-окрестности (x0−δ,x0+δ) 
        точки x0 справедливо неравенство f(x)≥f(x0).Соответственно, строгий 
        локальный минимум описывается строгим неравенствомf(x)&gt;f(x0).Понятия 
        локального максимума и локального минимума объединяются общим термином локальный 
        экстремум. Слово "локальный" для краткости часто опускают и говорят просто о максимумах и 
        минимумах функции.
      </p>

      <p class="description flex"><img className="formula" src={im1} alt="edit source"/></p>
      <p className="flex bold description">Рисунок 1</p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        На рисунке 1 схематически показаны различные точки экстремума. 
        Точка A(x1) является точкой строгого локального минимума, поскольку 
        для нее существует δ-окрестность (x1−δ,x1+δ), в которой справедливо неравенство 
        f(x)&gt;f(x1)∀x∈(x1−δ,x1+δ).Аналогично, точка B(x2) является точкой строгого локального максимума. 
        В этой точке выполняется неравенство f(x)&lt;f(x2)∀x∈(x2−δ,x2+δ).(Разумеется, число δ в каждой точке 
        может быть совершенно разным.)
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bold">3. Нелинейное программирование</span> — В общем виде задача нелинейного 
        программирования состоит в определении максимального 
        (минимального) значения функции
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im2} alt="edit source"/></p>
        <p class="sf2">(15.1)</p>
      </div>
      <p class="description">
      &nbsp;&nbsp;&nbsp;&nbsp;
        при условии
      </p>

      <div class="flex">
        <p class="sf1"><img className="formula" src={im3} alt="edit source"/></p>
        <p class="sf2">(15.2)</p>
      </div>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        где <img className="formula" src={im4}/> –  некоторые известные функции n переменных, а 
        <img className="formula" src={im5}/> – заданные числа.
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Класс задач нелинейного программирования шире класса задач линейного программирования. 
        Подробное изучение практических задач, которые условились считать линейными, показывает, что они в 
        действительности являются нелинейными. Существующие методы позволяют решать узкий класс задач, 
        ограничения которых имеют вид <img className="formula" src={im6}/> ), а целевая функция является 
        сепарабельной (суммой n функций 
          <img className="formula" src={im7}/>), или  квадратической.
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Даже если область допустимых решений – выпуклая, то в ряде задач целевая функция может 
        иметь несколько локальных экстремумов. С помощью большинства же вычислительных методов 
        можно найти точку локального оптимума, но нельзя установить, является ли она точкой 
        глобального (абсолютного) оптимума или нет. Если задача содержит нелинейные ограничения, 
        то область допустимых решений не является выпуклой и кроме глобального оптимума могут 
        существовать точки локального оптимума.
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bold">4.Экстремальные задачи</span> — методы вычислительной математики, применяемые для поиска экстремумов (максимумов или минимумов) функций и функционалов.
        Для численного решения экстремальных задач, рассматриваемых в бесконечномерных функциональных 
        пространствах (напр., задач оптимального управления процессами, описываемыми обыкновенными 
        дифференциальными уравнениями или уравнениями с частными производными) могут быть использованы 
        после соответствующего обобщения многие методы математич. программирования, разработанные для 
        задач минимизации или максимизации функций конечного числа неременных.
      </p>

    </main>
  <Footer/>
  </>
  );
};

export default Dictionary;