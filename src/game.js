import React from "react";
import Board from "./board"
import "./App.css"

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [{squares:[
                null,null,null,
                null,null,null,
                null,null,null
            ]}],
            xIsNext: true,
            Xscore: 0,
            Oscore: 0,
            status: ''

        };
    }
    eventHandler(i){
        const history = this.state.history
        const squares = history[history.length-1].squares.slice()
        const winner = this.checkWinner(squares)
        
        if(winner || squares[i]){
            return 
        }
         squares[i] = this.state.xIsNext? "X":"O"
         this.setState({
            history: history.concat([{
              squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
          });
         
         
          
     }
     checkplein(squares){
        for(let i= 0;i<9;i++){
            if(!squares[i]) return false
        }
        return true
     }
    checkWinner(squares){
        const currentSquares =  squares
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for(let i = 0;i<lines.length;i++){
            const [a,b,c] = lines[i]
            if(currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c]){
                return currentSquares[a]
            }
          }
          return null
    }
    reset(){
        this.setState({
            history: [{squares:[
                null,null,null,
                null,null,null,
                null,null,null
            ]}],
            xIsNext: true,
            Xscore: 0,
            Oscore: 0,
            status: ''
        })
    }
    render(){
            const history = this.state.history
            const currentSquares =  history[history.length-1].squares
            const winner = this.checkWinner(currentSquares)

        
            // winn event    
            if(winner){
                if(winner === 'X'){
                    this.setState({
                        Xscore: this.state.Xscore + 1,
                        status : `The Winner is X`
                    })
                    
                }else{
                    this.setState({
                        Oscore: this.state.Oscore + 1,
                        status : `The Winner is O`
                    })
                    
                }
                this.setState({
                    history: [{squares:[
                        null,null,null,
                        null,null,null,
                        null,null,null
                    ]}],
                    xIsNext: true
                })
             }

        // draw event
        if(this.checkplein(currentSquares)){
            this.setState({
                history: [{squares:[
                    null,null,null,
                    null,null,null,
                    null,null,null
                ]}],
                xIsNext: true,
                status : `Draw`
            })
           
         } 


                return ( 
                        <div className="container">
                            <div className="score">
                                <div className="x-score">
                                   <p> X : {this.state.Xscore}</p>
                                </div>
                                <div className="o-score">
                                    <p> O : {this.state.Oscore}</p>
                                </div>
                            </div>
                            <Board squares={currentSquares}
                            onClick={(i)=>this.eventHandler(i)}/>
                            <div className="status">{this.state.status}</div>
                            <div className="buttons">
                                <button className="next">NEXT</button>
                                <button className="prev">PREVIOUS</button>
                                <button className="reset" onClick={() => this.reset()}>RESET</button>
                            </div>
                        </div>
                        
                        )
                    
    }
}



 
export default Game
