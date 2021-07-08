console.log("App connected")

var interval_countdown
var countdown_alarm = new Audio('countdown_alarm.ogg')

//Food database

const Wasabi_macaroni = { title: "Wasabi Macaroni", desc: "Real fresh-grated wasabi tastes bright and green with a touch of quickly fading heat. It is pungent, yet delicate enough to let the flavor of raw fish shine.", background: "gradient (1).gif" }
const Hot_shower = { title: "Hot Shower", desc: "The heat warms up your muscles and makes you more pliable. Your muscles are relaxed, and you're not as tense. Hot showers can relieve tension and soothe stiff muscles.", background: "gradient (2).gif" }
const Mothers_love = { title: "Mother’s Love", desc: "Mother love is… the deep, all-embracing, all-accepting, nourishing, nurturing, warm, safe, supportive love that soothes the places inside our hearts that feel scared and lonely.", background: "gradient (3).gif" }
const Perfect_highfive = { title: "Perfect Highfive", desc: "Imagine this. You just scored the winning shot in your basketball game. Your teammates run up to you to congratulate you. They yell “Great shot!” and give you a big round of High Fives. You are thrilled, happy, connected, and, most importantly, appreciated.", background: "gradient (4).gif" }
const Traffic_jam = { title: "Traffic Jam", desc: "Simply, a high five is a gesture that promotes positive “feel-good” feelings ephemerally. We do high fives to make a celebration short.", background: "gradient (5).gif" }
const Three_Days_Weekend = { title: "Three-Days-Weekend", desc: "“Who says you need to cash in all your vacation days at once? In fact, according to experts, it seems that taking short vacations throughout the year may be more beneficial to your mental well-being than taking one long vacation.” Big society to his employees.", background: "gradient (6).gif" }
const Clean_House = { title: "Clean House", desc: "Many people carry tension in their neck, head, and shoulders, and the motion of the scalp massage helps relax these muscles. It also causes the body to release endorphins and serotonin, which are natural “feel-good” chemicals that help create a sense of calm.", background: "gradient (7).gif" }
const New_Haircut = { title: "New Haircut", desc: "A clean home carries a strong aura of perfection, an ambiance of clarity and a sense of wholesomeness. Truth be told, everyone loves to walk into a clean home but not everyone has the will to maintain a clean home. In fact, if you have ever had a clean home, you must have had at least one of these unique feelings.", background: "gradient (8).gif" }
const Fresh_Sheets = { title: "Fresh Sheets", desc: "There's something about being in a fresh environment that gives you peace of mind. It's similar to the feeling you get when you walk into an organized room versus a cluttered space, but the effects are magnified because the sheets are also touching your skin, employing another one of your senses.", background: "gradient (9).gif" }
const One_Night_Stand = { title: "One Night Stand", desc: "Don't expect a hookup to turn into anything more. Don't confuse sexual intimacy and emotional intimacy. Don't mistake a desire to hook up again for a desire to deepen the relationship. Don't let the uncertainty get the best of you. But it still feels good.", background: "gradient (10).gif" }
const Solved_Math_Problem = { title: "Solved Math Problem", desc: "Problem-solving skills help people understand their environment, identify opportunities, assess the impact of alternatives and make choices that lead to changes that they perceive as desirable. For some people, problem-solving is an innate ability – something that seems to come naturally.", background: "gradient (11).gif" }
const Mothers_Love = { title: "Mother's Love", desc: "It's as though each mother has a device implanted the moment her children are born. (or not) Her love for her children will always remain the same. It's strong enough and big enough to overcome anything standing in the way of their children's happiness.", background: "gradient (12).gif" }
const Baby_Kittens = { title: "Baby Kittens", desc: "Awwwwwwwwwww <3", background: "gradient (13).gif" }
const Forest_Walk = { title: "Forest Walk", desc: "It may even feel like you're actually breathing for the first time in your life. The air in the forest smells good. It may smell like damp moss, rain, wet tree trunks, flowers, and needle-covered path. It may smell like a tree stump that is already creating new life, or even snow, frost, and softwood. hobbo", background: "gradient (14).gif" }
const Inside_Jokes = { title: "Inside Jokes", desc: "The funniest jokes—the ones I laugh at the hardest for the longest—are the inside jokes with my friends. Because we know each other so well, those jokes are special to just us. They come from a shared understanding that only we get.", background: "gradient (15).gif" }
const Job_Promotion = { title: "Job Promotion", desc: "#1 Thank you for the promotion! I am excited and look forward to adding more value to the team in my new position. #2 Thank you for the promotion. I appreciate that my effort in learning the [new skill] is being recognized.", background: "gradient (16).gif" }
const Mars_Landing = { title: "Mars Landing", desc: "Based on measurements of the Marsian soil and NASA guidelines on skin contact with hot objects, you would probably be able to press a bare hand against the hottest lunar soil without feeling uncomfortably warm. But if your hand hit a rock, you might find yourself yanking it back in pain.", background: "gradient (17).gif" }
const Free_Samples = { title: "Free Samples", desc: "It only worth it because it's free.", background: "gradient (18).gif" }
const First_Kiss = { title: "First Kiss", desc: "Chances are, your first kiss will be gentle and sweet. It may possibly be that you and your partner are both new to the kissing scene so they may not know what to do either. Although the experience may not be that long, the tender feeling of the person's lips will stay with you for a very long time.", background: "gradient (19).gif" }
const Break_up = { title: "Break-up", desc: "After a break-up many people experience a range of difficult feelings, like sadness, anger or guilt, which may lead to feeling rejected, confused or lonely. You might even feel relief which can be just as confusing. Some people feel as though their world has turned upside down and that things will never be good again.", background: "gradient (20).gif" }
const Train_Delays = { title: "Train Delays", desc: "If you're delayed and arrive at your destination more than half an hour late, you'll usually be able to get some money back. Some train companies will also give you compensation if your train is more than 15 minutes late. You need to keep your train tickets to get a refund.", background: "gradient (21).gif" }
const Losing_Your_Job = { title: "Losing Your Job", desc: "Aside from the obvious financial anguish it can cause, the stress of losing a job can also take a heavy toll on your mood, relationships, and overall mental and emotional health. ... Suddenly finding yourself out of work can leave you feeling hurt, angry, or depressed.", background: "gradient (22).gif" }
const Snow_Day = { title: "Snow Day", desc: "Getting the right amount of shuteye (seven to nine hours for most people) can, among its plethora of benefits, make us less stressed, help maintain a healthy metabolism, ward off Alzheimer's disease, make us happier, and boost immunity.", background: "gradient (23).gif" }
const Friday_Hungover = { title: "Friday Hungover", desc: "Sit in the shower. Wear soft clothes. Drink every liquid imaginable, then, when you feel you've maxed your quota of liquids, drink at least three more. Change your email background to grayscale. Have an anti-spiralling mantra. Throw-up before going to work.", background: "gradient (24).gif" }
const Grandmas_Kiss = { title: "Grandma's Kiss", desc: "Of course, as a Grandma I live for the kisses, hugs and hand holding. Those physical displays and interplays of affection have a short life before the child feels that they are too grown up for it and it makes them feel or appear babyish.", background: "gradient (25).gif" }
const Rainy_Sunday = { title: "Rainy Sunday", desc: "If you feel down during a downpour, it's not your imagination: Bad weather can indeed have a negative effect on your emotions. ... This group feels angrier and less happy on days with more precipitation.", background: "gradient (26).gif" }
const Friend_Of_The_Animals = { title: "Friend Of The Animals", desc: "Ostriches are attracted to humans. They will commonly preform mating dances for humans and prefer to try and impress humans rather than other ostriches. Elephants also show signs of thinking that animals are adorable by petting them with their trunk.", background: "gradient (27).gif" }

