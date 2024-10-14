import { useEffect, useState } from 'react'
import './App.css'
import { Collection, Content, Copied, SideBar } from './components'
import MainContext from './contetx/MainContext'
import BrandsData from './brands.json'
import { Route,  Routes } from 'react-router-dom'

function App() {
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log(selectedBrands)
  }, [selectedBrands])



  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    copied,
    search,
    setSearch
  }
  useEffect(() => {
    setBrands(brandsArray.filter(
      brand => brand.title.toLowerCase().includes(search)))
  }, [search])
  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <SideBar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/collection/:slugs' element={<Collection />} />
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
