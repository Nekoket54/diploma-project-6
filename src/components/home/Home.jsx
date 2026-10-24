import { useState, useEffect } from "react";
import "./Home.css";
import "../../Main.css";
import { VscGraph } from "react-icons/vsc";
import calculator from "../../assets/calculator.svg";
import deleteBtn from "../../assets/delete.svg";

function Home() {
  const [inputDate, setInputDate] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [inputSum, setInputSum] = useState("");
  const [cardGroups, setCardGroups] = useState([]);

  function inputDateChange(evt) {
    setInputDate(evt.target.value)
  }
  function inputDescriptionChange(evt) {
    setInputDescription(evt.target.value)    
  }
  function selectCategoryChange(evt) {
    setSelectCategory(evt.target.value)
  }
  function inputSumChange(evt) {
    setInputSum(evt.target.value)
  }
  function createCard() {
    let formattedDate = inputDate
    if(inputDate){
      const [year, month, day] = inputDate.split("-")
      formattedDate = `${day}.${month}.${year}`
    }

    const newCard = {
      date: formattedDate,
      description: inputDescription,
      category: selectCategory,
      sum: inputSum,
      id: Date.now(),
    }
    const update = [...cardGroups, newCard];
    setCardGroups(update)

    setInputDate("")
    setInputDescription("")
    setSelectCategory("")
    setInputSum("")
  }
  function deleteCard(id) {
    const updatedCards = cardGroups.filter((card) => card.id !== id)
    setCardGroups(updatedCards)
  }

  return (
    <div className="home">
      <div className="home-boxLogo">
        <p className="home-boxLogo-text">InvestIQ</p>
        <div className="home-boxLogo-box">
          <p className="home-boxLogo-box-userIcon">U</p>
          <p className="home-boxLogo-box-userName">User Name</p>
          <button className="home-boxLogo-box-btn">Вийти</button>
        </div>
      </div>
      <div className="home-currency">
        <div className="home-currency-container">
          <p className="home-currency-container-text">Баланс:</p>
          <input
            type="text"
            placeholder="00.00 UAH"
            className="home-currency-container-input"
          />
          <button className="home-currency-container-btn">підтвердити</button>
        </div>
        <div className="home-currency-box">
          <p className="home-currency-box-text">Перейти до розрахунків</p>
          <VscGraph className="home-currency-box-svg" />
        </div>
      </div>
      <div className="home-main">
        <div className="home-main-container1">
          <button className="home-main-container1-btnSquander">Витрати</button>
          <button className="home-main-container1-btnIncome">дохід</button>
        </div>
        <div className="home-main-container2">
          <div className="home-main-container2-box1">
            <div className="date-wrapper">
              <input
                type="date"
                className="home-main-container2-box1-inputDate"
                value={inputDate}
                onChange={inputDateChange}
              />
            </div>
            <input
              type="text"
              className="home-main-container2-box1-inputDescription"
              placeholder="Опис товару"
              value={inputDescription}
              onChange={inputDescriptionChange}
            />
            <select
              name="category"
              id=""
              required
              className={`home-main-container2-box1-select ${selectCategory === "" ? "placeholder-active" : ""}`}
              value={selectCategory}
              onChange={selectCategoryChange}
            >
              <option value="" disabled selected hidden>
                Категорія товару
              </option>
              <option value="Транспорт">Транспорт</option>
              <option value="Продукти">Продукти</option>
              <option value="Здоров’я">Здоров’я</option>
              <option value="Алкоголь">Алкоголь</option>
              <option value="Розваги">Розваги</option>
              <option value="Все для дому">Все для дому</option>
              <option value="Техніка">Техніка</option>
              <option value="Комуналка, зв’язок">Комуналка, зв’язок</option>
              <option value="Спорт, хобі">Спорт, хобі</option>
              <option value="Навчання">Навчання</option>
              <option value="Інше">Інше</option>
            </select>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="0,00"
                className="home-main-container2-box1-sum"
                value={inputSum}
                onChange={inputSumChange}
              />
              <img src={calculator} alt="" className="input-icon" />
            </div>
            <button className="home-main-container2-box1-btnEnter" onClick={createCard}>
              ввести
            </button>
            <button className="home-main-container2-box1-btnClear">
              Очистити
            </button>
          </div>
          <div className="home-main-container2-box2">
            <div className="home-main-container2-box2-container1">
              <div className="home-main-container2-box2-container1-tableScrolling">
                <table class="table">
                  <thead>
                    <tr>
                      <th>ДАТА</th>
                      <th>ОПИС</th>
                      <th>КАТЕГОРІЯ</th>
                      <th>СУМА</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="trContent">
                      <td className="tableText">05.09.2019</td>
                      <td className="tableText">Метро</td>
                      <td className="tableText">Транспорт</td>
                      <td className="tableSum">- 30.00 грн.</td>
                      <td>
                        <button className="tableBtn">
                          <img src={deleteBtn} alt="" />
                        </button>
                      </td>
                    </tr>
                    <tr className="trContent">
                      <td className="tableText">05.09.2019</td>
                      <td className="tableText">Банани</td>
                      <td className="tableText">Продукти</td>
                      <td className="tableSum">- 50.00 грн.</td>
                      <td>
                        <button className="tableBtn">
                          <img src={deleteBtn} alt="" />
                        </button>
                      </td>
                    </tr>
                    {cardGroups.map((cardGroups) =>{
                      return(
                        <tr className="trContent" key={cardGroups.id}>
                      <td className="tableText">{cardGroups.date}</td>
                      <td className="tableText">{cardGroups.description}</td>
                      <td className="tableText">{cardGroups.category}</td>
                      <td className="tableSum">- {cardGroups.sum} грн.</td>
                      <td>
                        <button className="tableBtn" onClick={() => deleteCard(cardGroups.id)}>
                          <img src={deleteBtn} alt="" />
                        </button>
                      </td>
                    </tr>
                      )
                    })}
                    {Array.from({ length: 9 }).map((_, index) => (
                      <tr key={index} className="trContent tableNull">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="home-main-container2-box2-container2">
              <table className="table-month">
                <thead className="table-month-head">
                  <tr className="table-month-line">
                    <th colSpan={2} className="table-month-name">зведення</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-month-line">
                    <td className="table-month-text">листопад</td>
                    <td className="table-month-text">10 000.00</td>
                  </tr>
                  <tr className="table-month-line">
                    <td className="table-month-text">жовтень</td>
                    <td className="table-month-text">30 000.00</td>
                  </tr>
                  <tr className="table-month-line">
                    <td className="table-month-text">вересень</td>
                    <td className="table-month-text">30 000.00</td>
                  </tr>
                  <tr className="table-month-line">
                    <td className="table-month-text">серпень</td>
                    <td className="table-month-text">20 000.00</td>
                  </tr>
                  <tr className="table-month-line">
                    <td className="table-month-text">липень</td>
                    <td className="table-month-text">15 000.00</td>
                  </tr>
                  <tr className="table-month-line">
                    <td className="table-month-text">червень</td>
                    <td className="table-month-text">18 000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
