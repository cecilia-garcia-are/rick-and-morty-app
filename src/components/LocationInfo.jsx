import'./styles/LocationInfo.css'

const LocationInfo = ({ location }) => {

    return(
        <article className="location-info">
            <h2 className='tittle-info'>{location?.name}</h2>
            <ul className='list-info'>
                <li className='location__item'>
                    <span className='location__label'>Type:</span>
                    <span className='location__item-value'>{location?.type}</span>
                
                </li>

                <li className='location__item'>
                    <span className='location__label'>Dimension:</span>
                    <span className='location__item-value'>{location?.dimension}</span>
                    
                    </li>

                <li className='location__item'>
                    <span className='location__label'>Population</span>
                    <span className='location__item-value'>{location?.residents.length}</span>
                    
                    </li>
            </ul>
        </article>
    )
}

export default LocationInfo