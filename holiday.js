import {getToday, printMessage} from "./helper";


export function holiday(){
    const {month, date} = getToday();
    if (month === 12 && date === 25) {
        printMessage('Merry Xmas');
        return 'Merry Xmas';
    }
    else{
        printMessage('Today is not Xmas')
        return 'Today is not Xmas';
    }
}

