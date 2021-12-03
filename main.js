
let searchInput = document.querySelector("#food-input");
let searchButton = document.querySelector("#recipe-button");

function handleRecipeClick() {
    let searchString = searchInput.value;
    fetchRecipe(searchString);
}
searchButton.addEventListener("click", handleRecipeClick);             //searchButton event listener


function addIngredientToList(ingredient) {
    let newListItem = document.createElement("li");
    newListItem.innerText = ingredient.text;
    let list = document.querySelector("#ingredients-list");
    list.appendChild(newListItem);
}


async function fetchRecipe(searchString) {

    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=54bc5425&app_key=d7b4349e0a80c3457542551922ada680`);
    let data = await response.json();
    console.log(data)

    let recipe = data.hits[0].recipe;                   //recipe = the first search hit
    console.log(recipe);


    let recipeNameString = recipe.label;
    console.log(recipeNameString);
    let recipeName = document.querySelector("#recipe-name");
    console.log(recipeName);
    recipeName.innerText = recipeNameString;            //updates the meal name
    
    
    let recipeThumbnailURL = recipe.images.THUMBNAIL.url;
    let recipeThumbnail = document.querySelector("#recipe-thumbnail");
    recipeThumbnail.src = recipeThumbnailURL;           //updates the thmubnail image
    
    let recipeIngredients = recipe.ingredients;
    let prevIngredLis = document.querySelectorAll("#ingredients-list li");
    console.log(prevIngredLis);
    for(let i=0; i<prevIngredLis.length; i++) {
        prevIngredLis[i].remove();
    }                                     //deletes previous ingredient list
    recipeIngredients.forEach(addIngredientToList);     //adds the new ingredients list
}


fetchRecipe("tofu");








// to delete previous ingredients:





// let cardContainer = document.querySelector("#card-container")
// function createrecipeCard() {
//     let recipeCard = document.createElement("div");
//     //add class
//     recipeCard.classList.add("cardStyle");
//     //append to #card-container
//     cardContainer.appendChild("recipeCard");
// }