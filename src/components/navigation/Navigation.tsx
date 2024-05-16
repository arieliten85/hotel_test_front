import { useState } from "react";
import "./navigation.scss";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/rootReducer";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userLogin";
import {
  MapNavigationLinksProps,
  UseToggleProps,
} from "interfaces/navigation/navigationInterfaces";
export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <header className="header" data-test="header">
        <div className="navContainer">
          <div>
            <span className="logo" data-test="logo">
              DealDazzler
            </span>
            {user ? (
              <span className="mx-4 text-white m-0">Hi: {user.name}</span>
            ) : (
              ""
            )}
          </div>

          <nav>
            <ul
              className="linksContainer m-0 "
              style={isActive ? { transform: "translateX(0)" } : undefined}
            >
              <MapNavigationLinks
                setIsActive={setIsActive}
                location={location.pathname}
                user={user}
                handleLogout={handleLogout}
              />
            </ul>
          </nav>

          <UseToggle handleToggle={handleToggle} isActive={isActive} />
        </div>

        <div
          onClick={handleToggle}
          className={`overlay ${isActive ? "active" : ""}`}
        />
      </header>
    </>
  );
};

const MapNavigationLinks = ({
  setIsActive,
  location,
  user,
  handleLogout,
}: MapNavigationLinksProps) => {
  const focus = location === "/codes" ? "navLink focused p-2" : "navLink p-2";

  return (
    <>
      {user ? (
        <Link
          to="/codes"
          className={focus}
          data-test="link-codes"
          onClick={() => setIsActive(false)}
        >
          My codes
        </Link>
      ) : null}

      {!user ? (
        <Link
          to="/login"
          className="navLink p-2 btn btn-outline-dark"
          data-test="link-login"
        >
          Login
        </Link>
      ) : null}

      <Link
        to="/register"
        className="navLink p-2 btn btn-outline-dark"
        data-test="link-register"
      >
        Register
      </Link>

      {user && (
        <button
          className="btn btn-dark navLink p-2"
          onClick={handleLogout}
          data-test="link-logout"
        >
          Logout
        </button>
      )}
    </>
  );
};

const UseToggle = ({ handleToggle, isActive }: UseToggleProps) => {
  return (
    <button
      onClick={handleToggle}
      data-test="button-toggle"
      className={`navToggle ${isActive ? "active" : null}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
