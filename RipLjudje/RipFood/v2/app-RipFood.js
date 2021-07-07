console.log("App connected")

var interval_countdown
var countdown_alarm = new Audio('countdown_alarm.ogg')

//Food database

const Wasabi_macaroni = { title: "Wasabi Macaroni", category: "cat_Daily", price: 15, time: 60, desc: "Real fresh-grated wasabi tastes bright and green with a touch of quickly fading heat. It is pungent, yet delicate enough to let the flavor of raw fish shine.", background: "Composition 1_1_1.gif" }
const Hot_shower = { title: "Hot Shower", category: "cat_YourFriends", price: 23, time: 30, desc: "The heat warms up your muscles and makes you more pliable. Your muscles are relaxed, and you're not as tense. Hot showers can relieve tension and soothe stiff muscles.", background: "Composition 1_3.gif" }
const Mothers_love = { title: "Mother’s Love", category: "cat_Daily", price: 124, time: 45, desc: "Mother love is… the deep, all-embracing, all-accepting, nourishing, nurturing, warm, safe, supportive love that soothes the places inside our hearts that feel scared and lonely.", background: "Composition 2_1_1.gif" }
const Perfect_highfive = { title: "Perfect Highfive", category: "cat_Daily", price: 12, time: 25, desc: "Imagine this. You just scored the winning shot in your basketball game. Your teammates run up to you to congratulate you. They yell “Great shot!” and give you a big round of High Fives. You are thrilled, happy, connected, and, most importantly, appreciated.", background: "Composition 3_1_1.gif" }
const Traffic_jam = { title: "Traffic Jam", category: "cat_YourFriends", price: 12, time: 25, desc: "Simply, a high five is a gesture that promotes positive “feel-good” feelings ephemerally. We do high fives to make a celebration short.", background: "Composition 3_3.gif" }
const Three_Days_Weekend = { title: "Three-Days-Weekend", category: "cat_YourFriends", price: 12, time: 25, desc: "“Who says you need to cash in all your vacation days at once? In fact, according to experts, it seems that taking short vacations throughout the year may be more beneficial to your mental well-being than taking one long vacation.” Big society to his employees.", background: "Composition 3_4.gif" }
const Clean_House  = { title: "Clean House ", category: "cat_YourList", price: 12, time: 25, desc: "A clean home carries a strong aura of perfection, an ambiance of clarity and a sense of wholesomeness. Truth be told, everyone loves to walk into a clean home but not everyone has the will to maintain a clean home. In fact, if you have ever had a clean home, you must have had at least one of these unique feelings.", background: "Composition 4_1_1.gif" }

// Categories: cat_Daily, cat_YourList, cat_YourFriends, cat_Trending, cat_LikedMars

var products = [Wasabi_macaroni, Hot_shower, Mothers_love, Perfect_highfive, Traffic_jam, Three_Days_Weekend, Clean_House ]

//Populate products

var product_selected

function updateProductSelected(productNow) {

    console.log(productNow)
    product_selected = productNow

    document.getElementById("profile_section").style.display = "none"
    document.getElementById("product_selected_section").style.display = "block"

    document.getElementById("product_selected_title").innerHTML = product_selected.title
    document.getElementById("product_selected_desc").innerHTML = product_selected.desc
    document.getElementById("product_selected_price").innerHTML = product_selected.price

    var bgImage = "gradients/" + product_selected.background
    document.getElementById("taste_graph_svg").style.backgroundImage = "url('" + bgImage + "')";

    updateTasteGraph()

}

products.forEach(item => {
    var product = document.createElement("div");
    console.log(product)
    product.classList.add("product_plate")
    product.innerHTML = "<h3>" + item.title + "</h3>" + "<div style='display: flex; justify-content: flex-end;'>" +
        "<img src='heart.svg' width='24px' style='margin-right: 4px;'> <img src='share.svg' width='24px'>" + "</div>";

    var bgImage = "gradients/" + item.background

    product.style.backgroundImage = "url('" + bgImage + "')";

    product.addEventListener("click", function () {
        console.log("clicked")
        updateProductSelected(item)

    }, false)

    document.getElementById(item.category).appendChild(product);
})

//Upadte profile info

function updateStarRating() {
    var allStars = document.getElementById("star_rating").children

    for (let i = 0; i < allStars.length; i++) {
        allStars[i].src = "star-outline.svg"
    }

    for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
        allStars[i].src = "star.svg"
    }
}

function updateProfileInfo() {
    document.getElementById("citizen_id_field").innerHTML = Math.floor(Math.random() * 1000)
    document.getElementById("account_balance").innerHTML = (Math.floor(Math.random() * 1000) + 100) + " EC"
    updateStarRating()
}

updateProfileInfo()

//Product section navigation

document.getElementById("cook_now_button").addEventListener('click', function () {
    document.getElementById("product_cooking_section").style.display = "flex"
    document.getElementById("product_selected_section").style.display = "none"
    startTimer(product_selected.time, document.getElementById("countdown_timer"))
})

//Taste graph

var x1_taste = 75
var y1_taste = 150
var x2_taste = 150
var y2_taste = 75
var x3_taste = 225
var y3_taste = 150
var x4_taste = 150
var y4_taste = 225


function updateTasteGraph() {
    var graphString = String(x1_taste + "," + y1_taste + " " + x2_taste + "," + y2_taste + " " + x3_taste + "," + y3_taste + " " + x4_taste + "," + y4_taste)
    document.getElementById("taste_graph").setAttribute("points", graphString);
    console.log(graphString)
    document.getElementById("taste_price").innerHTML = String(parseInt(document.getElementById("anger_slider").value) + parseInt(document.getElementById("love_slider").value) + parseInt(document.getElementById("happiness_slider").value) + parseInt(document.getElementById("sadness_slider").value) + product_selected.price) + "EC"
}

document.getElementById("anger_slider").addEventListener('change', function () {
    x1_taste = 150 - document.getElementById("anger_slider").value
    updateTasteGraph()
})

document.getElementById("love_slider").addEventListener('change', function () {
    y2_taste = 150 - document.getElementById("love_slider").value
    updateTasteGraph()
})

document.getElementById("happiness_slider").addEventListener('change', function () {
    x3_taste = 150 + parseInt(document.getElementById("happiness_slider").value)
    updateTasteGraph()
})

document.getElementById("sadness_slider").addEventListener('change', function () {
    y4_taste = 150 + parseInt(document.getElementById("sadness_slider").value)
    updateTasteGraph()
})


//Timer setup

function clearTimer() {
    clearInterval(interval_countdown)
    document.getElementById("countdown_timer").classList.remove("flash_element")
    document.getElementById("product_cooking_section").style.display = "none"
}

function setupTimer(duration, display) {
    var timer = duration,
        minutes, seconds;

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;

}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;

    setupTimer(duration, display)

    interval_countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (timer == 0) {
            countdown_alarm.play()
            clearInterval(interval_countdown)
            display.classList.add("flash_element")
            setTimeout(function () {
                location.reload();
            }, 10000)
        }

        --timer;
        display.textContent = minutes + ":" + seconds;

    }, 1000);

}