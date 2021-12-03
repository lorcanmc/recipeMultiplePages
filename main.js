
let searchInput = document.querySelector("#food-input");

function handleRecipeClick() {
    console.log("hello")
    let searchString = searchInput.value;
    console.log(searchString);

    fetchRecipe(searchString);
}

let searchButton = document.querySelector("#recipe-button")

searchButton.addEventListener("click", handleRecipeClick);





async function fetchRecipe(searchString) {

    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=54bc5425&app_key=d7b4349e0a80c3457542551922ada680`);
    let data = await response.json();
    console.log(data)

    let recipe = data.hits[0].recipe;
    console.log(recipe);
    let recipeName = recipe.label;
    console.log(recipeName);
    let recipeimages = recipe.images;
    console.log(recipeimages);
    let recipeInredients = recipe.ingredients
    console.log(recipeInredients);
}


fetchRecipe("tofu");