
let searchInput = document.querySelector("#food-input");

function handleRecipeClick() {
    console.log("hello")
    let searchString = searchInput.value;
    console.log(searchString);

    fetchRecipe(searchString);
}

let searchButton = document.querySelector("#recipe-button")

searchButton.addEventListener("click", handleRecipeClick);

// let cardContainer = document.querySelector("#card-container")

// function createrecipeCard() {
//     let recipeCard = document.createElement("div");
//     //add class
//     recipeCard.classList.add("cardStyle");
//     //append to #card-container
//     cardContainer.appendChild("recipeCard");
// }


async function fetchRecipe(searchString) {

    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=54bc5425&app_key=d7b4349e0a80c3457542551922ada680`);
    let data = await response.json();
    console.log(data)

    let recipe = data.hits[0].recipe;
    console.log(recipe);
    let recipeName = recipe.label;
    console.log(recipeName);



    let recipeThumbnailURL = recipe.images.THUMBNAIL.url;
    let recipeThumbnail = document.querySelector("#recipe-thumbnail");
    console.log(recipeThumbnailURL)
    recipeThumbnail.src = recipeThumbnailURL;
    
    let recipeIngredients = recipe.ingredients;
    

}


fetchRecipe("tofu");