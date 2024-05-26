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
    setSelectedBrands,
    setCopied
  }
  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <SideBar />
        <Content />
      </MainContext.Provider>
    </>
  )
}

export default App
