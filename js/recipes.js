let searchResultArr = []
let search_counter = 0
let checkboxArr
let isVegan = false
let isVegetarian = false
let isGlutenFree = false
let isLactoseFree = false

const createRecipeDiv = (array, placeClass, backToDiet, id) => {
    window.scrollTo(0, 0);
    console.log("loading recipes cards")
    if(array.length > 0){
        let recipes_div = document.querySelector(`.${placeClass}`)
        recipes_div.innerHTML = ""
        array.map((recipe,index) => {
            recipes_div.innerHTML += `
            <div class="recipe_card" id="${index}"onclick="showRecipe(${index}, ${backToDiet}, ${id})">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h2>${recipe.title}</h2>
                <p><i class="fas fa-clock"></i> Ready in ${recipe.readyInMinutes} minutes</p>
                <ul class="recipe_preferences">`
                recipe.diets.map(diet => {
                    document.querySelectorAll(".recipe_preferences")[index].innerHTML += `<li>${diet}</li>`
                })
            document.querySelector(".recipe_card").innerHTML += `
                </ul>
            </div>`
        })  
    }
}

const showRecipe = (index, backToDiet, id) => {
    window.scrollTo(0, 0);
    let generate
    randomRecipesArr.length == 0 ? generate = true : generate = false
    let recipe = recipesArr[index]
    site_main.innerHTML = `<div class="recipe_detail" style='display: none;'></div>`
    recipe_div = document.querySelector(".recipe_detail")
    recipe_div.innerHTML = `
        <h2>${recipe.title}</h2>
        <ul>`
        recipe.diets.map(diet => {
            recipe_div.innerHTML += `<li>${diet}</li>`
        })
        recipe_div.innerHTML += `
        </ul>
        <p>${recipe.readyInMinutes}</p>
        <img src="${recipe.image}" alt="${recipe.title}">
        <div class="total_time">
            <span>Total time</span>
            <p>minutes</p>
        </div>
        <div class="ingredients">`
            recipe.extendedIngredients.map(ingredient => {
                recipe_div.innerHTML += `
                    <p>${ingredient.name}</p>
                    <p>${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}</p>
                `
            })
        recipe_div.innerHTML += `</div>`
        if(recipe.winePairing){
            recipe_div.innerHTML += `
        <div class="wines">
            <h3>Wine recommendation:</h3>
            <ul>
        }`
        
            recipe.winePairing.pairedWines.map(wine => {
                recipe_div.innerHTML += `<li>${wine}</li>`
            })
        recipe_div.innerHTML += `       
            </ul>
        </div>`
        }
        if(backToDiet){
           recipe_div.innerHTML += `
           <i class="fas fa-window-close" onclick="showDietDescription(${id})"></i>
           
        ` 
        }else {
            recipe_div.innerHTML += `
           <i class="fas fa-window-close" onclick="recipesToDom(${generate})"></i>
           
        `
        }
        
         $(".recipe_detail").fadeIn(500)

        savePageToSessionStorage($(".site_main"))
}

