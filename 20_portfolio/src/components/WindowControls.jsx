import useWindowStore from "@store/window";
import PropTypes from "prop-types";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

WindowControls.propTypes = {
  target: PropTypes.any.isRequired,
};

export default WindowControls;
