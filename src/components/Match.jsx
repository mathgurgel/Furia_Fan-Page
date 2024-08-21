import './Match.css';

function Match(props) {
    let matchLogo = props.gameLogo;
    let matchDate = props.date;
    let matchTeam1 = props.team1;
    let matchTeam2 = props.team2;
    let matchTournament = props.tournament;

    return (
        <div className='match'>
            <div className="match-header">
                <div className='game-logo-container'>
                    <img src={matchLogo} className='game-logo'/>
                </div>
                <div className='match-date'>
                    {matchDate}
                </div>
            </div>
            <div className='match-teams'>
                <img src={matchTeam1} className='team-logo'/>
                <p className='versus'>X</p>
                <img src={matchTeam2} className='team-logo'/>
            </div>
            <div className='match-tournament'>
                {matchTournament}
            </div>
        </div>
    );
}

export default Match;