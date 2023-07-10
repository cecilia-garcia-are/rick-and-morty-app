import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import Pagination from './components/Pagination'
import Loading from './components/Loading'
import Alert from './components/Alert'
import NoCards from './components/NoCards'

function App() {

  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState (getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] =useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [residentsPerPage] = useState(8);
  const totalCards = location?.residents.length

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)

    axios
      .get(url)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
        })
      .catch(err => {
        console.error(err)
        setHasError(true)
        })

        .finally(() => {
          setIsLoading(false)
        })
  }, [idLocation])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <header className='header'></header>
     
      <FormLocation
        setIdLocation={setIdLocation}
        setCurrentPage = {setCurrentPage}
      />
      {
        isLoading
        ? (<Loading/>)
        :(
          hasError
          ? (<Alert/>)
          : (
            <>
            <LocationInfo
          location={location}
        />
         
        {totalCards > 0 
        ?(
          <>
           <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(
        location?.residents.length / residentsPerPage
      )}
      onPageChange={handlePageChange}
      />
        
        <div className='resident-container'>
          {
            location?.residents
            .slice(
              (currentPage - 1) * residentsPerPage,
              currentPage * residentsPerPage
            )
            .map(url => (
              <ResidentCard
              key = {url}
              url = {url}
              />
            ) )
          }
        </div>
          </>
        )
        : (
          <NoCards/>
        )

        }
        </>
  
          )
        )
        
      }
      

    </div>
  )
}

export default App