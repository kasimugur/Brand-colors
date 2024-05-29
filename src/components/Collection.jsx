import { useContext, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import MainContext from "../contetx/MainContext"
import LazyLoad from "react-lazyload"


export default function Collection() {
  const { slugs } = useParams()
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
  const history = useHistory()

  const clearSelectedBrands = () => {
    setSelectedBrands([])
    history.push('/')
  }


  useEffect(() => {
    setSelectedBrands(slugs.split(','))
  }, [])

  console.log("--------params", slugs)


  return (
    <>
      <main className="content">
        <header className="header">
        <Link to="/" onClick={clearSelectedBrands} >
<button className="back-btn"> All brand </button>
        </Link>

          {selectedBrands.length !== 0 && <Download />}
        </header>

        <section className="brands">
          {brands.map((slug, index) => {
            let brand = brands.find(brand => brand.slug === slug)
            return (
              < LazyLoad once={true} overflow={true} key={index} placeholder="loading.." >
                <Brand brand={brand} />
              </LazyLoad>
            )
          }
          )}
        </section>
      </main >
    </>
  )
}