import './index.scss';
import classNames from 'classnames/bind';

const Button = props => {
  const {
    onClick,
    text
  } = props;

  const classes = classNames(
    "bg-button"
  );

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      { text }
    </button>
  )
};

export default Button;