const recipesToDom = (generateNew) => {

    window.scrollTo(0, 0);
    recipe_menu_class = menu_elements[2].classList
    if (!recipe_menu_class.contains("active")) {
        menu_elements.map(element => {
            element.classList.remove("active")
        })
        $(".active_page").text("Recipes")
        recipe_menu_class.add("active")
    }
    site_main.innerHTML = `
    <div class='recipes_div' style="display: none;">
        <div class="search_div">

            <div class="search_header">
                <input type="text" class="search_input" required>
                <button class="search_btn" onclick="searchForMeals()">Search for Recipe</button>
            </div>
            <div class="input_checkbox">
                <div>
                    <label for="vegetarian">Vegetarian <img src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"/></label>
                    <input type="checkbox" name="vegetarian" id="vegetarian" onchange="onChangeVegetarian()">
                </div>
                <div>
                    <label for="vegetarian">Vegan <img src="https://img.icons8.com/cute-clipart/64/000000/natural-food.png"/></i></label>
                    <input type="checkbox" name="vegan" id="vegan" onchange="onChangeVegan()">
                </div>
                <div>
                    <label for="vegetarian">Glutenfree <img src="https://img.icons8.com/plasticine/100/000000/no-gluten.png"/></label>
                    <input type="checkbox" name="glutenfree" id="glutenfree" onchange="onChangeGlutenfree()">
                </div>
                <div>
                    <label for="vegetarian">Lactosefree <img src="https://img.icons8.com/cute-clipart/64/000000/no-milk.png"/></label>
                    <input type="checkbox" name="lactosefree" id="lactosefree" onchange="onChangeLactosefree()">
                </div>
            </div>
            
        </div>
        <div class="results">
        </div>
    </div>
    `
    if(generateNew) {
        randomRecipesArr = []
        createRandomArr(6) 
    }
    if(searchResultArr.length > 0){
        createRecipeDiv(searchResultArr, "results")
    } else {
        createRecipeDiv(randomRecipesArr, "results")
    }
    
    $(".recipes_div").fadeIn(500) 
    
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        if(menu_elements[2].classList.contains("active")){
            searchForMeals()
        }
    }
});
const onChangeVegetarian = () => {
    isVegetarian = !isVegetarian
}
const onChangeVegan = () => {
    isVegan = !isVegan
}
const onChangeGlutenfree = () => {
    isGlutenFree = !isGlutenFree
}
const onChangeLactosefree = () => {
    isLactoseFree = !isLactoseFree
}

const searchForMeals = () => {
    $(".search_div .error").text("")
    let regex = (/^[A-Za-z]+$/)
    let keyword = $(".search_input").val()
    if(keyword == ""){
        setErrorMessage("Please add a keyword!")
    }else if( keyword.match(regex) == null ) {
        setErrorMessage("Please write only letters!")
    } else {
        if(search_counter < 1) {
            $(".recipes_div .results").html(`
            <div class="search_message">
                <h1>Please be patient, the first loading takes a bit...</h1>
                <img src="/images/6.svg" alt="loading...">
            </div>    
            `)
            setTimeout( () => {
                resultsToDom(keyword)
            },3000);
            }else {
                resultsToDom(keyword)
            }
        search_counter++
    }
}


// const getAllRecipes = () => {
//     if (recipesArr.length < 100){
        
//     }
// }

const resultsToDom = (keyword) => {

    searchResultArr = []
    //only letter edge case
    recipesArr.map(recipe => {
        keyword = keyword.toLowerCase()
        let recipeLow = recipe.title.toLowerCase()
        if (recipeLow.indexOf(keyword) != -1) {
            searchResultArr.push(recipe)
        }
    })
    if (isVegetarian){
        searchResultArr = searchResultArr.filter(recipe => recipe.vegetarian)
    }
    if (isVegan){
        searchResultArr = searchResultArr.filter(recipe => recipe.vegan)
    }
    if (isGlutenFree){
        searchResultArr = searchResultArr.filter(recipe => recipe.glutenFree)
    }
    if (isLactoseFree){
        searchResultArr = searchResultArr.filter(recipe => recipe.dairyFree)
    }
    
    $(".recipes_div").hide() 
    if (searchResultArr.length > 0) {
        createRecipeDiv(searchResultArr, "results") 
    }   else {
        $(".recipes_div .results").html(`
            <div class="search_message">
                <h1>There is no such data, try again...</h1>
            </div>    
        `)
    }
    $(".recipes_div").fadeIn(500)
}


const setErrorMessage = (message) => {
    $(".search_btn").hide()
    $(".search_input").val(`${message}`)
    $(".search_input").addClass("error")
    setTimeout(() => {
        $(".search_input").val("")
        $(".search_input").removeClass("error")
        $(".search_btn").show()
    }, 2000);
}







