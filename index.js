

(function () {
    let text = document.getElementById('content')
    const sentence = document.getElementById('sentence')
    const lower = document.getElementById('lower')
    const upper = document.getElementById('upper')
    const capitalized = document.getElementById('capitalized')
    const alternating = document.getElementById('alternating')
    const title = document.getElementById('title')
    const clear = document.getElementById('clear')
    const chartCounter = document.getElementById('char_count')
    const wordsCounter = document.getElementById('word_count')
    const linerCounter = document.getElementById('line_count')



    function getText() {

        return text.value
    }
    const toSentenceCase = () => {
        text.value = getText().charAt(0).toUpperCase() + getText().toLowerCase().slice(1)

        console.log(countCharacter())
    }
    sentence.addEventListener('click', toSentenceCase)

    const lowerCase = () => {
        text.value = getText().toLowerCase()
    }
    lower.addEventListener('click', lowerCase)

    const upperCase = () => {
        text.value = getText().toUpperCase()
    }
    upper.addEventListener('click', upperCase)
    const capCase = () => {
        text.value = getText()
            .split(' ')
            .map((item) => item.charAt(0).toUpperCase() + item.toLowerCase().slice(1))
            .join(' ')
    }
    capitalized.addEventListener('click', capCase)

    const alternate = () => {
        text.value = getText().split(' ').map((item) => item.split('').map((item) => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('')).join(' ')
    }

    alternating.addEventListener('click', alternate)

    clear.addEventListener('click', function () {
        chartCounter.innerText = 0
        wordsCounter.innerText = 0
        linerCounter.innerText = 0
        return text.value = ''

    })

    const selectElement = document.querySelector('.ice-cream');

    selectElement.addEventListener('change', (event) => {
        const result = document.querySelector('.result');
        result.textContent = `You like ${event.target.value}`;
    });



}())
