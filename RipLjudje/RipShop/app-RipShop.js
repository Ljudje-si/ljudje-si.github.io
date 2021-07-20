console.log("app connected")

var popup_mode = false
var rip_PIPEsystem = new Audio('rip_PIPEsystem.ogg');

// Products
const multifun_suit = { name: "The multifunctional suit", desc: "A green screen whole body suit that recycles all bodily fluids, ensures the optimal temperature and stimulates blood circulation in the body.", image: "https://cdn.shopify.com/s/files/1/0312/0801/3955/products/chroma-key-green-screen-bodysuit-front_1024x1024@2x.jpg", price: 300, badges: [{ text: "Only 30% oxygen polution", font_size: "16px", line_height: "18px", width: "90px" }, { text: "AIDS free", font_size: "24px", line_height: "25px", width: "60px" }] }

const plushie = { name: "Plushie", desc: "A big fluffy robotic plushie that has the ability to change forms - it can be a blanket, it can grow tentacles, it can roll around as a ball. It needs care and attention, it stimulates the effect of breathing, it’s warm, it purrs and it’s sometimes a bit naughty.", image: "https://images-na.ssl-images-amazon.com/images/I/61JPjxijn0L._SL1000_.jpg", price: 300, badges: [{ text: "Only 30% child labour!", font_size: "16px", line_height: "18px", width: "90px" }, { text: "Love is love", font_size: "24px", line_height: "25px", width: "60px" }] }

const dildos = { name: "Sex flex cylindars", desc: "Command your lot of new cylinders to expand your pleasure horizons. Buy a costumize version of pleasure and link your cylindar with all the sex slaves at your disposition. Multiplicate the change to enjoy meaningful sexual interactions with strangers. See you on sex flex app ;)", image: "img-products/sexflex_dildos.png", price: 300, badges: [{ text: "Only 30% child labour!", font_size: "16px", line_height: "18px", width: "90px" }, { text: "Love is love", font_size: "24px", line_height: "25px", width: "60px" }] }

// Sets products database
var all_products = [multifun_suit, plushie, dildos]

var person_stats_lables = ["Life", "Happiness", "Respect", "Love", "Romance", "Wit", "Intelligence"]
var aiBot_testamonials = ["“Best decision!”", "“Can't go wrong with this one!”", "“This was made for you!”", "“Guaranteed improvement!”"]

//Changes and setes all data for the product

function setProductBadges(current_product) {
    var product_badges = ''
    current_product.badges.forEach(item => {
        product_badges += "<div class='product_badge'><p style='" + "font-size: " + item.font_size + ";" + "line-height: " + item.line_height + ";" + "width: " + item.width + "'>" + item.text + "</p></div>"
    })
    document.getElementById("product_badges").innerHTML = String(product_badges)
}

var product_index = 0
var current_product = all_products[product_index];

