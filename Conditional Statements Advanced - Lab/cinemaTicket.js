function cinemaTicket(input){

    let dayOfWeek = input[0];
    let ticketPrice = 0;

    if (dayOfWeek ===  'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Friday'){
        ticketPrice = 12;
    }else if (dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday'){
        ticketPrice = 14;
    }else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'){
        ticketPrice = 16;

    }
    console.log(ticketPrice);
}
(["Monday"]);
(["Friday"]);
(["Sunday"]);