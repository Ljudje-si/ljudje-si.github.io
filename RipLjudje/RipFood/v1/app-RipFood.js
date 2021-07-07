console.log("App connected")

//Food database (currently not in use)

const Wasabi_macaroni = { title: "Wasabi macaroni", desc: "Real fresh-grated wasabi tastes bright and green with a touch of quickly fading heat. It is pungent, yet delicate enough to let the flavor of raw fish shine.", price: 15 }
const Hot_shower = { title: "Hot shower", desc: "The heat warms up your muscles and makes you more pliable. Your muscles are relaxed, and you're not as tense. Hot showers can relieve tension and soothe stiff muscles.", price: 23 }
const Mothers_love = { title: "Mother’s love", desc: "Mother love is… the deep, all-embracing, all-accepting, nourishing, nurturing, warm, safe, supportive love that soothes the places inside our hearts that feel scared and lonely.", price: 124 }
const Perfect_highfive = { title: "Perfect highfive", desc: "Simply, a high five is a gesture that promotes positive “feel-good” feelings ephemerally. We do high fives to make a celebration short.", price: 12 }

var selected_product

var product_selected_title
var product_selected_desc
var product_selected_price
var product_selected_time

var interval_countdown
var countdown_alarm = new Audio('countdown_alarm.ogg')

//Navigation

document.getElementById("product_header").addEventListener("click", function () {
    if (document.getElementById("product_section").style.display == "none") {
        document.getElementById("product_section").style.display = "block"
        document.getElementById("profile_section").style.display = "none"
        document.getElementById("product_selected_section").style.display = "none"
        clearTimer()
    }
    else {
        document.getElementById("product_section").style.display = "none"
    }
}, false)

document.getElementById("friends_header").addEventListener("click", function () {
    if (document.getElementById("friends_section").style.display == "none") {
        document.getElementById("friends_section").style.display = "block"
        document.getElementById("product_selected_section").style.display = "none"
        clearTimer()
    }
    else {
        document.getElementById("friends_section").style.display = "none"
    }
}, false)

document.getElementById("profile_header").addEventListener("click", function () {
    if (document.getElementById("profile_section").style.display == "none") {
        document.getElementById("profile_section").style.display = "block"
        document.getElementById("product_section").style.display = "none"
        document.getElementById("product_selected_section").style.display = "none"
        clearTimer()
    }
    else {
        document.getElementById("profile_section").style.display = "none"
    }
}, false)


//Product section navigation

var allProductButtons = document.querySelectorAll(".product_listing_button")
allProductButtons.forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById("product_section").style.display = "none"
        document.getElementById("product_selected_section").style.display = "block"

        product_selected_title = this.parentElement.parentElement.children[0].children[0].innerHTML
        product_selected_desc = this.parentElement.parentElement.children[0].children[1].innerHTML
        product_selected_price = this.parentElement.children[0].children[0].children[0].innerHTML
        product_selected_time = Math.floor(Math.random() * 60)

        document.getElementById("product_selected_title").innerHTML = product_selected_title
        document.getElementById("product_selected_desc").innerHTML = product_selected_desc
        document.getElementById("product_selected_price").innerHTML = product_selected_price

        updateTasteGraph()

    })
})


var allProductListings = document.querySelectorAll(".product_listing")
allProductListings.forEach(item => {

    item.addEventListener("click", function () {

        allProductListings.forEach(item => {
            item.children[1].children[0].classList.remove("product_listing_functions_selected");
        })

        allProductButtons.forEach(item => {
            item.style.display = "none"
        })

        item.children[1].children[0].classList.add("product_listing_functions_selected");
        item.children[1].children[1].style.display = "flex"

    })
})

document.getElementById("cook_now_button").addEventListener('click', function () {
    document.getElementById("product_cooking_section").style.display = "flex"
    document.getElementById("product_selected_section").style.display = "none"
    startTimer(product_selected_time, document.getElementById("countdown_timer"))
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
    document.getElementById("taste_price").innerHTML = String(parseInt(document.getElementById("anger_slider").value) + parseInt(document.getElementById("love_slider").value) + parseInt(document.getElementById("happiness_slider").value) + parseInt(document.getElementById("sadness_slider").value) + parseInt(JSON.parse(product_selected_price))) + "EC"
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
                document.getElementById("countdown_timer").classList.remove("flash_element")
                document.getElementById("product_cooking_section").style.display = "none"
                document.getElementById("product_section").style.display = "block"
            }, 10000)
        }

        --timer;
        display.textContent = minutes + ":" + seconds;

    }, 1000);

}