function changeProduct() {

    if (popup_mode == false) {

        if (product_index > all_products.length - 1) { product_index = 0 }
        current_product = all_products[product_index]

        //Set fade in animation
        document.getElementById("main_plate").classList.remove("animate_fade_in");
        void document.getElementById("main_plate").offsetWidth;
        document.getElementById("main_plate").classList.add("animate_fade_in");

        //Set product info
        document.getElementById("product_name").innerHTML = current_product.name
        document.getElementById("product_description").innerHTML = current_product.desc
        document.getElementById("main_plate").style.backgroundImage = "url('" + current_product.image + "')"
        document.getElementById("product_price").innerHTML = String(current_product.price + "EC")
        document.getElementById("product_price_next").innerHTML = String((current_product.price + (Math.floor(Math.random() * 11) * 100)) + " EC")

        //Set AI bot testamonial
        document.getElementById("ai_testamonial").innerHTML = aiBot_testamonials[Math.floor(Math.random() * aiBot_testamonials.length)]

        //Set person stats
        var person_stats_lables_now = ["Life", "Happiness", "Respect", "Love", "Romance", "Wit", "Intelligence"]

        document.getElementById("stat1_graph").classList.remove("person_stats_graph_animation");
        void document.getElementById("stat1_graph").offsetWidth;
        var stat_value = Math.floor(Math.random() * 99)
        document.getElementById("stat1_lable").innerHTML = person_stats_lables_now.splice(Math.floor(Math.random() * person_stats_lables_now.length), 1)[0]
        document.getElementById("stat1_graph").style.setProperty('--value', String(stat_value - 8 + "%"))
        document.getElementById("stat1_graph").children[0].innerHTML = String(stat_value + "+")
        document.getElementById("stat1_graph").classList.add("person_stats_graph_animation");

        document.getElementById("stat2_graph").classList.remove("person_stats_graph_animation");
        void document.getElementById("stat2_graph").offsetWidth;
        stat_value = Math.floor(Math.random() * 99)
        document.getElementById("stat2_lable").innerHTML = person_stats_lables_now.splice(Math.floor(Math.random() * person_stats_lables_now.length), 1)[0]
        document.getElementById("stat2_graph").style.setProperty('--value', String(stat_value - 8 + "%"))
        document.getElementById("stat2_graph").children[0].innerHTML = String(stat_value + "+")
        document.getElementById("stat2_graph").classList.add("person_stats_graph_animation");

        document.getElementById("stat3_graph").classList.remove("person_stats_graph_animation");
        void document.getElementById("stat3_graph").offsetWidth;
        stat_value = Math.floor(Math.random() * 99)
        document.getElementById("stat3_lable").innerHTML = person_stats_lables_now.splice(Math.floor(Math.random() * person_stats_lables_now.length), 1)[0]
        document.getElementById("stat3_graph").style.setProperty('--value', String(stat_value - 8 + "%"))
        document.getElementById("stat3_graph").children[0].innerHTML = String(stat_value + "+")
        document.getElementById("stat3_graph").classList.add("person_stats_graph_animation");

        document.getElementById("stat4_graph").classList.remove("person_stats_graph_animation");
        void document.getElementById("stat4_graph").offsetWidth;
        stat_value = Math.floor(Math.random() * 99)
        document.getElementById("stat4_lable").innerHTML = person_stats_lables_now.splice(Math.floor(Math.random() * person_stats_lables_now.length, 1))[0]
        document.getElementById("stat4_graph").style.setProperty('--value', String(stat_value - 8 + "%"))
        document.getElementById("stat4_graph").children[0].innerHTML = String(stat_value + "+")
        document.getElementById("stat4_graph").classList.add("person_stats_graph_animation");

        //Set product badges
        document.getElementById("product_badges").innerHTML = ''

        //Set animation times
        var product_time = Math.floor(Math.random() * 29) + 30

        document.getElementById("buy_button").classList.remove("button_animation");
        document.getElementById("buy_button").style.setProperty('--duration', product_time);
        void document.getElementById("buy_button").offsetHeight;
        document.getElementById("buy_button").style.height = "160px"
        document.getElementById("buy_button").classList.add("button_animation");

        document.getElementById("time_bar_counter").classList.remove("timebar_animation");
        document.getElementById("time_bar_counter").style.setProperty('--duration', product_time);
        void document.getElementById("time_bar_counter").offsetWidth;
        document.getElementById("time_bar_counter").style.width = "100%"
        document.getElementById("time_bar_counter").classList.add("timebar_animation");

        //Ser repeat transition
        setTimeout(setProductBadges, (((product_time * 1000) + 500) / 2), current_product);
        setTimeout(changeProduct, (product_time * 1000) + 500);

        product_index++
        console.log(product_index)

    }

}

var delivery_bar_msgs_index = 0
var delivery_bar_msgs = ["Finding citizen location", "Tracking Neurolink GPS coordinates", "Location found: Vetrinjska ulica 30 - living room", "Assembling item components", "Inserting shippment in RiverTM P.I.P.E. system", "Travelling in RiverTM P.I.P.E. system", "RiverTM cares about your exsistence", "Return the care. Buy more from RiverTM", "Shipmnet stuck!"]

function delivery_bar_msg() {

    if (delivery_bar_msgs_index < delivery_bar_msgs.length) {
        document.getElementById("delivery_bar_msg").innerHTML = delivery_bar_msgs[delivery_bar_msgs_index]
        delivery_bar_msgs_index++
        setTimeout(delivery_bar_msg, 4000)
    }
}

function product_popup() {

    rip_PIPEsystem.play();
    popup_mode = true

    document.getElementById("popup_buy").style.display = "flex"

    document.getElementById("citizen_id").innerHTML = '#' + Math.floor(Math.random() * 1E16)
    document.getElementById("product_delivered_img").src = current_product.image
    document.getElementById("product_delivered_name").innerHTML = current_product.name
    document.getElementById("product_delivered_desc").innerHTML = current_product.desc
    document.getElementById("product_delivered_price").innerHTML = current_product.price + "EC"
    var product_delivered_discount = Math.floor(Math.random() * 10)
    document.getElementById("product_delivered_discount").innerHTML = product_delivered_discount + "EC"
    document.getElementById("product_delivered_priceFinal").innerHTML = (current_product.price - product_delivered_discount) + "EC"
    document.getElementById("product_delivered_AccountBalance").innerHTML = "-" + (Math.floor(Math.random() * 10000) + 10000) + "." + Math.floor((Math.random() * 10000) + 10000)
    document.getElementById("product_delivered_SexflixHours").innerHTML = Math.floor((Math.random() * 10000) + 10000) + " hours"

    delivery_bar_msg()
    setTimeout(function () {
        document.getElementById("delivery_status").classList.remove("urgent_plate_yellow")
        document.getElementById("delivery_status").classList.add("urgent_plate_red")
        document.getElementById("delivery_status").children[0].innerHTML = "ERROR"
    }, 32000)

    setTimeout(function () {
        location.reload()
    }, 47000)

}

changeProduct()

document.getElementById("buy_button").addEventListener('click', function () {
    product_popup()
})