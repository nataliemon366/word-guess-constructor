letter = (value) => {
    this.letter = value;
    this.guessed = false;

    this.toString = () => {
        if (this.guessed === " ") {
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return " ";
            } else {
                return this.letter;

            }
        }
    };

    this.guess = (guess) => {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
}
module.exports = Letter;