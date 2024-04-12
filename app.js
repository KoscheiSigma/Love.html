const buttonHeight = 50;
const buttonWidth = 75;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;



window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('runaway');
    const yButton = document.getElementById('yes');
   
    button.addEventListener('click', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';

    });

    yButton.addEventListener('click', () => {
        alert("You are loved <3");
    });

});
