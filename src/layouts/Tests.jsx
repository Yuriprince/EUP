import  React, { useState, useEffect } from  'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dbTest from "../db/EUP_test.json";
import "../styles/tests.css";
import { findAllByAltText } from '@testing-library/react';
const  Tests = (props) => {

  const [isChecked, setChecked] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [wrongArray, setWrongArray] = useState([]);

  const getResult = () => {
    if(array.length < 10) {
      alert("Вы не полностью прошли тест! Ответьте на все вопросы");
    } else {
      let counter = 0;
      const wrong = [];

      for(let i = 0; i < array.length; i++) {
        if(array[i].value === "true") {
          counter += 1;
        } else {
          const obj = {
            id: array[i].id,
            right: array[i].right_id
          };
          wrong.push(obj);
        }
      }

      alert(`Правильных ответов: ${counter} из 10`);
      setCount(counter);
      setWrongArray(wrong);
      setOpen(true);
    }
  };

  const setCheck = (value, id, right_id) => {
    setChecked(value);
    const tempObj = {
      id,
      value,
      right_id
    };

    let newArr = array;
    const findEl = newArr.find(el => el.id === id);

    if (findEl !== undefined) {
      const index = newArr.indexOf(findEl);
      newArr.splice(index, 1, tempObj);
    } else {
      newArr.push(tempObj);
    }
    setArray(newArr);
    console.log(array);
  };

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
              <input type="radio" value={p.firstval.is_right} name={p.id}
              onChange={e => setCheck(e.target.value, p.id, p.right_id)}/>
                <p className="description">{p.firstval.value}</p>
                <span></span>
              </label>
              <label className="radio">
              <input type="radio" value={p.secondval.is_right} name={p.id}
              onChange={e => setCheck(e.target.value, p.id, p.right_id)}/>
                <p className="description">{p.secondval.value}</p>
                <span></span>
              </label>

              {
                p.thirdval.value !== "" &&
                <label className="radio">
                  <input type="radio" value={p.thirdval.is_right} name={p.id}
                  onChange={ e => setCheck(e.target.value, p.id, p.right_id)}/>
                    <p className="description">{p.thirdval.value}</p>
                    <span></span>
                </label>
              }

            </div>
          </div>
        )) :
        <div>Вопросов нет</div>
      }
      <div class="flex bottom">
        <button class="main-btn active" onClick={getResult}>Узнать результаты</button>
      </div>

      {(isOpen && count > 7) &&
        <div className="pass">
          <p className="description bold">Вы - молодец! Вы успешно прошли тест и 
            правильно ответили на {count} из 10 вопросов.</p>
          <p className="desc">Допущенные ошибки:</p>

          {
            wrongArray.map(p => (
              <p key={p.id} className="desc">Вопрос №{p.id} - правильный ответ {p.right})</p>
            ))
          }
        </div>
      }

      {(isOpen && count >= 5 && count <= 7) && 
        <div className="weak-pass">
          <p className="description bold">Вы прошли тест, однако с натяжкой. 
          Советуем Вам закрепить материал. Правильных ответов: {count} из 10 вопросов.</p>
          <p className="desc">Допущенные ошибки:</p>
          {
            wrongArray.map(p => (
              <p key={p.id} className="desc">Вопрос №{p.id} - правильный ответ {p.right})</p>
            ))
          }
        </div>
      }

      {(isOpen && count < 5) && 
        <div className="not-pass">
          <p className="description bold">Тест завален, посокльку Вы правильно ответили 
          лишь на {count} из 10 вопросов. Идите учить методичку!</p>
          <p className="desc">Допущенные ошибки:</p>
          {
            wrongArray.map(p => (
              <p key={p.id} className="desc">Вопрос №{p.id} - правильный ответ {p.right})</p>
            ))
          }
        </div>
      }

    </main>
    <Footer/>
  </>
  );
};

export default Tests;