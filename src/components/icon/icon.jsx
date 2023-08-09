import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
import "./icon.css"
export default function Icon({ name }) {
  if (name === "circle") {
    return (
      <div className="icon-container">
        <FaRegCircle className="icon" />
      </div>
    );
  } else if (name === "cross") {
    return (
      <div className="icon-container">
        <FaTimes className="icon" />
      </div>
    );
  } else {
    return (
      <div className="icon-container">
        <FaPen className="icon" />
      </div>
    );
  }
}
