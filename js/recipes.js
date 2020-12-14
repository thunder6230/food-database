
createRecipesArray()
const recipesToDom = () => {
    site_main.innerHTML = `
    <div class='recipes_div'>
        <form action="">
                <input type="text">
                <button type="submit">Search for Recipe</button>
            </form>
            <div class="results">
            </div>
    </div>
    `
    randomRecipesArr = []
    createRandomArr(6)
    createRecipeDiv(randomRecipesArr)
}

