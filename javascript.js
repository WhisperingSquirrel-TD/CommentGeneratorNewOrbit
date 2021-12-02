
//complete the following details
let userName = "Tom";
let eeName = "George";
let occasion = 1; //enter 1- 'Birthday', 2- 'Bereavement', 3- 'Leaving', 4- 'Wedding', 5- 'New baby' 
let friendshipRating = 3; //How well do you know the employee? 1 = Just another employee, to, 3 = BFF 
let comment = "";
let randomNumber = (Math.floor(Math.random() * 5));

//1:1 - Birthday options:
if (occasion === 1 && friendshipRating === 1 && randomNumber === 0) {
    comment = `Happy Birthday ${eeName}! Best, ${userName}`;
} else if (occasion === 1 && friendshipRating === 1 && randomNumber === 1) {
    comment = `Hope you have a great Birthday, ${userName}`;
} else if (occasion === 1 && friendshipRating === 1 && randomNumber === 2) {
    comment = `Have a good one, ${userName}`;
} else if (occasion === 1 && friendshipRating === 1 && randomNumber === 3) {
    comment = `Best wishes, ${userName}`;
} else if (occasion === 1 && friendshipRating === 1 && randomNumber === 4) {
    comment = `Many Happy Returns, ${userName}`;
}
//1:2 - Birthday options:
else if (occasion === 1 && friendshipRating === 2 && randomNumber === 0) {
    comment = `Woop woop, Happy Birthday ${eeName}!, ${userName}`;
} else if (occasion === 1 && friendshipRating === 2 && randomNumber === 1) {
    comment = `Hope you have a great Birthday ${eeName}, ${userName}`;
} else if (occasion === 1 && friendshipRating === 2 && randomNumber === 2) {
    comment = `Have a fantastic day ${eeName}! All the best, ${userName}`;
} else if (occasion === 1 && friendshipRating === 2 && randomNumber === 3) {
    comment = `Best wishes ${eeName}, hope you have an amazing day. ${userName}`;
} else if (occasion === 1 && friendshipRating === 2 && randomNumber === 4) {
    comment = `Another year older :) Many Happy Returns, ${userName}`;
}
//1:3 - Birthday Options
else if (occasion === 1 && friendshipRating === 3 && randomNumber === 0) {
    comment = `Woop woop woop, one more year, Happy Birthday ${eeName}!, ${userName}`;
} else if (occasion === 1 && friendshipRating === 3 && randomNumber === 1) {
    comment = `Drinks are on you! Hope you have a great Birthday ${eeName}, ${userName}`;
} else if (occasion === 1 && friendshipRating === 3 && randomNumber === 2) {
    comment = `Have a fantastic day, I'll get you a drink at the pub :) ${eeName}! All the best, ${userName}`;
} else if (occasion === 1 && friendshipRating === 3 && randomNumber === 3) {
    comment = `Wishing you an awesome day ${eeName},  I hope you have a great one. ${userName}`;
} else if (occasion === 1 && friendshipRating === 3 && randomNumber === 4) {
    comment = `The big one! You dont look a day over 80 :) Many Happy Returns, ${userName}`;
}

