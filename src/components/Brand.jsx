import { useContext } from "react";
import { getContrastYIQ } from "../helper";
import MainContext from "../contetx/MainContext";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Brand({ brand }) {

  const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext)

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
    } else {
      setSelectedBrands([...selectedBrands, brand.slug])
    }
  }

  const setColor = (color) => {
    setCopied(color)
  }

  return (<>
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected '
      : ''}`}>
      <h5 onClick={toggleSelected} >{brand.title}</h5>
      <div className="brand-color">
        {brand.colors.map((color, index) => (
          <CopyToClipboard
          key={index}
          text={color}
          onCopy={() => setColor(color)}
          >
            <span
            style={{
            '--bgColor': `#${color}`,
            '--textColor': `${getContrastYIQ(color)}`
          }}>
            {color}
            </span>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  </>)
}