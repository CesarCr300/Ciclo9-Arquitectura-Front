import "../styles.css"

export  const ProductUserHeader = () => {
    return (
    <header >
        <div id="div_header">
            <div  id= "div_header_containt">
                <div>
                    <a href="tel:+34918521619">📞 918 521 619</a>
                        <a href="mailto:santalucia@gmail.com">📧 santalucia@gmail.com</a>
                </div>
                <div>
                    <a  id="div_header_containt_follow" href="#">AAAAAAA, para enterarte de las nuevas ofertas!</a>
                </div>
                <div>
                    <a href="#" >Mi carrito</a>
                    <a href="#" >
                        <img src="/public/img/carrito-de-compras.png"/>
                        </a>
                </div>
            </div>
        </div >
        <nav>
            <div id="div_nav">
                <a href="#" id="div_nav_a_tittle">Carnicería Multicarnes S.L.</a>
                <div id="div_nav_routes">
                    <a href="/productsUser/1" id = "div_nav_routes_menu">Inicio</a>
                    <a href="/store" id = "div_nav_routes_store">Menú</a>
                    <a href="/productsUser/1" id = "div_nav_routes_us">Nosotros</a>
                    <a href="/productsUser/1" id = "div_nav_routes_contact">Contacto</a>
                </div>
                <div id="div_nav_account">
                    <a  id="div_nav_account_login" href="/login">Login / Registro</a>
                    <a id="div_nav_account_shop" href="/carrito"><i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </nav>
    </header>
    )
}