import './PartnersBanner.css';

function PartnersBanner() {
    return (
        <section id="partners-banner">
            <div id="partners-header">
                <h1 id="partners-call">NOSSOS PARCEIROS</h1>
                <a id="be-a-partner-ref" href='#contact-us-banner'><button id="be-a-partner">SEJA UM FURIOSO</button></a>
            </div>
            <div id="partners">
                <img className="partner" src="https://furia.gg/wp-content/uploads/2023/12/Copy-of-627-sportsbook-logo-colored.png" />
                <img className="partner" src="https://furia.gg/wp-content/uploads/2023/12/Copy-of-05-100.png" />
                <img className="partner" src="https://furia.gg/wp-content/uploads/2023/12/Lenovo_Legion_POS-1C.png" />
                <img className="partner" src="https://furia.gg/wp-content/uploads/2023/12/Copy-of-2_PSLogo_Pos_RGB-768x193.png" />
                <img className="partner" src="https://pngimg.com/d/red_bull_PNG24.png" />
                <img className="partner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zqbQ1FQ_yCgh1kw7aXu7H0DqiD3bxyMWug&s" />
                
            </div>
        </section>

    );
}

export default PartnersBanner;