import React from 'react';
import './styles.scss';

const EnterTestModal = ({
  input,
  error,
  onChange,
  onSubmit,
  showModalHandler,
}) => (
  <div className="initialTest__enter_test_modal">
    <div className="contact__form">
      <form
        name="initialTest"
        onSubmit={(e) => {
          e && e.preventDefault();
          // onSubmit(e, showModalHandler);
        }}
      >
        <div className="contact__input">
          <label>
            Ime <span style={{ color: '#eb2f64', fontSize: '25px' }}>*</span>
          </label>
          <input
            name="firstname"
            type="text"
            // value={input.firstname}
            // onChange={onChange}
          />
          {/* {error && <div className="sign__error">{error.firstname}</div>} */}
        </div>
        <div className="contact__input">
          <label>
            Email <span style={{ color: '#eb2f64', fontSize: '25px' }}>*</span>
          </label>
          <input
            name="email"
            type="email"
            // value={input.email}
            // onChange={onChange}
          />
          {/* {error && (
            <div className="sign__error">
              {error.email || error.serverError}
            </div>
          )} */}
        </div>
        <div className="contact__input">
          <label>Telefon</label>
          <input
            name="phone"
            type="text"
            // value={input.title}
            // onChange={onChange}
          />
        </div>
        <div className="contact__input">
          <button>Zapocni test</button>
        </div>
      </form>
    </div>
  </div>
);
export default EnterTestModal;
