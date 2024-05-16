import { CardProps } from "../../components/card/CardContainer";
import { CardItem } from "../../components/card/CardItem";
import { useState, useEffect } from "react";

import { FaTrash } from "react-icons/fa";

export default function MyCodeContainer() {
  const [cardsData, setCardsData] = useState<CardProps[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cardsData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCardsData(parsedData);
    }
  }, []);

  const handleDeleteCard = (id: string) => {
    const updatedCardsData = cardsData.filter((item) => item.id !== id);
    setCardsData(updatedCardsData);
    localStorage.setItem("cardsData", JSON.stringify(updatedCardsData));
  };

  const handleCodeReedm = (id: string) => {
    const updatedCardsData = cardsData.map((item) => {
      if (item.id === id) {
        return { ...item, redeemed: true }; // Marcar la tarjeta como canjeada
      }
      return item;
    });
    setCardsData(updatedCardsData);
    localStorage.setItem("cardsData", JSON.stringify(updatedCardsData));
  };

  if (cardsData.length === 0) {
    return <ListEmptyShow />;
  }

  return (
    <>
      <div className="wrapper">
        {cardsData.map((item) => (
          <div className=" position-relative" key={item.id}>
            <CardItem
              img={item.img}
              title={item.title}
              description={item.description}
              handleCodeReedm={() => handleCodeReedm(item.id)}
              generateCode={false}
              redeemed={item.redeemed}
            />
            <DeleteButton handleDeleteCard={() => handleDeleteCard(item.id)} />
          </div>
        ))}
      </div>
    </>
  );
}

function ListEmptyShow() {
  return (
    <div
      className="d-flex justify-content-center align-items-center  position-relative"
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#274957",
      }}
    >
      <div
        className="text-center text-white  "
        style={{
          backgroundImage:
            "url('https://cdn-icons-png.freepik.com/512/1077/1077170.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "200px",
          height: "200px",
        }}
      ></div>
      <h1
        style={{
          bottom: "10px",
          right: "20px",
        }}
        className="text-center fs-2 text-white  position-absolute "
      >
        List empty
      </h1>
    </div>
  );
}

interface DeleteButtonProps {
  handleDeleteCard: () => void;
}

const DeleteButton = ({ handleDeleteCard }: DeleteButtonProps) => {
  return (
    <button
      className="btn btn-danger position-absolute p-1"
      style={{
        top: "10px",
        right: "10px",
      }}
      onClick={handleDeleteCard}
    >
      <FaTrash />
    </button>
  );
};
