import { useModal } from '../lib'
import { useEffect } from 'react'

// import { close } from '../lib';
// import { thumbUp } from '../lib';

function Exemple() {
  const { toggle, escToClose } = useModal()

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
    </>
  )
}

export default Exemple
