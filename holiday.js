import {getToday} from "./getToday";

export function holiday(){
    const {month, date} = getToday();
    if (month === 12 && date === 25) {
        return 'Merry Xmas';
    }
    else{
        return 'Today is not Xmas';
    }
}

