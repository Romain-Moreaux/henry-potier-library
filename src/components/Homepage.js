import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'
import Product from './Product'
import axios from 'axios'
import { newId } from '../helpers'
import books from '../assets/books.json'

const useStyles = createUseStyles((theme) => ({
  homepage: {
    ...theme.displays.page,
    maxWidth: '100%',
  },
  container: {
    ...theme.wrappers.w1280,
    padding: `0 ${theme.spaces.md}`,
    marginTop: theme.spaces.xl,
    marginBottom: theme.spaces.xl,
  },
  productlist: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

function Homepage() {
  const classes = useStyles()
  const [originData, setOriginData] = useState(books)
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // Fetch datas once from api
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('fetch datas')
  //     setIsError(false)
  //     setIsLoading(true)

  //     try {
  //       const result = await axios('http://henri-potier.xebia.fr/books')
  //       setOriginData(result.data)
  //       setFilteredData(result.data)
  //     } catch (error) {
  //       setIsError(true)
  //     }

  //     setIsLoading(false)
  //   }

  //   fetchData()
  // }, [])

  useEffect(() => {
    setFilteredData(books)
  }, [])

  // exclude column list from filter
  const excludeColumns = ['cover', 'isbn']

  // handle change event of search input
  const handleChange = (value) => filterData(value)

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim()
    if (lowercasedValue === '') setFilteredData(originData)
    else {
      const filteredData = originData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        )
      })
      setFilteredData(filteredData)
    }
  }

  return (
    <div className={classes.homepage}>
      <Header setValues={handleChange} />
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
            filteredData.map((book) => <Product key={newId()} {...book} />)
          )}
        </div>
      </section>
    </div>
  )
}

export default Homepage
