import { useModal } from '../lib'
import { useEffect } from 'react'

import { close } from '../lib'
import { check } from '../lib'
import { Modal } from '../lib'

function Exemple() {
  const { isOpen, toggle, escToClose } = useModal()

  // detects when escape key pressed to close the modal
  // and stops event propagation when occured
  useEffect(() => {
    window.addEventListener('keydown', escToClose)
    return () => window.removeEventListener('keydown', escToClose)
  })

  return (
    <>
      <button className="open-modal-btn" onClick={toggle}>
        Open Modal
      </button>
      <Modal
        // MINIMAL (required)
        modal={isOpen} // useModal hook
        close={toggle} // useModal hook
        x={close} // replace with the name of your import
        // ADDITIONAL (optional)
        icon={check} // replace with the name of your import
      ></Modal>
    </>
  )
}

export default Exemple
