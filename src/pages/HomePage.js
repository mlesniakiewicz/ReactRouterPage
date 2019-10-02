import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Nienacko",
    text:
      "Nienacko to nowe, wyjątkowe miejsce na kulinarnej mapie Krakowa. Kochamy prostą, włoską kuchnię opartą na oryginalnych składnikach. Uwielbiamy nowoczesną muzyką na żywo. Delektujemy się smakiem tradycyjnych koktajli i rozkoszujemy się autorskimi propozycjami. A najbardziej lubimy, gdy wszystkie te elementy okraszone pozytywną energią wzajemnie się przeplatają w jednym wyjątkowym miejscu. Boccanera ulokowana w sercu Krakowa, w urokliwym Zaułku Niewiernego Tomasza zachwyca bogactwem smaków i aromatów."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
