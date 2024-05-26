import { GrFormSearch } from "react-icons/gr";

export default function Search(props) {
  return( <>
  <div className="search">
    <div className="icon">
      <GrFormSearch />
       </div>
    <input type="text" placeholder="search brands" />
  </div>
  </>)
}