const bt1 = document.querySelector('.bt1');
const bt2 = document.querySelector('.bt2');
const bt3 = document.querySelector('.bt3');

const sub = document.getElementById('sub');
const para = document.getElementById('para');

bt2.addEventListener('click', () => {
    bt1.style.backgroundColor = '#aaaaaa';
    bt3.style.backgroundColor = '#aaaaaa';
    bt2.style.backgroundColor = 'white';
    sub.textContent = 'Vision';
    para.textContent = 'Make a list of everything you would do or attempt if you were absolutely guaranteed of success. Then decide upon one specific action and do it immediately.Identify the type of work that youenjoy the most. What activities have been most responsible for your success in life to date? If you could do any job at all and be successful at it,what would you choose?'

});
bt3.addEventListener('click', () => {
    bt1.style.backgroundColor = '#aaaaaa';
    bt2.style.backgroundColor = '#aaaaaa';
    bt3.style.backgroundColor = 'white';
    sub.textContent = 'Goals';
    para.textContent = 'Identify your key result areas in your current job. What are the parts of your work that you must absolutely, positively perform in an excellent fashion to move to the top of your field? Where are you strong and where are you weak? Make a plan today to get better in the one skill area where improvement can help you the most.'

})
bt1.addEventListener('click', () => {
    bt1.style.backgroundColor = 'white';
    bt3.style.backgroundColor = '#aaaaaa';
    bt2.style.backgroundColor = '#aaaaaa';
    sub.textContent = 'History';
    para.textContent = 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est accusamus adipisci?sit amet consectetur adipisicing elit. Obcaecati ad esse facere nesciunt sunt voluptatum, enim dolores veritatis porro odio rem qui hic alias omnis rerum pariatur nemo eaque officiis!'
})