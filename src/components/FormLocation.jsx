import getRandomNumber from "../utils/getRandomNumber"

const FormLocation = ({setIdLocation}) => {

    const handleSubmit = e => {
      e.preventDefault()
      const inputValue = e.target.inputId.value.trim()
      if (inputValue === '' || inputValue === '0'){
        setIdLocation(getRandomNumber(126))
      }else{
        setIdLocation(inputValue)
      }
       e.target.inputId.value = '' //retorne a vacio
    }

    return(
        <form className="first__input" onSubmit={handleSubmit}>
            <input className="input__text" id="inputId" type="text" placeholder="Search for id"/>
            <button className='first-input-btn'style={{backgroundColor:'green', color: 'white'}}>Search</button>

        </form>



    )
}
 export default FormLocation