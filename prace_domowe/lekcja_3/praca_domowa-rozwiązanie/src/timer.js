import "core-js/stable";
import "regenerator-runtime/runtime";


const pad = value => `${value}`.padStart(2, '0')

function* circularNumbersGenerator (beginAt = start, start = 0, end = 59) {
    let counter = beginAt
    while (1) {
        yield counter;
        counter = Math.max(++counter % (end + 1), start)
    }
}

function* timeGenerator (initialHours, initialMinutes, initialSeconds) {
    let s = initialSeconds
    let m = initialMinutes
    let h = initialHours % 12
    const secondsCounter = circularNumbersGenerator(s)
    const minutesCounter = circularNumbersGenerator(m)
    const hoursCounter = circularNumbersGenerator(h, 1, 12)


    while (1) {

        s = secondsCounter.next().value

        if (s === 0) {
            m = minutesCounter.next().value

            if (m === 0) {
                h = hoursCounter.next().value
            }
        }

        yield `${pad(h)}:${pad(m)}:${pad(s)}`
    }
}


export default function () {
    const { body } = document;
    const div = document.createElement('div');
    div.innerText = 'Hello World!';

    body.appendChild(div);

    const initialTime = new Date

    const timeCounter = timeGenerator(
        initialTime.getHours(),
        initialTime.getMinutes(),
        initialTime.getSeconds(),
    )

    div.innerHTML = timeCounter.next().value

    setInterval(() => {
        div.innerHTML = timeCounter.next().value + `<br><br><small style='color: grey'>(prawdziwa data: ${new Date})</small>`
    }, 1000)
};
