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
