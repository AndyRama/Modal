import { useState } from 'react'

//custom modal hook
function useModal() {
  // Modal's state
  const [isOpen, setIsOpen] = useState(false)

  // Close modal when open
  function toggle() {
    setIsOpen(!isOpen)
  }

  const escToClose = (e) => {
    if (e.keyCode === 27) {
      toggle()
    }
  }

  return {
    isOpen,
    toggle,
    escToClose,
  }
}

export default useModal
