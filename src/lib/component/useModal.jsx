import { useState } from 'react'
import PropTypes from 'prop-types'

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
      setIsOpen(false)
    }
  }

  return {
    isOpen,
    toggle,
    escToClose,
  }
}

/**
 * useModal PROPTYPES
 */
useModal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.bool,
  escToClose: PropTypes.bool,
}

export default useModal
