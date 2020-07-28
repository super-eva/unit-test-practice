function holiday(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    if (month === 12 && date === 25) {
        return 'Merry Xmas';
    }
    else{
        return 'Today is not Xmas';
    }
}

