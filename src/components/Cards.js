import React from "react";

//componentes
import Card from "./Card";

//Imagenes
import Imagen1 from "../assets/image1.jpg";
import Imagen2 from "../assets/image2.jpg";
import Imagen3 from "../assets/image3.jpg";
import Imagen4 from "../assets/image4.jpg";
import Imagen5 from "../assets/image5.jpg";
import Imagen6 from "../assets/image6.jpg";
import Imagen7 from "../assets/image7.jpg";
import Imagen8 from "../assets/image8.jpg";
import Imagen9 from "../assets/image9.jpg";
import Imagen10 from "../assets/image10.jpg";

const cards = [
  {
    id: 1,
    title: "Curso De Fundamentos De HTML",
    image: Imagen1,
    url: "https://www.youtube.com/watch?v=-oK6zL01fNM&ab_channel=jonmircha",
    text: "Curso De HTML Desde Cero",
  },
  {
    id: 2,
    title: "Curso De Fundamentos De CSS",
    image: Imagen2,
    url: "https://www.youtube.com/watch?v=K3xmRF8ab1o&ab_channel=jonmircha",
    text: "Curso De CSS Desde Cero Primera Parte",
  },
  {
    id: 3,
    title: "Curso De Unidades Y Estilos CSS",
    image: Imagen3,
    url: "https://www.youtube.com/watch?v=p_lT7AgpEMU&ab_channel=jonmircha",
    text: "Curso De CSS Desde Cero Segunda Parte",
  },
  {
    id: 4,
    title: "Curso De Efectos Visuales Y Movimiento CSS",
    image: Imagen4,
    url: "https://www.youtube.com/watch?v=mVhoGXkDbMw&ab_channel=jonmircha",
    text: "Curso De CSS Desde Cero Tercera Parte",
  },
  {
    id: 5,
    title: "Curso De Flexbox CSS",
    image: Imagen5,
    url: "https://www.youtube.com/watch?v=AAtvnv6LNMk&list=PLvq-jIkSeTUbQc3dGsssp8lxAi5npMrys&ab_channel=jonmircha",
    text: "Curso De CSS Desde Cero Modulo Flexbox",
  },
  {
    id: 6,
    title: "Curso De CSS Grid",
    image: Imagen6,
    url: "https://www.youtube.com/watch?v=gCox2CqYvto&list=PLvq-jIkSeTUY628cyd9LVbXSXi2xG9mUl&ab_channel=jonmircha",
    text: "Curso De CSS Desde Cero Modulo Grid",
  },
  {
    id: 7,
    title: "Taller De Maquetación",
    image: Imagen9,
    url: "https://www.youtube.com/watch?v=ErtR07GLq54&ab_channel=jonmircha",
    text: "Taller De Maquetación Desde Cero",
  },
  {
    id: 8,
    title: "Curso De Javascript",
    image: Imagen7,
    url: "https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha",
    text: "Curso De Javascript Desde Cero",
  },
  {
    id: 9,
    title: "Curso De Webpack",
    image: Imagen10,
    url: "https://www.youtube.com/watch?v=-bp3q-YTr4Q&ab_channel=jonmircha",
    text: "Curso De Webpack Desde Cero",
  },
  {
    id: 10,
    title: "Curso De React",
    image: Imagen8,
    url: "https://www.youtube.com/watch?v=MPLN1ahXgcs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&ab_channel=jonmircha",
    text: "Curso De React Desde Cero",
  },
];

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={card.title}
              url={card.url}
              imageSource={card.image}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
