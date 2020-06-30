import  React, { useState, useEffect } from  'react';
import "../styles/main.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const  Main = (props) => {
  return (
  <>
    <Header active="main"/>
    <main class="container">
      <p class="article">
        ИССЛЕДОВАНИЕ ОПЕРАЦИЙ И ЭКСТРЕМАЛЬНЫЕ ЗАДАЧИ. МЕТОДЫ НЕЛИНЕЙНОГО ПРОГРАММИРОВАНИЯ
      </p>
      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Представлено краткое изложение материала по постановке и теоретическим основам 
        решения нелинейной экстремальной задачи. Рассмотрены принципы и особенности 
        основных групп методов нелинейного программирования, предназначенных для решения
        экстремальной задачи в полной постановке и для решения задачи «безусловной» о
        птимизации как многопараметрической, так и однопараметрической целевой функции. 
        Проведен сравнительный анализ распространенных градиентных методов и многопараметрических 
        методов «прямого поиска» при решении задачи в единой постановке. При изложении материала 
        использовано символьное представление схем методов и блок-схем алгоритмов в авторской 
        разработке.
      </p>

      <p class="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Предназначено для студентов ВУЗов, обучающихся по направлениям бакалавриата 23100062 
        «Программная инженерия» (ПИ), 01050062 «Математическое обеспечение и администрирование 
        информационных систем» (МОиАИС) и 23130062 «Прикладная математика» (ПМ) 
        очной формы обучения.
      </p>
    </main>
    <Footer/>
  </>
  );
};

export default Main;