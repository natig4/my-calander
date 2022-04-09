import { startTime } from '../config'


const getRem = num => {
    return num / 10 + 'rem'
}

const getFormattedTime = num => {
    const AMpm = (num / 60) + startTime >= 12 ? 'PM' : 'AM';
    const formattedTime = num % 60 === 0 ? { time: `${_changeToPm(num / 60 + startTime)}:00`, AMpm }
        : { time: `${_changeToPm(Math.floor(num / 60 + startTime))}:${+ num % 60}` }
    return formattedTime;
}
const _changeToPm = num => {
    return num > 12 ? num - 12 : num
}

const titleCase = phrase => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export const utilService = {
    getRem,
    getFormattedTime,
    titleCase
}