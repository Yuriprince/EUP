import  React, { useState, useEffect } from  'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dbTest from "../db/EUP_test.json";
import "../styles/tests.css";
const  Tests = (props) => {

  const [isChecked, setChecked] = useState('process');
  const setCheck = (value) => setChecked(value);

  return (
  <>
    <Header active="tests"/>
    <main class="container">
      <p class="article">
        Тема  4 Часть 4 Многомерная безусловная оптимизация
      </p>

      {
        dbTest.length > 0 ?

        dbTest.map(p => (
          <div key={p.id}>
            <p className="description bold">{p.id}. {p.question}</p>

            <div className="radio-group">
              <label className="radio">
              <input type="radio" value={p.firstval.is_right} name={p.id}/>
                <p className="description">{p.firstval.value}</p>
                <span></span>
              </label>
              <label className="radio">
              <input type="radio" value={p.secondval.is_right} name={p.id}/>
                <p className="description">{p.secondval.value}</p>
                <span></span>
              </label>

              {
                p.thirdval.value !== "" &&
                <label className="radio">
                  <input type="radio" value={p.thirdval.is_right} name={p.id}/>
                    <p className="description">{p.thirdval.value}</p>
                    <span></span>
                </label>
              }

            </div>
          </div>
        )) :
        <div>Вопросов нет</div>
      }
    </main>
    <Footer/>
  </>
  );
};

export default Tests;