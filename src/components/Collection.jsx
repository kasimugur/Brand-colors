import { useContext, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import MainContext from "../contetx/MainContext"
import LazyLoad from "react-lazyload"
import { GrPrevious } from "react-icons/gr";
import Brand from "./Brand";
import Download from "./Download";

export default function Collection() {
  const { slugs } = useParams()
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
  const navigate = useNavigate()

  const clearSelectedBrands = () => {
    setSelectedBrands([])
    navigate.push('/')
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
            <a className="back-btn"> <GrPrevious /> </a>
          </Link>

          {selectedBrands.length !== 0 && <Download />}
        </header>

        <section className="brands">
          {brands.map((slug, index) => {
          let brand = brands.find(brand => brand.slug === slug)
            return (
              < LazyLoad once={true} overflow={true} key={index} placeholder="loading.." >
                <Brand  brand={slug} />
               </LazyLoad>
            )
          }
          )}
        </section>
      </main >
    </>
  )
}