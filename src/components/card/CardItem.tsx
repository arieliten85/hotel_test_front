import { Link } from "react-router-dom";

interface CustomCardProps {
  img: string;
  title: string;
  description: string;
  redeemed?: boolean;
  handleGenerateCode?: () => void;
  handleCodeReedm?: () => void;
  generateCode: boolean;
}
export function CardItem({
  title,
  img,
  description,
  redeemed,
  handleGenerateCode,
  handleCodeReedm,
  generateCode,
}: CustomCardProps) {
  return (
    <div className="card" data-test="card">
      <Link to={"/codes"}>
        <div className="card__body" data-test="card__body">
          <img src={img} className="card__image" alt={title} />
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>
      </Link>

      {generateCode === true ? (
        <button
          className="card__btn"
          onClick={handleGenerateCode}
          data-test="button-generate-code"
        >
          Generate code
        </button>
      ) : !redeemed ? (
        <button className="card__btn" onClick={handleCodeReedm}>
          Redeem code
        </button>
      ) : (
        <p className="bg-danger text-white text-center fs-4 p-2 mt-3">
          REDEEMED
        </p>
      )}
    </div>
  );
}
