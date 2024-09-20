// SideBar.js
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";
import "./SideBar.css";

export default function SideBar({ setSwitchKey }) {
  const [show, setShow] = useState(true);

  return (
    <div className={show ? "closedSide" : "openedSide"}>
      <div className="main" onClick={() => setShow(!show)}>
        <FaBars className="icon" />
      </div>
      <ul>
        <li>
          <a onClick={() => setSwitchKey(0)}>
            <FaHome />
            {show ? "" : " Home"}
          </a>
        </li>
        <li>
          <a onClick={() => setSwitchKey(1)}>
            {" "}
            <FaUser />
            {show ? "" : "About me"}
          </a>
        </li>
        <li>
          <a onClick={() => setSwitchKey(2)}>
            <FaCertificate />
            {show ? "" : "My Certificate"}
          </a>
        </li>
        <li>
          <a onClick={() => setSwitchKey(3)}>
            {" "}
            <FaProjectDiagram />
            {show ? "" : "My Projects"}
          </a>
        </li>
      </ul>
    </div>
  );
}
