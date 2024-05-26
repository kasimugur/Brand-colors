import { useContext } from "react";
import { GrFormSearch } from "react-icons/gr";
import MainContext from "../contetx/MainContext";

export default function Search() {
  const { setSearch } = useContext(MainContext)



  return (<>
    <div className="search">
      <div className="icon">
        <GrFormSearch />
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search brands" />
    </div>
  </>)
}