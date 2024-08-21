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
                    team2="https://liquipedia.net/commons/images/thumb/a/a5/9Pandas_CS_2023_allmode.png/504px-9Pandas_CS_2023_allmode.png"
                    tournament="BetBoom Dacha Belgrade Season 2 Play-in"
                />
                <Match
                    gameLogo="https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png"
                    date="25-08-24"
                    team1="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png?20221021154128"
                    team2="https://liquipedia.net/commons/images/thumb/a/a5/9Pandas_CS_2023_allmode.png/504px-9Pandas_CS_2023_allmode.png"
                    tournament="BetBoom Dacha Belgrade Season 2 Play-in"
                />
                <Match
                    gameLogo="https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png"
                    date="25-08-24"
                    team1="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png?20221021154128"
                    team2="https://liquipedia.net/commons/images/thumb/a/a5/9Pandas_CS_2023_allmode.png/504px-9Pandas_CS_2023_allmode.png"
                    tournament="BetBoom Dacha Belgrade Season 2 Play-in"
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