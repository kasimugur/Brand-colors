import { useContext, useEffect, useState } from "react"
import MainContext from "../contetx/MainContext"
import { GrLink, GrDownload, GrClose } from "react-icons/gr";


export default function Download() {

  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext)
  const [downloadUrl, setDownloadUrl] = useState()


  const getLink = () => {
    prompt("Here\'s the URL to share",
      `http://localhost:3000/${selectedBrands.join(',')}`)
  }
  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = ''
      selectedBrands.map(slug => {
        let brand = brands.find(brand => brand.slug === slug)
        brand.colors.map((color, index) => {
          output += `--${slug}-${index}: #${color};\n`
        })
      })
      const blob = new Blob([output])
      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)
      return () => {
        URL.revokeObjectURL(url)
        setDownloadUrl('')
      }
    }
  }, [selectedBrands])

  return (
    <>
      <div className="download">
        <div className="action">
          <a download="test.css" href={downloadUrl}>
            <GrDownload />
          </a>
          <select onChange={changeCss}>
            <option value="css">CSS</option>
            <option value="scss">SCSS</option>
            <option value="less">LESS</option>
          </select>
          <button onClick={getLink}>
            <GrLink />
          </button>
        </div>

        <div className="selected" onClick={() => setSelectedBrands([])}>
          <GrClose />
          {selectedBrands.length} brands collected
        </div>
      </div>
    </>
  )
}