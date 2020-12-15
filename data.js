let data = [
    {
        name: "Kaleb Burd",
        handle: "@kburd",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim mollis sem, vel dignissim sem tempor eleifend. Vivamus et elit dapibus, porttitor nulla sed, blandit ex. -Kaleb",
        time: "1:40 PM",
        date: "16 Mar 20",
        retweets: 6054,
        likes: 27700,
        pic: "images/kaleb_burd.png"
    },
    {
        name: "Vlad Putin",
        handle: "@noBotHere",
        message: "Howdy all.....",
        time: "4:51 PM",
        date: "22 Jun 20",
        retweets: 4,
        likes: 27,
        pic: "images/vlad_putin.jpg"
    },
    {
        name: "Jack Dorsey",
        handle: "@daBoss",
        message: "Twiter is the best social media on the internet, Zuckerberg is inferior",
        time: "4:51 PM",
        date: "22 Jun 20",
        retweets: 4,
        likes: 27,
        pic: "images/jack_dorsey.jpg"
    },
    {
        name: "Leon Jenkins",
        handle: "@leyawn",
        message: "Cool place.... looks uninhaited....",
        time: "1:00 AM",
        date: "1 May 89",
        retweets: 123,
        likes: 27334,
        pic: "images/leon_jenkins.jpg"
    },
    {
        name: "Mark Zuck",
        handle: "@zuckman",
        message: "This is hot garbage",
        time: "3:59 PM",
        date: "24 Dec 19",
        retweets: 0,
        likes: 0,
        pic: "images/mark_zuck.jpeg"
    }
]

class Tweet {
    constructor(){
        this.name = null;
        this.handle = null;
        this.message = null;
        this.time = null;
        this.date = null;
        this.retweets = null;
        this.likes = null;
        this.pic = null;
    };

    getName(){
        return this.name;
    }

    getHandle(){
        return this.handle;
    }

    getMessage(){
        return this.message;
    }

    getTime(){
        return this.time;
    }

    getDate(){
        return this.date;
    }

    getRetweets(){
        return this.retweets;
    }

    getLikes(){
        return this.likes;
    }

    getPic(){
        return this.pic;
    }

    setName(name){
        this.name = name;
    }

    setHandle(handle){
        this.handle = handle;
    }

    setMessage(message){
        this.message = message;
    }

    setTime(time){
        this.time = time;
    }

    setDate(date){
        this.date = date;
    }

    setRetweets(retweets){
        this.retweets = retweets;
    }

    setLikes(likes){
        this.likes = likes;
    }

    setPic(pic){
        this.pic = pic;
    }
}

// Found this function online while searching for ways to round the likes count to the thousands.
// So, this is the only part I didn't write myself, or base on something from bootstrap or w3schools.
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}

let html = "";

for(let i = 0; i < data.length; i++){
    tweet = new Tweet();
    tweet.setName(data[i].name);
    tweet.setHandle(data[i].handle);
    tweet.setMessage(data[i].message);
    tweet.setTime(data[i].time);
    tweet.setDate(data[i].date);
    tweet.setRetweets(data[i].retweets.toLocaleString());
    tweet.setLikes(kFormatter(data[i].likes));
    tweet.setPic(data[i].pic);

    html += `<div id="card" class="card my-2 mx-auto" style="width: 25rem;">
                            <div id="card-body" class="card-body">
                                <div class="row">
                                    <div class="col-2">
                                    <img src="${tweet.pic}">
                                    </div>
                                    <div class="col mt-1">
                                        <div class="row">
                                            <div class="col-5">
                                                <span class="card-title fw-bold">${tweet.name}</span>
                                            </div>
                                            <div class="col">
                                                <img src=images/verified.png class="verified">
                                            </div>
                                        </div>
                                        <h6 class="card-subtitle mb-2 text-muted">${tweet.handle}</h6>
                                    </div>
                                </div>
                                <p class="card-text mt-3">${tweet.message}</p>
                                <span class="text-muted">${tweet.time} &#183; ${tweet.date} &#183; </span>
                                <a href="#" class="card-link link-info">Twitter for iPhone</a>
                                <hr>
                                <div class="row">
                                    <div class="col-5">
                                        <span class="fw-bold">${tweet.retweets}</span>
                                        <span class="text-muted"> Retweets</span>
                                    </div>
                                    <div class="col">
                                        <span class="fw-bold">${tweet.likes}</span>
                                        <span class="text-muted"> Likes</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}

document.getElementById("twitter").innerHTML += html;