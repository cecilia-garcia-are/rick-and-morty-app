import './styles/Alert.css'


const Alert = () => {
  return (
    <div className="alert">
      <label>
        <input type="checkbox" class="alertCheckbox" autocomplete="off" />
        <div class="alert error">
          <span class="alertClose">X</span>
          <span class="alertText">
            <h1>Error</h1>
            Hey! You must provide an id from 1 to 126. Try again 😢
            <br class="clear" />
          </span>
        </div>
      </label>
    </div>
  );
};

export default Alert;
