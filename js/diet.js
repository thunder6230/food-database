const diets = [
    {
        id: 0,
        name: "Omnivore",
        image: "/images/diets/omnivore.jpg",
        body: `A mixture of meat, fish, fruit, vegetables, grains, etc. It can be healthy if following a balanced whole food or so-called "clean eating" diet1 or unhealthy if eating the Standard American Diet2.`,
        allowed: `Everything`,
        not_allowed: `n/a`
    },
    {
        id: 1,
        name: "Clean Eating",
        image: "/images/diets/cleaningeating.jpg",
        body: `Clean eating simply means eating natural foods instead of processed foods. Fresh fruits and vegetables, beans, lentils, nuts, eggs, plain dairy, unprocessed meat and fish, and less refined carbohydrates (e.g. brown rice, oats, quinoa) are all acceptable foods. Nutritionally empty foods, such as pasta, cereal, etc. made with wheat flour and most things you'll find in the salty or sweet snack aisles are out. If you've heard that tip about mostly shopping the perimeter of the supermarket and avoiding the aisles in the middle, it can definitely apply here.`,
        allowed: `All unprocessed foods. Meat, fish, produce, dairy, legumes, nuts, eggs, whole grains.`,
        not_allowed: `Processed foods. White flour products, products with added refined sugar, etc.`
    },
    {
        id: 2,
        name: "Mediterranean",
        image: "/images/diets/mediterranean.jpg",
        body: `Often a top contender in "which diet is best" rankings, the Mediterranean Diet fits under the "omnivore" category. The Mediterranean Diet is a bit hard to define, since numerous countries border the Mediterranean Sea and they all have their own unique cuisines. Nonetheless, a Mediterranean-style diet is typically understood to mean one where:
        <ul>
            <li>consumption of red meat is substantially reduced</li>
            <li>eggs and dairy are eaten in moderation</li>
            <li>fish and seafood are enjoyed more often</li>
            <li>fruits, vegetables, whole grains, and legumes form the basis of the diet</li>
        </ul>
        <p>
        Mediterranean diets are also known to be higher in monounsaturated and polyunsaturated fats, from olive oil for example, rather than saturated fat. As you probably expect, this diet also focuses on natural, minimally processed foods, similar to the clean eating philosophy.</p>`,
        allowed: `Fruits, vegetables, whole grains, legumes, fish, chicken, olive oil, nuts, red wine`,
        not_allowed: `Eggs, dairy, red meat, highly processed grains, sweets and desserts`
    },
    {
        id: 3,
        name: "Whole30",
        image: "/images/diets/whole30.jpg",
        body: `The Whole30® program is a 30 day program designed to help people not just lose weight, but greatly improve their overall health. The difference between clean eating and Whole30 is that Whole30 is much, much more restrictive. No sweeteners. No alcohol. No grains, no legumes, no dairy. However, the creators of the diet don't expect you to eat this way the rest of your life. After the 30 day program, you are encouraged to "continue eating Whole30-ish every meal, every day, as long as that feels good to you," but you can happily enjoy any food that you deem worthy of the potentially negative health consequences. That is to say, when a truly special food experience comes along, you should take advantage of it. One of a kind dessert on vacation? Yes. Office vending machine cake? Probably not.`,
        allowed: `meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds`,
        not_allowed: `Added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.`
    },
    {
        id: 4,
        name: "Paleo",
        image: "/images/diets/paleo.jpg",
        body: `This diet is based on the belief that the best diet will align with how our ancient ancestors ate, before agricultural and industrial developments led to widespread changes in the typical human diet. Following a Paleo diet means following a clean eating diet, since ancient man definitely didn't have access to Oreos, Lunchables, or Lunchables with Oreos. The strictest form of the Paleo diet goes further, however, limiting additional foods that most would still consider clean. These foods are outlined in the list below.`,
        allowed: `Meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, sweet potatoes`,
        not_allowed: `Legumes, grains, dairy, refined sugar, processed foods`
    },
    {
        id: 5,
        name: "Ketogenic",
        image: "/images/diets/keto.jpg",
        body: `If the body does not have enough glucose, its preferred source of energy, it breaks down fat for energy instead. This process releases molecules known as ketones. "Ketosis" refers to this state of increased ketones in the blood. Low carb diets can cause ketosis, because carbohydrates are broken down into glucose during digestion. Thus, restricting carbohydrates reduces the amount of available glucose and creates the need for the body to get energy from other sources.4

        The ketogenic diet is a low carb diet specifically intended to produce ketosis in the body. Rather than focusing on eliminating specific foods, the ketogenic diet pays close attention to the ratio of carbohydrates, protein, and fat consumed. Commonly, followers of a ketogenic diet consume 60-75% calories from fat, 15-30% calories from protein, and 5-10% calories from carbs.5

        The Atkins diet is a famous low carb diet divided into four phases. The first three phases are designed to help a person lose weight, while the final phase is devoted to maintaining one's goal weight. The principle of ketosis is key to weight loss using the Atkins diet, but unlike the ketogenic diet, lists of "acceptable foods" are key.`,
        allowed: `Foods high in fat and/or protein but low in carbohydrates.`,
        not_allowed: `Foods high in carbohydrates, especially processed foods.`
    },
    {
        id: 6,
        name: "Gluten Free",
        image: "/images/diets/glutenfree.jpg",
        body: `Following a gluten free diet means eliminating gluten, the proteins found in wheat and some other grains. There are no other requirements, so a gluten free diet is not necessarily a healthy diet, since you could easily load up on gluten free pasta, cookies, and crackers. This is why a gluten free diet mostly makes sense if you truly have a gluten allergy or insensitivity, or if you cut out gluten while centering your diet around unprocessed foods.`,
        allowed: `Everything that doesn't contain gluten`,
        not_allowed: `Gluten-containing grains, such as wheat, barley, and rye, as well as any foods made from them`
    },
    {
        id: 7,
        name: "Grain Free",
        image: "/images/diets/grainfree.jpg",
        body: `The difference between gluten free and grain free is simple: a gluten free diet avoids grains that contain gluten, while a grain free diet avoids all grains, even those that do not contain gluten. This means a grain free diet is a gluten free diet (because it does not include wheat or gluten-containing grains), but a gluten free diet is not necessarily a grain free diet (because it can include grains that do not contain gluten, such as rice and corn.)

        It is difficult to find grain free processed foods, so going grain free could lead to a more healthful diet. However, if you don't have allergies that require a grain free diet, there is evidence to suggest whole grains can have beneficial health effects when eaten in the recommended quantities.`,
        allowed: `Everything that isn't a grain. Nut flours, chickpea flour, coconut flour, and potato starch are similar to grain-containing flours and starches, but are grain free. Amaranth, quinoa, and buckwheat are often excluded, even though they are technically not grains, but seeds. They are often called pseudo-grains.`,
        not_allowed: `Grains of any kind, including wheat, rye, barley, corn, rice, oats`
    },
    {
        id: 8,
        name: "GAPS",
        image: "/images/diets/gasp.jpg",
        body: `The GAPS diet is a program based upon the Specific Carbohydrate Diet (SCD). It claims to heal the gut and help treat numerous psychological conditions, including autism, ADHD, and depression. While there is plenty of anecdotal evidence suggesting the diet can be helpful, especially for those with digestive conditions, scientific evidence is lacking. However, research on the SCD does exist and appears promising.`,
        allowed: `The foods you may eat depend on which stage of GAPS you are in. Stage 1 is the most restrictive, allowing just homemade broths/stocks, boiled fish and meats, several types of cooked vegetables and onions, garlic, ginger, honey, salt, pepper, and small amounts of fermented vegetable juice and homemade yogurt.`,
        not_allowed: `Again, depends on which GAPS stage you are in, but stage 1 does not allow raw vegetables, grilled meats, eggs, fresh or dried herbs and spices, nuts, butter, cheese, etc. By the time you reach the last stage, Full GAPS, many of these foods are allowed.`
    },
    {
        id: 9,
        name: "Low FODMAP",
        image: "/images/diets/fodmap.jpg",
        body: `FODMAP stands for Fermentable Oligo-, Di-, Monosaccharides And Polyols. For those of us who aren't biochemists, these are carbohydrates found in fructose, lactose, wheat, garlic, onion, legumes, sugar alcohols, and stone fruit.10 Some individuals are sensitive to FODMAPs in the diet and experience unpleasant digestive side effects after consumption. For this reason, low FODMAP diets can be helpful for sufferers of IBS and other digestive disorders.`,
        allowed: `Foods low in FODMAPs. This includes meat, eggs, fish, lactose free dairy, some nuts, gluten-free grains, certain fruits and vegetables (e.g. bananas, blueberries, oranges, grapes, bell peppers, cucumber, kale, potatoes, tomatoes)`,
        not_allowed: `Foods high in FODMAPS. This includes high lactose dairy (like milk), cashews, pistachios, legumes, gluten-containing grains, apples, dried fruit, stone fruit, cauliflower, celery, mushrooms, onions, garlic, sugar alcohols (e.g. sorbitol, maltitol, xylitol)`
    },
    {
        id: 10,
        name: "Pescetarian",
        image: "/images/diets/pescetarian.jpg",
        body: `This diet includes just about everything except beef, poultry, pork, and other animal meats. As the name suggests, they do eat fish and other seafood. They may or may not eat eggs and dairy. `,
        allowed: `Fish, seafood, fruit, vegetables, grains`,
        not_allowed: `Meat`
    },
    {
        id: 11,
        name: "Vegetarian",
        image: "/images/diets/vegetarian.jpg",
        body: `This diet excludes all meat, fish, and animal by-products that require the animal to be killed (such as broth made from bones or gelatin). It is typically rich in legumes (e.g. beans and lentils), grains, fruits, vegetables, nuts, and seeds. Vegetarians who eat eggs but not dairy are known as ovo vegetarians while vegetarians who eat dairy but not eggs are known as lacto vegetarians.`,
        allowed: `Legumes, grains, fruit, vegetables, nuts, seeds, and often eggs, dairy, and honey`,
        not_allowed: `Meat, seafood, bone broth, gelatin`
    },
    {
        id: 12,
        name: "Vegan",
        image: "/images/diets/vegan.jpg",
        body: `This diet excludes all animal products, including meat, fish, dairy, eggs, and honey. Like the vegetarian diet, the vegan diet is centered around legumes, grains, fruits, vegetables, nuts, and seeds.`,
        allowed: `Legumes, grains, fruit, vegetables, nuts, seeds`,
        not_allowed: `Meat, seafood, bone broth, gelatin, eggs, dairy, honey`
    },
    {
        id: 13,
        name: "Fruitarian",
        image: "/images/diets/fruit.jpg",
        body: `This diet is, as the name suggests, a fruit-based diet. In its purest form, fruitarianism is truly limited to consuming fruit, though some fruitarians eat vegetables, nuts, and seeds.`,
        allowed: `Fruits`,
        not_allowed: `Everything else (in the strictest cases)`
    },
]
let dietsArr = []
let exampleRecipeArr = []
let randomNumbers = []
let lastPage
const site_main = document.querySelector('.site_main')


