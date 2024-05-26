import { useContext, useEffect } from "react"
import MainContext from "../contetx/MainContext"
import { getContrastYIQ } from "../helper"

export default function Copied({ color }) {
  const { copied, setCopied } = useContext(MainContext)
  useEffect(() => {
    const timeout = setTimeout(() => {
        setCopied(false)
      }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])
  return (
    <>
      <div className="copied"
        style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>

        Copied #{color} to Clipboard
      </div>
    </>
  )
}