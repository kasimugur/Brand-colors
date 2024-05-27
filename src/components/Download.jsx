import { useContext } from "react"
import MainContext from "../contetx/MainContext"
import { GrLink, GrDownload, GrClose } from "react-icons/gr";


export default function Download() {

const {selectedBrands} = useContext(MainContext)
  return (
    <>
      <div className="download">
      <div className="action"></div>
      <div className="selected">
      {selectedBrands.length} brands collected
      <button> <GrClose /> </button>
      </div>
      </div>
    </>
  )
}