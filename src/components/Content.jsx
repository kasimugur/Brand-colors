import Search from "./Search";
import BrandData from "../brands.json"


export default function Content() {
  const brandsArray = []
  Object.keys(BrandData).map(key => {
    brandsArray.push(BrandData[key])
  })

console.log(brandsArray)

  return (<>
    <main className="content">
      <header className="header">
        <Search />
      </header>

      <section className="brand">

      </section>
    </main>
  </>)
}