var item_categories = ["cat_Daily", "cat_YourList", "cat_YourFriends", "cat_Trending", "cat_LikedThis"]

var products = [Wasabi_macaroni, Hot_shower, Mothers_love, Perfect_highfive, Traffic_jam, Three_Days_Weekend, Clean_House, New_Haircut, Fresh_Sheets, One_Night_Stand, Solved_Math_Problem, Mothers_Love, Baby_Kittens, Forest_Walk, Inside_Jokes, Job_Promotion, Mars_Landing, Free_Samples, First_Kiss, Break_up, Train_Delays, Losing_Your_Job, Snow_Day, Friday_Hungover, Grandmas_Kiss, Rainy_Sunday, Friend_Of_The_Animals]

//Profile database

var profile_activity = ["Loved", "Hated", "Is tasting", "Is tasting"]
var profile_pic_number = 14

var name_part1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var name_part2 = ["Б", "Г", "Ґ", "Д", "Ђ", "Ё", "Є", "Ж", "З", "И", "Ї", "Й", "Л", "Љ", "Њ", "П", "Ћ", "У", "Ў", "Ф", "Х", "Ц", "Ч", "Џ", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "б", "в", "г", "ґ", "д", "ђ", "ё", "є", "ж", "з", "и", "ї", "й", "к", "л", "љ", "м", "н", "њ", "п", "т", "ћ", "ў", "ф", "ц", "ч", "џ", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "Γ", "Δ", "Θ", "Λ", "Ξ", "Ο", "Π", "Σ", "Φ", "Ψ", "Ω", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω", "ά", "Ά", "έ", "Έ", "έ", "Ή", "ί", "ϊ", "ΐ", "Ί", "ό", "Ό", "ύ", "ΰ", "ϋ", "Ύ", "Ϋ", "Ώ", "Ă", "Â", "Ê", "Ô", "Ơ", "Ư", "ă", "â", "ê", "ô", "ơ", "ư"]
var name_part3 = ["B-52", "F-18", "F-16", "U-2", "MiG-21", "Tu-95", "A-12", "P-51", "A-10"]

//Populate products

var product_selected
var product_selected_price
var product_selected_time

function updateProductSelected(productNow) {

    product_selected_price = Math.floor(Math.random() * 100) + 10
    product_selected_time = Math.floor(Math.random() * 60) + 10

    console.log(productNow)
    product_selected = productNow

    document.getElementById("profile_section").style.display = "none"
    document.getElementById("product_selected_section").style.display = "flex"

    document.getElementById("product_selected_title").innerHTML = product_selected.title
    document.getElementById("product_selected_desc").innerHTML = product_selected.desc
    document.getElementById("product_selected_price").innerHTML = product_selected_price

    var bgImage = "gradients/" + product_selected.background
    document.getElementById("taste_graph_svg").style.backgroundImage = "url('" + bgImage + "')";
    document.getElementById("cook_now_button").style.backgroundImage = "url('" + bgImage + "')";
    document.getElementById("product_cooking_section").style.backgroundImage = "url('" + bgImage + "')";

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

    var item_category = item_categories[Math.floor(Math.random() * item_categories.length)]

    document.getElementById(item_category).appendChild(product);
})

