import { createPortal } from 'react-dom'

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
}) {
  return createPortal(
    <>
      {modal ? (
        <main
          autoFocus
          className="modal"
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
            <button
              className="modal-container--close"
              aria-label="Close"
              onClick={close}
            >
              <img src={x} alt="close icon" />
            </button>
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
          </section>
        </main>
      ) : null}
    </>,
    document.body
  )
}

export default Modal
