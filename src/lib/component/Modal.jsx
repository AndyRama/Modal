import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'

function Modal({
  modal,
  close,
  x,
  icon,
  hideIcon,
  title,
  hideTitle,
  hideHeader,
  msgL1,
  msgL2,
  hideMsgL2,
  hideFooter,
  btn1,
  hideBtn1,
  btn2,
  hideBtn2,
  redirect,
  disableBtn1 = '',
  disableBtn2 = '',
  hideBtnClose,
  showSpinner,
  modalClass,
  spinnerHtml,
  closeClass,
  fadeDuration = 0,
  // fadeDelai,
}) {
  if (disableBtn1) disableBtn1 = 'disabled'
  if (disableBtn2) disableBtn2 = 'disabled'
  if (!modalClass) modalClass = ''
  if (!closeClass) closeClass = ''

  const [spinner, setSpinner] = useState(showSpinner)

  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        setSpinner(false)
      }, 2500)
    }
    //value of state is used here therefore must be passed as a dependency
  }, [spinner])

  return createPortal(
    <>
      {modal && (!spinner || spinner === false) ? (
        <main
          autoFocus
          className={`modal ${modalClass}`}
          style={{ animationDelay: `${fadeDuration}ms` }}
          role="main"
          // close modal when click outside of it
          onClick={() => {
            close()
          }}
        >
          <section
            className="modal-container"
            role="dialog"
            aria-label="pop up message"
            id="modal-component"
            aria-modal="true"
            tabIndex={-1}
            aria-labelledby="dialogTitle"
            aria-describedby="dialogDescription"
          >
            {hideBtnClose ? null : (
              <button
                className={`modal-container--close ${closeClass}`}
                aria-label="Close"
                onClick={close}
              >
                <img src={x} alt="close icon" />
              </button>
            )}
            {hideHeader ? null : (
              <>
                <header className="modal-header">
                  {hideIcon ? null : (
                    <img className="modal-header--icon" src={icon} alt={icon} />
                  )}
                  {hideTitle ? null : (
                    <h2
                      tabIndex="0"
                      className="modal-header--title"
                      id="dialogTitle"
                    >
                      {title}
                    </h2>
                  )}
                </header>
                <hr className="modal-header--separator" />
              </>
            )}

            <main className="modal-main--msg">
              <p
                tabIndex="0"
                id="dialogDescription"
                className="modal-main--msgL1"
              >
                {msgL1}
              </p>
              {hideMsgL2 ? null : (
                <p
                  tabIndex="0"
                  id="dialogDescription"
                  className="modal-main--msgL2"
                >
                  {msgL2}
                </p>
              )}
            </main>
            {hideFooter ? null : (
              <>
                <hr className="modal-footer--separator" />
                <footer className="modal-footer">
                  {hideBtn1 ? null : (
                    <button
                      className={`modal-footer--btn1 ${disableBtn1}`}
                      onClick={close}
                    >
                      {btn1}
                    </button>
                  )}
                  {hideBtn2 ? null : (
                    <button
                      className={`modal-footer--btn2 ${disableBtn2}`}
                      onClick={redirect}
                    >
                      {btn2}
                    </button>
                  )}
                </footer>
              </>
            )}
          </section>
        </main>
      ) : (
        <div>
          {spinner && modal && !spinnerHtml ? (
            <div className="modal-spinner--time">
              <div className="spinner-box">
                <div className="loading-icon"></div>
              </div>
            </div>
          ) : spinner && modal && spinnerHtml ? (
            <div dangerouslySetInnerHTML={{ __html: spinnerHtml }}></div>
          ) : null}
        </div>
      )}
    </>,
    document.body
  )
}

/**
 * Modal PROPTYPES
 */
Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  x: PropTypes.string,
  icon: PropTypes.string,
  hideIcon: PropTypes.bool,
  title: PropTypes.string,
  hideTitle: PropTypes.bool,
  msgL1: PropTypes.string.isRequired,
  msgL2: PropTypes.string,
  hideMsgL2: PropTypes.bool,
  btn1: PropTypes.string,
  disableBtn1: PropTypes.bool,
  hideBtn1: PropTypes.bool,
  btn2: PropTypes.string,
  redirect: PropTypes.func,
  disableBtn2: PropTypes.bool,
  hideBtn2: PropTypes.bool,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  hideBtnClose: PropTypes.bool,
  modalClass: PropTypes.string,
  closeClass: PropTypes.string,
  showSpinner: PropTypes.bool,
  spinnerHtml: PropTypes.string,
  fadeDuration: PropTypes.number,
}

export default Modal
