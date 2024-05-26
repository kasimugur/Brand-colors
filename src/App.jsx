import { useEffect, useState } from 'react'
import './App.css'
import { Content, Copied, SideBar } from './components'
import MainContext from './contetx/MainContext'
import BrandsData from './brands.json'

function App() {
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    console.log(selectedBrands)
  }, [selectedBrands])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands
  }
  return (
    <>
      <MainContext.Provider value={data}>
        <SideBar />
        <Content />
        {copied && <Copied color={copied} />}
      </MainContext.Provider>
    </>
  )
}

export default App
