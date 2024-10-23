import { useContext, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import MainContext from "../contetx/MainContext"
import LazyLoad from "react-lazyload"
import { GrPrevious } from "react-icons/gr";
import Brand from "./Brand";
import Download from "./Download";
import Loader from "./Loader";

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



  return (
    <>
      <main className="content">
        <header className="header">
          <Link to="/" onClick={clearSelectedBrands} >
            <button className="back-btn"> <GrPrevious /> </button>
          </Link>

          {selectedBrands.length !== 0 && <Download />}
        </header>

        <section className="brands">
          {selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            if (!brand) {
              console.warn(`Brand not found for slug: ${slug}`); // Hata mesajı
              return null; // Eğer marka bulunamazsa null döndür
          }
            
            return (
              < LazyLoad
                once={true}
                overflow={true}
                key={brand.slug}
                placeholder={<Loader />} >
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