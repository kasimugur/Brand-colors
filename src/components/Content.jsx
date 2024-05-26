import Search from "./Search";
import Brand from "./Brand";
import { useContext } from "react";
import MainContext from "../contetx/MainContext";


export default function Content() {

const {brands} = useContext(MainContext)

  return (<>
    <main className="content">
      <header className="header">
        <Search />
      </header>

      <section className="brands">
        {brands.map(brand => (<Brand brand={brand} />) )}
      </section>
    </main>
  </>)
}