const createDietCards = () => {
    diets.map(diet => {
        dietsArr.push(`
            <div class="diet_card" onclick="showDietDescription(${diet.id}, true)">
                <img src="${diet.image}">
                <div class="diet_text">
                    <h2>${diet.name}</h2>
                </div>
            </div>
        `)
    })
}



const showDietDescription = (id) => {
    window.scrollTo(0, 0);
    let diet = diets[id]
    createExampleRecipeArray(diet)
    site_main.innerHTML = "<div class='diet_description' style='display: none;'></div>"
    const description = document.querySelector(".diet_description")
    description.innerHTML = `

        <div class="description_header">
            <h2>${diet.name}</h2>
            <i class="fas fa-window-close" onclick="dietsToDom()"></i>
        </div>

        <div class="description_body">
            <img src="${diet.image}" alt="${diet.name}">
            <p>${diet.body}</p>
            <p><strong>Allowed: </strong>${diet.allowed}</p>
            <p><strong>Not Allowed: </strong>${diet.not_allowed}</p>
        </div>
        
        <div class='recipes_div'>
            <h3>Some examples</h3>
            <div class="results">
            </div>
    </div>
    `
    createRecipeDiv(exampleRecipeArr, "results", true, id)
    $(".diet_description").fadeIn(500)
}

