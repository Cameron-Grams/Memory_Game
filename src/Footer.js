import React from 'react';

class Footer extends React.Component{
  remainingCount(){
    if (this.props.gameState !== 'recall'){ return null }
    return (
      <div className="remaining-count">
        <p>You need {this.props.activeCellsCount - this.props.correctGuesses.length} more squares.</p>
        <p>Three Red and you lose!</p>
      </div>
    );
  }
  playAgainButton(){
    let nextGame;
    if(["won"].indexOf(this.props.gameState) >= 0){
      nextGame = this.props.playAgain;
      return(
        <button className="play-again-button"
                           onClick={this.props.playAgain}>
         Play Again
        </button>
      );
    }
    if (["lost"].indexOf(this.props.gameState) >= 0){
      return(
        <button className="play-again-button"
                           onClick={this.props.noAdvancePlay}>
         P lay Again 2
        </button>
      );
    }
  }

    render(){
      return(
        <div className="footer">
          <h3>Round Number {this.props.round}</h3>
          <div className="hint">
            {this.props.hints[this.props.gameState]}
          </div>
          {this.remainingCount()}
          {this.playAgainButton()}
        </div>
      );
    }
  }

Footer.defaultProps = {
  hints: {
    ready: "Get Ready",
    memorize: "Memorize", 
    recall: "Recall",
    won: "Well Done!",
    lost: "Game Over...bummer"
  }
}

export default Footer;
