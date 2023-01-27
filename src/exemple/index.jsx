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
        escapeClose={true}
        // hideBtnClose={true} // decomment to hide btnClose
        // modalClass="custom-modal-class"
        // closeClass="custom-close-class"
        showSpinner={true}
        // spinnerHtml='<div className="Myclass"></div>'
        // fadeDuration={10}
        // fadeDelay={fadeDelay}

        // ADDITIONAL (optional)
        icon={check} // replace with the name of your import
        title="Confirmation" // replace with any string
        msgL1="Modal plugin" // replace with any string
        msgL2="successfully installed" // replace with any string
        btn1="Back" // replace with any string
        btn2="Redirect" // replace with any string
        // redirect={goTo}              // !!! NEEDS APP ROUTING

        // DISABLE (optional)
        // disableBtn1={true}           // decomment to disable btn1
        // disableBtn2={true}           // comment to enable btn2

        // HIDE (optional)
        // hideBtnClose={true}          // decomment to hide btnClose
        // hideIcon={true}              // decomment to hide icon
        // hideTitle={true}             // decomment to hide title
        // hideMsgL2={true}             // decomment to hide msgL2
        // hideBtn1={true}              // decomment to hide btn1
        // hideBtn2={true}              // decomment to hide btn2
        // hideHeader={true}            // decomment to hide header
        // hideFooter={true}            // decomment to hide footer
      />
    </>
  )
}

export default Exemple
