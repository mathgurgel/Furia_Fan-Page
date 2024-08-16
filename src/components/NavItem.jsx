import "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem(props) {
  let section = props.sectionName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let path = `/${section}`;
  if (section == "4fun") {
    path = "/forfun";
  }

  return (
    <>
      <Link to={path} className="link">
        <p className="nav-item">{props.sectionName}</p>
      </Link>
    </>
  );
}

export default NavItem;
