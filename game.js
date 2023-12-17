//this function will ne called by a button click; it will start our game
function playCraps(){
    console.log("playCraps function called");

        //furst roll of the dice
        var die1 = rollDie();
        console.log("the first roll is: " + die1);

        //second roll of the dice
        var die2 = rollDie();
        console.log("the second roll is: " + die2);
      
        //add the rolls together 
        var sum = die1 + die2;
        console.log("the sum of the dice roll is"+ sum);

        //Show the results of die 1 and 2 and sum
        outputRes("die1Res", "Die 1 is:" + die1);
        outputRes("die2Res", "Die 2 is:" + die2);
        outputRes("sumRes", "sum is:" + sum);

        //the logic for if the won,lost or tied
        if (sum ==7 || sum == 11){
         outputRes("crapsRes", "You lose!");
        }
        //if the dice equal each other and they are even
        else if (die1 == die2 && die2 % 2 == 0){
        //you win
        outputRes("crapsRes", "You Win!");
        }
        //the catch all- its was a tie
        else{ 
            outputRes("crapsRes", "You pushed (you tied)!");
        }
    
}
    //output our game results
    function outputRes(htmlElement, theText){
        //use the html element to show the results
        document. getElementById(htmlElement).innerHTML = theText;
    }

// this function will generate a random number between 1 and 6
function rollDie(){
    //get a random number between o and 1 multipled by 6
        var die = 6 * Math.random();
        //rerun the die roll and make sure its a whole number
        return Math.ceil(die);
}