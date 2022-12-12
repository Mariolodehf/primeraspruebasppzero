import React from "react";
import logo from "./../img/logoPeriodicoUV1.1.svg";
import { ReactComponent as FlechaIzquierda } from "./../img/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "./../img/iconmonstr-angel-right-thin.svg";
import styled from "styled-components";
    
<nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><img class="img-fluid" data-bss-hover-animate="pulse" src="/assets/img/logoPeriodicoUV1.1.svg?h=a038cf16cdd66a635e370149abd284aa" width="100px" style="text-align: center;"><a class="navbar-brand" href="/index.html">Periódico de la U</a>
            <div class="overlay"></div><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="/index.html">¡enterate!</a></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"><a class="nav-link text-start" href="/post.html" style="text-align: center;">Blog de historias</a></li>
                    <li class="nav-item"><a class="nav-link text-start" href="/about.html" style="text-align: center;">acerca de nosotros</a></li>
                    <li class="nav-item"><a class="nav-link" href="/contact.html">Contactanos</a></li>
                    <li class="nav-item"><a class="nav-link text-center border rounded-pill rubberBand animated" style="height: 38px;width: 120px;color: rgb(249,248,248);background: var(--bs-red);border-style: none;" href="/ecomeerce.html">TIENDA U</a></li>
                </ul>
            </div>
        </div>
    </nav>

const Slideshow = () => {
  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow>
        <Slide>
          <a href="https://www.google.com">
            <img src={img1} alt="imagen 1" />
          </a>
          <TextoSlide>
            <p>Espacio para narrarte entre historias</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.google.com">
            <img src={img2} alt="imagen 2" />
          </a>
          <TextoSlide>
            <p>Espacio para narrarte entre historias</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.google.com">
            <img src={img3} alt="imagen 3" />
          </a>
          <TextoSlide>
            <p>Espacio para narrarte entre historias</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.google.com">
            <img src={img4} alt="imagen 4" />
          </a>
          <TextoSlide>
            <p>Espacio para narrarte entre historias</p>
          </TextoSlide>
        </Slide>
      </ContenedorSlideshow>
      <Controles>
        <Boton>
          <FlechaIzquierda />
        </Boton>
        <Boton derecho>
          <FlechaDerecha />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;
/*-----------todo de ContenedorPrincipal----------------*/
/*position: relative; /*para que los controles se muestren por encima de las imagenes*/

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.5s ease all;
  z-index: 10;
  max-height: 1000px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    vertical-align: center; /*para que las imagenes se muestren en linea*/
    img-fluid: true;
  }
`;

const TextoSlide = styled.div`
  background: ${(props) =>
    props.colorFondo ? props.colorFondo : "rgba(0, 0, 0, .3)"};
  color: ${(props) => (props.colorTexto ? props.colorTexto : "#fff")};
  width: 100%;
  padding: 10px 10px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media (max-width: 700px) {
    position: adsolute;

`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.5s ease all;
  /*
  }
  path {
    filter: ${(props) =>
    props.derecho
      ? "drop-shadow(-2px 0px 0px #fff)"
      : "drop-shadow(2px 0px 0px #fff)"};
  }
*/
  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

/*-----------todo Boton----------------*/
/*pointer-events: all; /*para que los controles no interfieran con el slide*/
/*background: none; /*para que el boton no tenga fondo*/
/*border: none; /*para que el boton no tenga borde*/
/*cursor: pointer; /*para que el cursor se muestre como un dedo*/
/*outline: none; /*para que el boton no tenga borde*/
/*width: 50px; /*para que el boton tenga un ancho de 50px*/
/*height: 50px; /*para que el boton tenga un alto de 50px*/
/*text-align: center; /*para que el texto del boton se muestre centrado*/
/*position: absolute; /*para que los controles se muestren por encima de las imagenes*/
/*transition: .5s ease all; /*para que los controles tengan una transición suave*/
/*${(props) => (props.derecho ? "right: 0;" : "left: 0;")} /*para que los controles se muestren 
a la derecha o a la izquierda*/
/*path { /*para que el icono del boton se muestre en color blanco*/
/*&:hover { /*para que el boton cambie de color cuando el cursor este encima*/

/*-----------todo de Controles----------------*/
/*position: absolute; /*para que los controles se muestren por encima de las imagenes*/
/*z-index: 20; /*para que los controles queden más visibles
que el otro elemento*/
/*width: 100%; /*para que los controles ocupen todo el ancho del slide*/
/*height: 100%; /*para que los controles ocupen todo el alto del slide*/
/*pointer-events: none; /*para que los controles no interfieran con el slide*/

/*---------------todo de TextoSlide---------------------------*/
/*background: rgba(0, 0, 0, 0.5); /*para que el texto se muestre por encima de las imagenes*/
/*width: 100%; /*para que el texto ocupe todo el ancho del slide*/
/*padding: 10px 68px; /*para que el texto no se pegue a los bordes del slide*/
/*text-align: center; /*para que el texto se muestre centrado*/
/*position: absolute; /*para que el texto se muestre por encima de las imagenes*/
/*bottom: 0; /*para que el texto se muestre por encima de las imagenes*/
/*@media (max-width: 700px) { /*para que en el tamaño de pantalla de 700px el texto se muestre debajo de las imagenes*/

/*---------------todo de Slide-----------------------------*/
/*img { /*para que las imagenes ocupen todo el ancho del slide*/
/*position: relative; /*para que el texto se muestre por encima de las imagenes*/
/*max-height: 500px; /*para que las imagenes no se desborden y todos los slides tengan el mismo tamaño*/
/*z-index: 10; /*para que el texto se muestre por encima de las imagenes*/
/*transition: .5s ease all; /*para que las imagenes se muevan suavemente*/
/*overflow: hidden; /*para que no se desborden las imagenes*/
/*min-width: 100%; /*para que el slide ocupe todo el ancho del contenedor*/
/*display: flex; /*para que las imagenes se muestren una al lado de la otra*/
/*flex-wrap es para que las imagenes no se desborden*/

export default Slideshow;