//Populate friends

for (let i = 0; i < (Math.floor(Math.random() * 20) + 5); i++) {

    var friend_name = name_part1[Math.floor(Math.random() * name_part1.length)] + " " + name_part2[Math.floor(Math.random() * name_part2.length)] + " " + name_part3[Math.floor(Math.random() * name_part3.length)]

    var friend = document.createElement("div")
    friend.classList.add("friends_listing")
    friend.innerHTML = "<div class='friends_listing_icon'>" + "<img src='profile_pics/profile_pic (" + (Math.floor(Math.random() * profile_pic_number) + 1) + ").jpg'>" + "</div>" + "<div>" + "<h5>" + friend_name + "</h5>" + "<p>" + profile_activity[Math.floor(Math.random() * profile_activity.length)] + "</p>" + " <p style='font-weight: 700;'>" + products[Math.floor(Math.random() * products.length)].title + "</p>" + "</div>" + "</div>"

    document.getElementById("friends_section").appendChild(friend);

}

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
    document.getElementById("profile_pic").src = "profile_pics/profile_pic (" + (Math.floor(Math.random() * profile_pic_number) + 1) + ").jpg"
    document.getElementById("cat_LikedThis_title").innerHTML = products[Math.floor(Math.random() * products.length)].title
    updateStarRating()
}

updateProfileInfo()

//Navigation

document.getElementById("start_button").addEventListener('click', function () {
    document.getElementById("profile_section").style.display = "block"
    document.getElementById("intro_section").style.display = "none"
})

document.getElementById("back_button_button").addEventListener('click', function () {
    document.getElementById("product_selected_section").style.display = "none"
    document.getElementById("profile_section").style.display = "block"
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
    document.getElementById("taste_price").innerHTML = String(parseInt(document.getElementById("anger_slider").value) + parseInt(document.getElementById("love_slider").value) + parseInt(document.getElementById("happiness_slider").value) + parseInt(document.getElementById("sadness_slider").value) + product_selected_price) + "EC"
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
            document.getElementById("product_cooking_section").style.filter = "invert(1)"
            document.querySelectorAll("h2.scrolling_bar_content_opp, h2.scrolling_bar_content").forEach(item => {
                item.innerHTML = "FINISHED . FINISHED . FINISHED"
            })
            setTimeout(function () {
                location.reload();
            }, 10000)
        }

        --timer;
        display.textContent = minutes + ":" + seconds;

    }, 1000);

}