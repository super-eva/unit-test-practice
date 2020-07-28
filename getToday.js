export function getToday() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return {month, date};
}