//2:1,2,3 - Bereavement options:
else if (occasion === 2) {
    comment = `Message to ${userName}: 
Come on! Think of something personal, dont use this!`;
}
//3:1 - Leaving options:
else if (occasion === 3 && friendshipRating === 1 && randomNumber === 0) {
    comment = `All the best ${eeName}! From, ${userName}`;
} else if (occasion === 3 && friendshipRating === 1 && randomNumber === 1) {
    comment = `Wishing you well, ${userName}`;
} else if (occasion === 3 && friendshipRating === 1 && randomNumber === 2) {
    comment = `Have a good one, ${userName}`;
} else if (occasion === 3 && friendshipRating === 1 && randomNumber === 3) {
    comment = `Best wishes, ${userName}`;
} else if (occasion === 3 && friendshipRating === 1 && randomNumber === 4) {
    comment = `Good luck, ${userName}`;
}
//3:2 - Leaving options:
else if (occasion === 3 && friendshipRating === 2 && randomNumber === 0) {
    comment = `Best of luck with future endeavours ${eeName}!, ${userName}`;
} else if (occasion === 3 && friendshipRating === 2 && randomNumber === 1) {
    comment = `End of an era ${eeName}, sorry you're leaving. ${userName}`;
} else if (occasion === 3 && friendshipRating === 2 && randomNumber === 2) {
    comment = `Hope your next adventure is awesome ${eeName}! All the best, ${userName}`;
} else if (occasion === 3 && friendshipRating === 2 && randomNumber === 3) {
    comment = `Sad you're leaving, but best of luck ${eeName}. ${userName}`;
} else if (occasion === 3 && friendshipRating === 2 && randomNumber === 4) {
    comment = `Sorry you're leaving, ${userName}`;
}
//3:3 - Leaving options:
else if (occasion === 3 && friendshipRating === 3 && randomNumber === 0) {
    comment = `:( Noooooooooooo, dont leave me !!!!! ${userName}`;
} else if (occasion === 3 && friendshipRating === 3 && randomNumber === 1) {
    comment = `${eeName} you're dead to me. ${userName}`;
} else if (occasion === 3 && friendshipRating === 3 && randomNumber === 2) {
    comment = `So sorry you're leaving ${eeName}, you'll be missed. Best of luck. All the best, ${userName}`;
} else if (occasion === 3 && friendshipRating === 3 && randomNumber === 3) {
    comment = `DEAD. TO. ME!!!!!!! ${userName}`;
} else if (occasion === 3 && friendshipRating === 3 && randomNumber === 4) {
    comment = `Have an amazing next chapter, hope it all works out awesome. You're going to be missed! ${userName}`;
} else if (occasion === 3 && friendshipRating === 3 && randomNumber === 4) {
    comment = `You know where we are if it doesnt pan out :) Going to miss ya! ${userName}`;
}
//4:1 - Wedding options:
else if (occasion === 4 && friendshipRating === 1 && randomNumber === 0) {
    comment = `Congratulations ${eeName}! From, ${userName}`;
} else if (occasion === 4 && friendshipRating === 1 && randomNumber === 1) {
    comment = `Awesome news, congrats. ${userName}`;
} else if (occasion === 4 && friendshipRating === 1 && randomNumber === 2) {
    comment = `Hope you had a great day! ${userName}`;
} else if (occasion === 4 && friendshipRating === 1 && randomNumber === 3) {
    comment = `Best of luck on the day! ${userName}`;
} else if (occasion === 4 && friendshipRating === 1 && randomNumber === 4) {
    comment = `Best of luck to you both! ${userName}`;
}
//4:2 - Wedding options:
else if (occasion === 4 && friendshipRating === 2 && randomNumber === 0) {
    comment = `Hope you both had an amazing day, congratulations. ${userName}`;
} else if (occasion === 4 && friendshipRating === 2 && randomNumber === 1) {
    comment = `End of an era ${eeName}, sorry you're leaving. ${userName}`;
} else if (occasion === 4 && friendshipRating === 2 && randomNumber === 2) {
    comment = `Hope your next adventure is awesome ${eeName}! All the best, ${userName}`;
} else if (occasion === 4 && friendshipRating === 2 && randomNumber === 3) {
    comment = `Sad you're leaving, but best of luck ${eeName}. ${userName}`;
} else if (occasion === 4 && friendshipRating === 2 && randomNumber === 4) {
    comment = `Sorry you're leaving, ${userName}`;
}
//4:3 - Wedding options:
else if (occasion === 4 && friendshipRating === 3 && randomNumber === 0) {
    comment = `:( Noooooooooooo, dont leave me !!!!! ${userName}`;
} else if (occasion === 4 && friendshipRating === 3 && randomNumber === 1) {
    comment = `${eeName} you're dead to me. ${userName}`;
} else if (occasion === 4 && friendshipRating === 3 && randomNumber === 2) {
    comment = `So sorry you're leaving ${eeName}, you'll be missed. Best of luck. All the best, ${userName}`;
} else if (occasion === 4 && friendshipRating === 3 && randomNumber === 3) {
    comment = `DEAD. TO. ME!!!!!!! ${userName}`;
} else if (occasion === 4 && friendshipRating === 3 && randomNumber === 4) {
    comment = `Have an amazing next chapter, hope it all works out awesome. You're going to be missed! ${userName}`;
} else if (occasion === 4 && friendshipRating === 3 && randomNumber === 4) {
    comment = `You know where we are if it doesnt pan out :) Going to miss ya! ${userName}`;
}
function newComment() {
    document.getElementById("comment").innerHTML = comment;
}


