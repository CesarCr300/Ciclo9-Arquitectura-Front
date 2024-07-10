import "../style_footer.css";

export const ProductUserFooter = () => {
  return (
    <>
      <footer>
        <div id="div_contact">
          <h4>Contáctanos</h4>
          <div id="div_images">
            <a href="#">
              <img src="/public/img/logotipo-de-instagram.png" />
            </a>
            <a href="#">
              <img src="/public/img/logotipo-de-facebook.png" />
            </a>
          </div>
        </div>
        <div id="div_information">
          <h4>Información</h4>
          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Legal</a>
        </div>
        <div id="div_presentations">
          <h4>Prestaciones</h4>
          <a href="#">Sugerencias</a>
          <a href="#">Extras</a>
          <a href="#">Reclamos</a>
        </div>
      </footer>
      <div id="div_reserved">© All Right Reserved</div>
    </>
  );
};
