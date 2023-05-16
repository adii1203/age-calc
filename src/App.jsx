// import image from '../design/icon-arrow.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <div>
            <label htmlFor="day">DAY</label>
            <input type="text" name="day" id="day" />
          </div>
          <div>
            <label htmlFor="month">MONTH</label>
            <input type="text" name="month" id="month" />
          </div>
          <div>
            <label htmlFor="year">YEAR</label>
            <input type="text" name="year" id="year" />
          </div>

          <div className="line"></div>
          <div className="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </div>
        </div>
        <div className="result">
          <div className="years">
            <p>
              <span>- -</span> Years
            </p>
          </div>
          <div className="month">
            <p>
              <span>- -</span> Months
            </p>
          </div>
          <div className="days">
            <p>
              <span>- -</span> Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
