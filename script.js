document.addEventListener('DOMContentLoaded', () => {
    const amount = document.getElementById('amount');
    const btns = [
        document.getElementById('btn1'),
        document.getElementById('btn2'),
        document.getElementById('btn3'),
        document.getElementById('btn4'),
        document.getElementById('btn5'),
        document.getElementById('btn6'),
        document.getElementById('btn7'),
        document.getElementById('btn8'),
        document.getElementById('btn9'),
        document.getElementById('btn10')
    ];
    const announce = document.getElementById('announce');

    const getWinPercentage = () => {
        const currentAmount = parseFloat(amount.value);
        if (isNaN(currentAmount) || currentAmount === '') {
            return null; // Return null if amount is not a number or is empty
        }
        if (currentAmount >= 500) {
            return 20; // 20% win chance
        } else {
            return 90; // 90% win chance
        }
    };

    const checkWin = () => {
        const winPercentage = getWinPercentage();
        if (winPercentage === null) {
            return 'empty'; // Return 'empty' if the amount is not valid
        }
        const random = Math.random() * 100; // Random number between 0 and 100
        return random < winPercentage; // Check if the random number is within the win percentage
    };

    const handleClick = () => {
        const result = checkWin();
        if (result === 'empty') {
            alert('Please enter a valid amount!');
        } else if (result) {
            announce.textContent = 'You win!';
        } else {
            announce.textContent = 'Try again!';
        }
    };

    btns.forEach(btn => {
        btn.addEventListener('click', handleClick);
    });
});