const key = '14d33b55d1534b6c80c05b0753b90016'
let randomRecipesArr = []

// let recipesArr = []


let recipesArr = []
$.getJSON("/js/recipes.json",
     (data) => {
        data.map(recipe => {
            recipesArr.push(recipe)
        })
    }
);
console.log(recipesArr)


// const fetchRecipes = async  (query_type, number) => {
//     const url = 'https://api.spoonacular.com/recipes/' + query_type + "?number=" + number + "&apiKey=" + key
//     let response = await fetch(url)
//     if (response.ok) {
//         let data = await response.json()
//         return data.recipes
//     } else {
//         console.error("Not found")
//     }

// }

// const createRecipesArray = () => {
//     if(recipesArr.length == 0){
//         fetchRecipes("random", 100).then(recipes => {
//                 recipes.map(recipe => recipesArr.push(recipe))
//         })
//     }
// }

const createRandomArr = (number) => {
    let randomNumbers = []
        for (let i = 0; i < number; i++) {
            randomNumbers.push(Math.floor(Math.random() * 100))
        }
        randomNumbers.map(number => {
            randomRecipesArr.push(recipesArr[number])
        })
        console.log(randomRecipesArr)
}


const createRecipeDiv = (recipeArr) => {
    let recipes_div = document.querySelector(".results")
    recipes_div.innerHTML = ""
    recipeArr.map((recipe,index) => {
        recipes_div.innerHTML += `
        <div class="recipe_card" onclick="showRecipe(${index})">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>Ready in ${recipe.readyInMinutes} minutes</p>
            <ul>
        `
        recipe.diets.map(diet => {
            document.querySelector(".recipe_card").innerHTML += `<li>${diet}</li>`
        })
        document.querySelector(".recipe_card").innerHTML += `
        </ul>
        </div>`
    })
}

const showRecipe = (index) => {
    console.log(recipesArr[index])
    let recipe = recipesArr[index]
    site_main.innerHTML = `<div class="recipe_detail"></div>`
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
        recipe_div.innerHTML += `</div>
        <div class="wines">
            <h3>Wine recommendation:</h3>
            <ul>`
            recipe.winePairing.pairedWines.map(wine => {
                recipe_div.innerHTML += `<li>${wine}</li>`
            })
        recipe_div.innerHTML += `       
            </ul>
        </div>

        <i class="fas fa-backspace" onclick="recipesToDom()"></i>

    `
}
