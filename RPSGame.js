let computer_move = '';
            let random_number ;
            let result = '';
            let score = JSON.parse(localStorage.getItem('score'));
            let isautoPlaying =false;
            let intervalId;

            console.log(document.querySelector('input'));
        
            if(score===null)
            {   
                score = 
                {
                    wins : 0,
                    lose : 0,
                    tie : 0
                }
            };
            function autoPlay(){
                if(!isautoPlaying)
                    {
                        intervalId=setInterval(function(){
                            const player_move = calculate_comp_move();
                            playgame(player_move);
                            },1000);
                        isautoPlaying = true;
                    }
                    else{
                        clearInterval(intervalId);
                        isautoPlaying = false;
                    }
            }
            
            updateScoreElement();
        
            function playgame(player_move)
            {
                calculate_comp_move();
                if(player_move==='Scissor')
                {
                    if(computer_move==='Rock')
                    {
                        result = 'Lose';
                    }
                    else if(computer_move==='Paper')
                    {
                        result = 'Win';
                    }
                    else if(computer_move==='Scissors')
                    {
                        result = 'Tie';
                    }
                }
                else if(player_move === 'Rock')
                {
                    if(computer_move==='Rock')
                    {
                        result = 'Tie';
                    }
                    else if(computer_move==='Paper')
                    {
                        result = 'Lose';
                    }
                    else if(computer_move==='Scissors')
                    {
                        result = 'Win';
                    }
                }
                else if(player_move === 'Paper')
                {
                    if(computer_move==='Rock')
                    {
                        result = 'Win';
                    }
                    else if(computer_move==='Paper')
                    {
                        result = 'Tie';
                    }
                    else if(computer_move==='Scissors')
                    {
                        result = 'Lose';
                    }
                }

                if(result==='Win')
                {
                    score.wins +=1;
                }
                else if(result==='Lose')
                {
                    score.lose+=1;
                }
                else if(result==='Tie')
                {
                    score.tie +=1;
                }

                localStorage.setItem('score',JSON.stringify(score))


                document.querySelector('.js-moves')
                    .innerHTML = `You <img src="images/${player_move}-emoji.png" class="move-icon">-
                                    <img src="images/${computer_move}-emoji.png" class="move-icon"> Computer`
    

                updateScoreElement();

                document.querySelector('.js-result').innerHTML = `${result}.`;

            
            }

            function updateScoreElement(){
                document.querySelector('.js-scorecheck').innerHTML = `Score: Wins:${score.wins}, Lose:${score.lose}, Tie:${score.tie}`;
            }
            function calculate_comp_move()
            {
                random_number = Math.random();
                if(random_number>=0 && random_number<=1/3)
                {
                    computer_move = 'Rock';
                }
                else if(random_number>1/3 && random_number <=2/3)
                {
                    computer_move = 'Paper';
                }
                else if(random_number>2/3)
                {
                    computer_move = 'Scissors'
                }
                return computer_move;
            }