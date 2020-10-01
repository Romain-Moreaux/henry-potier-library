import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'
import Product from './Product'
import useFetchApi from './useFetch'

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
  statusIndicator: {
    fontSize: theme.texts.lg,
    textAlign: 'center',
    fontWeight: 600,
  },
}))

function Homepage() {
  const classes = useStyles()
  const [filteredData, setFilteredData] = useState([])

  const [{ data, isLoading, isError }] = useFetchApi(
    'http://henri-potier.xebia.fr/books',
    []
  )

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  // exclude column list from filter
  const excludeColumns = ['cover', 'isbn']

  // handle change event of search input
  const handleChange = (value) => filterData(value)

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim()
    if (lowercasedValue === '') setFilteredData(data)
    else {
      const filteredData = data.filter((item) => {
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
            <p className={classes.statusIndicator}>
              Une erreur est survenue, veuillez rafraîchir votre page...
            </p>
          )}
          {isLoading ? (
            <p className={classes.statusIndicator}>Ressources en chargement</p>
          ) : (
            filteredData.map((book, i) => <Product key={i} {...book} />)
          )}
        </div>
      </section>
    </div>
  )
}

export default Homepage
