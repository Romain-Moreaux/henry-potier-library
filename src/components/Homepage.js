import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'
import Product from './Product'
import axios from 'axios'
import { newId } from '../helpers'

const useStyles = createUseStyles((theme) => ({
  homepage: {
    ...theme.displays.page,
    maxWidth: '100%',
  },
  container: {
    ...theme.wrappers.w1280,
    padding: `0 ${theme.spaces.md}`,
  },
  productlist: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

function Homepage() {
  const classes = useStyles()

  const [data, setData] = useState([])
  const [url, setUrl] = useState('http://henri-potier.xebia.fr/books')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetch datas')
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  console.log('data', data)
  return (
    <div className={classes.homepage}>
      <Header />
      <section className={classes.container}>
        <div className={classes.productlist}>
          {isError && (
            <div>
              Une erreur est survenue, veuillez rafraîchir votre page...
            </div>
          )}
          {isLoading ? (
            <p>Ressources en chargement</p>
          ) : (
            data.map((book) => <Product key={newId()} {...book} />)
          )}
        </div>
      </section>
    </div>
  )
}

export default Homepage
