
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default function CreateMovies() {
  const [movie, setMovie] = useState([])
  const [error, setError] = useState(null)
  const [title, setTitle] = useState ('')

  const handleTitleChange = (event) => {
      setTitle(event.target.value)
  }
  
  const createMovies = async() => {

    try {
      const response = await axios.post('/api/movies', { movie })
      console.log(response.data)
      if (response?.data?.success){
        setMovie(response.data.data)
      }
    } catch (err) {
        setError(err?.response?.data?.error)
    }
    }
    
  const handleSubmit = async (event) => {
    event.preventDefault()
    await createMovies()
}


    const getMovies = async() => {

        try {
          const response = await axios.get('/api/movies')
          console.log(response.data)
          if (response?.data?.success){
            setMovie(response.data.data)
          }
        } catch (err) {
            setError(err?.response?.data?.error)
        }
          
        }

  useEffect(() => {
    getMovies()
  }, [])

  if (error) {
      <p>Noe gikk galt. {error}</p>
  }

  return (
    <>
    <Head>
      <title>Add movies</title>
    </Head>
    <Layout>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Add your favorit movie</label>
            <input type='text' name='title' id="title"value={title} onChange={handleTitleChange} />
            <button type='submit'>Send</button>
        </form>
      <section>
        {JSON.stringify(movie)}
      </section>
    </Layout>
    </>
  )
}