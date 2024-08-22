import './ShopBanner.css';

function ShopBanner() {
    return (
        <section id="shop-banner">
            <div id="shop-items">
                <div className='shop-item'>
                    <a target="_blank" href="https://furia.gg/product/camiseta-champion-x-furia-mascot-off-white/"><img className="shop-item-img" src="https://furia.gg/wp-content/uploads/2024/08/FVRIA23070-1128x1536.png" /></a>
                    <div className="shop-item-bottom">
                    <p className="shop-item-name">MOLETOM CARECA CHAMPION X FURIA MASCOT OFF WHITE</p>
                    <p className="shop-item-price">R$ 299,99</p>
                    </div>
                </div>
                <div className='shop-item'>
                    <a target="_blank" href="https://furia.gg/product/camiseta-champion-x-furia-logo-lockup-preta/"><img className="shop-item-img" src="https://furia.gg/wp-content/uploads/2024/08/FVRIA23074-1128x1536.png" /></a>
                    <div className="shop-item-bottom">
                    <p className="shop-item-name">CAMISETA CHAMPION X FURIA LOGO LOCKUP PRETA</p>
                    <p className="shop-item-price">R$ 179,99</p>
                    </div>
                </div>
                <div className='shop-item'>
                    <a target="_blank" href="https://furia.gg/product/moletom-canguru-champion-x-furia-logo-lockup-off-white/"><img className="shop-item-img" src="https://furia.gg/wp-content/uploads/2024/08/FVRIA23082-1128x1536.png" /></a>
                    <div className="shop-item-bottom">
                    <p className="shop-item-name">MOLETOM CANGURU CHAMPION X FURIA LOGO LOCKUP OFF WHITE</p>
                    <p className="shop-item-price">R$ 399,99</p>
                    </div>
                </div>
            </div>
            <div id="shop-header">
                <h1 id="shop-call">LOJA</h1>
                <a id="shop-link-ref" href='#contact-us-banner'><button id="shop-link">ACESSE</button></a>
            </div>
        </section>

    );
}

export default ShopBanner;