const createExampleRecipeArray = (diet) => {
    exampleRecipeArr = []
    randomNumbers = []
    temp = []
   
    if (diet.name == "Omnivore"){
        generateRandomNumber(recipesArr.length)
        randomNumbers.map(number => {
            exampleRecipeArr.push(recipesArr[number])
        })
    } else {
        if (diet.name == "Gluten Free"){
            temp = recipesArr.filter(recipe => recipe.glutenFree)
            generateRandomNumber(temp.length)
            randomNumbers.map(number => {
                exampleRecipeArr.push(temp[number])
            })
        } else if (diet.name == "Vegetarian"){
            temp = recipesArr.filter(recipe => recipe.vegetarian)
            console.log(temp)
            generateRandomNumber(temp.length)
            randomNumbers.map(number => {
                exampleRecipeArr.push(temp[number])
            })
        } else if (diet.name == "Vegan"){
            temp = recipesArr.filter(recipe => recipe.vegan)
            generateRandomNumber(temp.length)
            randomNumbers.map(number => {
                exampleRecipeArr.push(temp[number])
            })
        } else if (diet.name == "Low FODMAP") {
            temp = recipesArr.filter(recipe => recipe.lowFodmap)
            generateRandomNumber(temp.length)
            randomNumbers.map(number => {
                exampleRecipeArr.push(temp[number])
            })
            console.log(exampleRecipeArr)
        } else if (diet.name == "GAPS") {
            temp = recipesArr.filter(recipe => recipe.gaps == "yes")
            generateRandomNumber(temp.length)
            randomNumbers.map(number => {
                exampleRecipeArr.push(temp[number])
            })
        }
    }
}

const generateRandomNumber = (arrayLength) => {
    if (arrayLength < 3){
        for (let i = 0; i < arrayLength; i++){
            randomNumbers.push(i)
        }
    
    }else {
        for (let i = 0; i < 3; i++) {
         let number =  Math.floor(Math.random() * arrayLength)
         if (randomNumbers.includes(number)) {
             number =  Math.floor(Math.random() * arrayLength)
             randomNumbers.push(number)
         } else {
             randomNumbers.push(number)
         }
        }
    }
}

const dietsToDom = () => {
    window.scrollTo(0, 0);
    console.log("Diets have been listed...")
    site_main.innerHTML = ""
    site_main.innerHTML = "<div class='diets' style='display: none;'></div>"
    const diets_div = document.querySelector(".diets")
    dietsArr.map(diets => {
        diets_div.innerHTML += diets
    }) 
    $(".diets").fadeIn(500)
}

createDietCards()
