import './styles/Alert.css'


const NoCards = () => {
  return (
    <div className="alert">
      <label>
        <input type="checkbox" class="alertCheckbox" autocomplete="off" />
        <div class="alert error">
          <span class="alertClose">X</span>
          <span class="alertText">
            <h1>Attention</h1>
            No population 😢
            <br class="clear" />
          </span>
        </div>
      </label>
    </div>
  );
};

export default NoCards;