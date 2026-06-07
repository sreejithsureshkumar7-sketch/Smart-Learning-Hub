const questions=[
{q:'HTML stands for?',a:['Hyper Text Markup Language','High Text Machine Language','Home Tool Markup Language'],c:0},
{q:'Which CSS property changes text color?',a:['font-size','color','background'],c:1},
{q:'Which language is used for website logic?',a:['HTML','CSS','JavaScript'],c:2},
{q:'Which storage is used in this project?',a:['LocalStorage','Photoshop','Bluetooth'],c:0},
{q:'5 + 5 = ?',a:['9','10','11'],c:1}
];
const area=document.getElementById('quizArea');
questions.forEach((item,i)=>{area.innerHTML+=`<div class="quiz-question"><h3>${i+1}. ${item.q}</h3>${item.a.map((x,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${x}</label>`).join('')}</div>`;});
function submitQuiz(){let score=0;questions.forEach((item,i)=>{const ans=document.querySelector(`input[name="q${i}"]:checked`);if(ans&&Number(ans.value)===item.c)score++;});const percent=Math.round((score/questions.length)*100);document.getElementById('result').innerHTML=`Score: ${score}/${questions.length}<br>Percentage: ${percent}%`;localStorage.setItem('lastScore',percent);let best=Number(localStorage.getItem('bestScore')||0);if(percent>best)localStorage.setItem('bestScore',percent);saveLeaderboard(percent);updateStreak();}
function saveLeaderboard(score){const p=JSON.parse(localStorage.getItem('profile')||'{"name":"Learner"}');let board=JSON.parse(localStorage.getItem('leaderboard')||'[]');board.push({name:p.name||'Learner',score,date:new Date().toLocaleDateString()});board=board.sort((a,b)=>b.score-a.score).slice(0,5);localStorage.setItem('leaderboard',JSON.stringify(board));}
