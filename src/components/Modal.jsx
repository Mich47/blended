import PropTypes from 'prop-types';

import css from './Modal.module.css';
export const Modal = ({ avatar: { src, alt }, onCloseModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
        <button type="button" onClick={onCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  avatar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
