export default function getTime() {
    //use current time for organising brews
    const order = Date.now();
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    const hour = date.getHours().toString();
    const minute = date.getMinutes().toString();
    const fullDate = hour + ":" + minute + " / " + day + "." + month + "." + year;

    const time = [order, fullDate]
    return  time
}