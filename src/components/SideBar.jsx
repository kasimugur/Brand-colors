import { useState } from "react"
import Modal from "react-modal"
import { GrClose } from "react-icons/gr";

export default function SideBar(props) {

  const [modalIsopen, setModalIsopen] = useState(false)


  const toggleModal = () => {
    setModalIsopen(!modalIsopen) // true ise false ,false ise true yapar
  }

  // ikinci alternatif
  // const closeModal =  () => {setModalIsopen(false)}
  // const openModal =  () => {setModalIsopen(true)}



  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a href="">brand <b>colors</b></a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated by @brandcolors and friends
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal}>
                About BrandColors
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsopen}
        onRequestClose={toggleModal}
        className="about-Modal"
        overlayClassName="about-Overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
          <GrClose />
        </button>
        <h3>About BrandColors</h3>
        <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference
          for the brand color codes that are needed most ofte.</p>
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design dEpot,
          Tuts+, and over 2 million pageviews. There are now over 600 brand with
          1600 colors and the collection is always growind.
        </p>
      </Modal>
    </>
  )
}