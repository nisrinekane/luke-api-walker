import React, { useEffect } from 'react'
import axios from 'axios'
import  {useParams } from 'react-router-dom'


function Person({ results, setResults}) {
  const { id } = useParams();
    useEffect(() => {
      console.log(`https://swapi.dev/api/people/${id}/`)
        axios
            .get(`https://swapi.dev/api/people/${id}/`)
            .then(res => { setResults(res.data); })
            .catch(err => console.log(err))

    }, [id])
    return (
        <div style={{margin: '0 25vh', width: '800px'}}>
          <h1>{results.name}</h1>
          <p><h3>Height:</h3>{results.height}</p>
          <p><h3>Mass:</h3>{results.mass}</p>
          <p><h3>Hair color:</h3>{results.hair_color}</p>
          <p><h3>Skin color:</h3>{results.skin_color}</p>
        </div>
    )
}

export default Person