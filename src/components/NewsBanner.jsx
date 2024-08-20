import "./NewsBanner.css";
import NewsComponent from "./NewsComponent";

function NewsBanner() {
  return (
    <section id="news-banner">
      <NewsComponent
        title="Guerri explica por que acompanhou FURIA em Cologne"
        description="Após seis anos como coach, veterano foi promovido a head de esports"
        image="https://img-cdn.hltv.org/gallerypicture/SnUAZeF02_zuwY_LAN2STx.jpg?ixlib=java-2.1.0&w=1200&s=b87d9d29dbe0dce092cf170d2c75ca3e"
        link="https://www.dust2.com.br/noticias/51885/guerri-explica-por-que-acompanhou-furia-em-cologne"
      />
      <NewsComponent
        title="FURIA pode apresentar nível muito mais alto, diz Sidde"
        description="Treinador falou da campanha na IEM Cologne e avaliou desempenho individual da equipe"
        image="https://img-cdn.hltv.org/gallerypicture/d2eBB0uiTtJ8VgSrJIhhWW.jpg?ixlib=java-2.1.0&w=1200&s=259a7cedc081d50cdb1446e650ae883e"
        link="https://www.dust2.com.br/noticias/51667/furia-pode-apresentar-nivel-muito-mais-alto-diz-sidde"
      />
      <NewsComponent
        title="FURIA perde para Liquid e está fora da IEM Cologne"
        description="Equipe brasileira perdeu por 2 a 0"
        image="https://img-cdn.hltv.org/gallerypicture/L3jVdJaPi5bFpcqw0NEP9q.jpg?ixlib=java-2.1.0&w=1200&s=2a0beb98fc7a5f8e225df9a48047e4a3"
        link="https://www.dust2.com.br/noticias/51661/furia-perde-para-liquid-e-esta-fora-da-iem-cologne"
      />
    </section>
  );
}

export default NewsBanner;
