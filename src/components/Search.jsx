import { GrFormSearch } from "react-icons/gr";

export default function Search() {
  return( <>
  <div className="search">
    <div className="icon">
      <GrFormSearch />
       </div>
    <input type="text" placeholder="search brands" />
  </div>
  </>)
}