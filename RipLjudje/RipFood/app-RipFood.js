console.log("App connected")


document.getElementById("product_header").addEventListener("click", function () {
    if (document.getElementById("product_section").style.display == "none") {
        document.getElementById("product_section").style.display = "block"
        document.getElementById("profile_section").style.display = "none"
    }
    else {
        document.getElementById("product_section").style.display = "none"
    }
}, false)

document.getElementById("friends_header").addEventListener("click", function () {
    if (document.getElementById("friends_section").style.display == "none") {
        document.getElementById("friends_section").style.display = "block"
    }
    else {
        document.getElementById("friends_section").style.display = "none"
    }
}, false)

document.getElementById("profile_header").addEventListener("click", function () {
    if (document.getElementById("profile_section").style.display == "none") {
        document.getElementById("profile_section").style.display = "block"
        document.getElementById("product_section").style.display = "none"
    }
    else {
        document.getElementById("profile_section").style.display = "none"
    }
}, false)