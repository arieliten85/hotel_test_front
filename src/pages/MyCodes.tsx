import MyCodeContainer from "../components/myCodes/MyCodeContainer";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function MyCodes() {
  return (
    <div>
      <h2 className="text-center p-2 fs-1 pb-5">My codes</h2>
      <ButtonToHome />
      <MyCodeContainer />
    </div>
  );
}

function ButtonToHome() {
  return (
    <>
      <Link
        to={"/"}
        className="btn btn-dark text-white mt-3 position-absolute p-1"
        style={{
          top: "120px",
          right: "30px",
        }}
      >
        <FaArrowLeft /> Back
      </Link>
    </>
  );
}
