let menuIsOpen = false
const summaryArr = Array.from(document.querySelectorAll(".menu_summary"))
const menuDescriptions = [
    {
        name:"Home",
        description: "Back to home screen"
    },
    {
        name: "Diets",
        description: "Some informations collected about the different diets like Omnivore, Vegetarian, Ketogenic and so on ..."
    },
    {
        name: "Recipes",
        description: "You can search for many delicious meals in our large database ... "
    },
    {
        name: "Health",
        description: "The best ways to keep our health and immunsystem on peak"
    },
    {
        name: "Eating Disorders",
        description: "Some thoughs about the top health related eating disorders like Diabetes, Glutenintolerance and ..."
    },
]
const menu_elements = Array.from(document.querySelectorAll(".nav_menu a"))

$(".menu_off").hide()

summaryArr.map((summary,index) => {
    index != 0 ? summary.style.display = "none" : null
    
})

$(".nav_menu a").mouseover((e)=> {

    let id = e.target.getAttribute("id")
    $(".menu_summary").hide()
    $(summaryArr[id]).fadeIn(200)
   
})

const openAndCloseMenu = (e) => {
    menuIsOpen = !menuIsOpen

    if(menuIsOpen) {
        $(".menu_off").slideDown();
    } else {
        $(".menu_off").slideUp();
    }

}



$("#menu_btn").click(() => {
    openAndCloseMenu()
})
$(".nav_menu li").click(()=> {
    openAndCloseMenu()
    
})
$(".nav_menu a").click((e) => {
    console.log(e.target)
    menu_elements.map(element => {
        element.classList.remove("active")
    })
    $(".active_page").text(e.target.textContent)
    e.target.parentElement.classList.add("active")
})
$(".site_main").click(()=> {
    if(menuIsOpen){
        openAndCloseMenu()
    }
})
$(".wrapper").click((e) => {
    if(menuIsOpen){
       if(e.target.classList.contains("wrapper")){
        openAndCloseMenu()
    } 
    }
    
})


console.log(menuIsOpen)