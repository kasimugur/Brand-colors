import { useContext } from "react"
import MainContext from "../contetx/MainContext"
import { GrLink, GrDownload, GrClose } from "react-icons/gr";


export default function Download() {

const {selectedBrands, setSelectedBrands} = useContext(MainContext)
  return (
    <>
      <div className="download">
      <div className="action">
        <a href="">
          <GrDownload />
        </a>
        <button>
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