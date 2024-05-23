import { useEffect, useState } from "react";
import "./card.scss";
import apiData from "../../api/promocionesApi.json";
import { generateCode } from "../../utils/generateCode.";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CardItem } from "./CardItem";
import { CardProps } from "interfaces/card/cardInterfaces";

export function CardContainer() {
  const [cardsData, setCardsData] = useState<CardProps[]>([]);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("cardsData");
  //   if (storedData) {
  //     setCardsData(JSON.parse(storedData));
  //   }
  // }, []);

  const handleGenerateCode = (item: CardProps) => {
    const code = generateCode();
    const updatedCardsData = [
      ...cardsData,
      {
        id: item.id,
        img: item.img,
        title: item.title,
        description: item.description,
        redeemed: item.redeemed,
        code,
      },
    ];

    setCardsData(updatedCardsData);
    toast.success("Code generated successfullys");
  };

  useEffect(() => {
    if (cardsData.length > 0) {
      localStorage.setItem("cardsData", JSON.stringify(cardsData));
    }
  }, [cardsData]);

  return (
    <>
      <div data-test="toast-generate-code">
        <ToastContainer />
      </div>

      <div className="wrapper">
        {apiData.map((item) => (
          <CardItem
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            handleGenerateCode={() => handleGenerateCode(item)}
            generateCode={true}
          />
        ))}
      </div>
    </>
  );
}
