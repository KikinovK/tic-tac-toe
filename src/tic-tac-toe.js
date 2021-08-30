//
class TicTacToe {

    constructor() {
        this._playerSymbols = ['x','o'];
        this.currentPlayerSymbol = this._playerSymbols[0];
        this.playingField = Array.from(Array(3), () => Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playingField[rowIndex][columnIndex] === null) {
            this.playingField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayerSymbol = this._playerSymbols.reverse()[0]
        }
    }

    isFinished() {
        return !!this.getWinner() || this.isDraw()
    }

    getWinner() {
        let result = [];
        let mainDiagonal = [];
        let minorDiagonal = [];
        for(let i = 0; i < this.playingField.length; i++) {
            let column = [];
            for(let j = 0; j < this.playingField[i].length; j++){
                column.push(this.playingField[j][i]);
                if (i === j) {
                    mainDiagonal.push(this.playingField[i][j])
                };
                if (i === this.playingField.length - j - 1) {
                    minorDiagonal.push(this.playingField[i][j]);
                }
            };
            result.push(this.playingField[i], column);
        };
        result.push(mainDiagonal, minorDiagonal);
        let resultSymbol = result.filter(array => new Set(array).size == 1 && array[0])
        return resultSymbol.length > 0 ? resultSymbol[0][0] : null

    }

    noMoreTurns() {
        return this.playingField.every(array => array.every(elem => elem !== null))
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns()
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playingField[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
