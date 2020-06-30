import  React, { useState } from  'react';
import {NavLink} from 'react-router-dom';
import "../styles/common.css";

const  Header = (props) => {

  //const [activeLink, setActiveLink] = useState('Главная');
  return (
    <header>
      <div class="panel">
        <div class="container">
          <p class="domain">ЭУП "решение нелинейных задач"</p>
          <NavLink to="/" className={props.active === "main" ? "active" : "unactive"}>Главная</NavLink>
          <NavLink to="/theory" className={props.active === "theory" ? "active" : "unactive"}>Теория</NavLink>
          <NavLink to="/practice" className={props.active === "practice" ? "active" : "unactive"}>Практика</NavLink>
          <NavLink to="/module" className={props.active === "module" ? "active" : "unactive"}>Программный модуль</NavLink>
          <NavLink to="/tests"  className={props.active === "tests" ? "active" : "unactive"}>Тесты</NavLink>
          <NavLink to="/dictionary" className={props.active === "dict" ? "active" : "unactive"}>Словарь</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;