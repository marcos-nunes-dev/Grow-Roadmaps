import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import SliderIconOne from '../../static/icons/undraw_collection_u2np.svg';
import SliderIconTwo from '../../static/icons/undraw_open_source_11qxw.svg';
import SliderIconThree from '../../static/icons/undraw_upgrade_06a0.svg';

const SliderAboutWrapper = styled.div`
  height: 100vh;
  width: 35vw;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  height: 100%;
`;

const CarouselWrapper = styled.div`
  height: 100%;
  div {
    height: 100%;
    width: 100%;
  }
  .ant-carousel .slick-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #211c3c;
  }
`;

const TabWrapper = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  svg{
    width: 80%;
    height: auto;
  }
  h1{
    color: #fff;
    margin-top: 25px;
  }
  h3{
    color: #fff;
    font-weight: 100;
    text-align: center;
    max-width: 70%;
  }
`;

export default function SliderAbout() {
  return (
    <SliderAboutWrapper>
      <ContentWrapper>
        <CarouselWrapper>
          <Carousel effect="fade" autoplay>
            <TabWrapper>
              <SliderIconOne />
              <h1>Plataforma Colaborativa</h1>
              <h3>
                Todo o conteúdo é 100% organizado e criado pelos próprios
                usuários. Desta forma você sempre estará acessando conteúdo de
                qualidade e atualizado.
              </h3>
            </TabWrapper>
            <TabWrapper>
              <SliderIconTwo />
              <h1>Projeto Open Source</h1>
              <h3>
                Encontrou um bug ou quer adicionar uma nova feature? Sem
                problemas! O Código é 100% Open Source, acesse nosso
                repositório e comece a contribuir agora mesmo.
              </h3>
            </TabWrapper>
            <TabWrapper>
              <SliderIconThree />
              <h1>Torne-se um Desenvolvedor!</h1>
              <h3>
                Chega de ficar pedindo em comunidades ou a amigos aquele link
                para aprender uma tecnologia ou iniciar enquetes para saber
                qual curso é o melhor, aqui tudo já está respondido e
                organizado.
              </h3>
            </TabWrapper>
          </Carousel>
        </CarouselWrapper>
      </ContentWrapper>
    </SliderAboutWrapper>
  );
}
