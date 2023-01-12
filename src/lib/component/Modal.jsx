import { createPortal } from 'react-dom'
import './Modal.css'

function Modal({ close }) {
  return createPortal(
    <>
      <main
        className="modal"
        role="main"
        //close modal when click outside of it
        onClick={() => {
          close()
        }}
      >
        <section className="modal-container" role="dialog" id="modal-component">
          <button className="modal-container--close" OnClick={close}></button>
        </section>
      </main>
    </>
  )
}
export default Modal
