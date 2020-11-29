export default class TennisGame2 {
    P1point = 0;
    P2point = 0;

    P1res = "";
    P2res = "";
    player1Name = "";
    player2Name = "";

    TennisGame2(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    getScore() {
        let score = "";
        let P1point = this.P1point;
        let P2point = this.P2point;
        if (P1point === P2point && P1point < 4) {
            if (P1point === 0)
                score = "Love";
            if (P1point == 1)
                score = "Fifteen";
            if (P1point == 2)
                score = "Thirty";
            if (P1point == 3)
                score = "Forty";
            score += "-All";
        }
        if (P1point === P2point && P1point > 3)
            score = "Deuce";

        if (P1point > 0 && P2point == 0) {
            if (P1point == 1)
                P1res = "Fifteen";
            if (P1point == 2)
                P1res = "Thirty";
            if (P1point == 3)
                P1res = "Forty";

            P2res = "Love";
            score = P1res + "-" + P2res;
        }
        if (P2point > 0 && P1point == 0) {
            if (P2point === 1)
                P2res = "Fifteen";
            if (P2point === 2)
                P2res = "Thirty";
            if (P2point === 3)
                P2res = "Forty";

            P1res = "Love";
            score = P1res + "-" + P2res;
        }

        if (P1point > P2point && P1point < 4) {
            if (P1point === 2)
                P1res = "Thirty";
            if (P1point === 3)
                P1res = "Forty";
            if (P2point === 1)
                P2res = "Fifteen";
            if (P2point === 2)
                P2res = "Thirty";
            score = P1res + "-" + P2res;
        }
        if (P2point > P1point && P2point < 4) {
            if (P2point == 2)
                P2res = "Thirty";
            if (P2point == 3)
                P2res = "Forty";
            if (P1point == 1)
                P1res = "Fifteen";
            if (P1point == 2)
                P1res = "Thirty";
            score = P1res + "-" + P2res;
        }

        if (P1point > P2point && P2point >= 3) {
            score = "Advantage player1";
        }

        if (P2point > P1point && P1point >= 3) {
            score = "Advantage player2";
        }

        if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
            score = "Win for player1";
        }
        if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
            score = "Win for player2";
        }
        return score;
    }

    SetP1Score(number) {
        for (let i = 0; i < number; i++)
        {
            this.P1Score();
        }
    }

    SetP2Score(number) {
        for (let i = 0; i < number; i++)
        {
            this.P2Score();
        }
    }

    P1Score() {
        this.P1point++;
    }

    P2Score() {
        this.P2point++;
    }

    wonPoint(player) {
        if (player === "player1")
            this.P1Score();
        else
            this.P2Score();
    }
}