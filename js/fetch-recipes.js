const key = '14d33b55d1534b6c80c05b0753b90016'
let randomRecipesArr = []
let recipesArr = []



// Get the first 100 entries of the database - make faster the pageloading
$("document").ready(()=> {
    $.getJSON("/modules/onload_recipes.json",
        (data) => {
            data.map((recipe,index) => {
                    recipesArr.push(recipe)
            })
        }
    )
})


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
            randomNumbers.push(Math.floor(Math.random() * 50))
        }
        randomNumbers.map(number => {
            randomRecipesArr.push(recipesArr[number])
        })
        console.log(randomRecipesArr)
}

