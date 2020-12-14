let searchResultArr = []
// createRecipesArray()
const createRecipeDiv = (recipeArr, placeClass) => {
    let recipes_div = document.querySelector(`.${placeClass}`)
    recipes_div.innerHTML = ""
    recipeArr.map((recipe,index) => {
        recipes_div.innerHTML += `
        <div class="recipe_card" id="${index}"onclick="showRecipe(${index})">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>Ready in ${recipe.readyInMinutes} minutes</p>
            <ul>
        `
        recipe.diets.map(diet => {
            document.querySelectorAll(".recipe_card")[index].innerHTML += `<li>${diet}</li>`
        })
        document.querySelector(".recipe_card").innerHTML += `
        </ul>
        </div>`
    })
}

const showRecipe = (index) => {
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
        recipe_div.innerHTML += `
           <i class="fas fa-window-close" onclick="recipesToDom(${generate})"></i>
           
        `
         $(".recipe_detail").fadeIn(500)
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
            <input type="text" class="search_input" required>
            <p class="error"></p>
            <button class="search_btn" onclick="searchForMeals()">Search for Recipe</button>
        </div>
        <div class="results">
        </div>
    </div>
    `
    if(generateNew) {
        randomRecipesArr = []
        createRandomArr(6) 
    }
    createRecipeDiv(randomRecipesArr, "results")
    $(".recipes_div").fadeIn(500)
    
}





const searchForMeals = () => {
    console.log("getting the new data")
    getAllRecipes()
    $(".recipes_div .results").html(`
        <img src="/images/6.svg" alt="loading...">
    `)

    setTimeout( () => {
        searchResultArr = []
        let keyword = $(".search_input").val()
        if(keyword == ""){
            $(".search_div .error").text("Please add a keyword!")
        } else {
            //only letter edge case
            recipesArr.map(recipe => {
                keyword = keyword.toLowerCase()
                let recipeLow = recipe.title.toLowerCase()
                if (recipeLow.indexOf(keyword) != -1) {
                    searchResultArr.push(recipe)
                }
            })
            console.log(searchResultArr)
            $(".recipes_div").hide() 
            createRecipeDiv(searchResultArr, "results")
            $(".recipes_div").fadeIn(500) 
            }
    
    }, 5000);
    
    
}


const getAllRecipes = () => {
    if (recipesArr.length == 50){
        recipesArr = []

        $.getJSON("/modules/recipes.json",
            (data) => {
                data.map((recipe) => recipesArr.push(recipe))
            }
        )
    }
    
}









