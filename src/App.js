import React from "react";
import Menu from "./components/Menu/index";
import dadosiniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
        url={dadosiniciais.categorias[0].videos[0].url}
        videoDescription={"Foda-se"}
      />

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[0]} />
    </div>
  );
}

export default App;
