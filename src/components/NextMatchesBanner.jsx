import './NextMatchesBanner.css';
import Match from './Match';
import { Link } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";

function NextMatchesBanner() {
    return (
        <section id="next-matches-banner">
            <div id="next-matches-banner-header">
                <h1 id="next-matches-banner-title">PRÓXIMOS JOGOS</h1>
            </div>
            <div id="matches">
                <Match
                    gameLogo="https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png"
                    date="25-08-24"
                    team1="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png?20221021154128"
                    team2="https://static.wikia.nocookie.net/counter-strike-global-offensive/images/0/0d/9_Pandas_-_logo.png/revision/latest?cb=20230416162212&path-prefix=pl"
                    tournament="BetBoom Dacha Belgrade Season 2 Play-in"
                />
                <Match
                    gameLogo="https://img.icons8.com/?size=512&id=hQSBVk8KAnp1&format=png"
                    date="22-08-24"
                    team1="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png?20221021154128"
                    team2="https://files.tips.gg/static/image/teams/nkosi-ballers-rl.png"
                    tournament="Esports World Cup 2024"
                />
                <Match
                    gameLogo="https://cdn2.steamgriddb.com/icon_thumb/9e82757e9a1c12cb710ad680db11f6f1.png"
                    date="A definir"
                    team1="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png?20221021154128"
                    team2="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png"
                    tournament="A definir"
                />
            </div>
            <Link to="/calendario" className="link" id="schedule-link">
                Ver calendário
                <GrLinkNext />
            </Link>
        </section>
    );
}

export default NextMatchesBanner;