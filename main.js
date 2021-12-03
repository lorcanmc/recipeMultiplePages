
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

    //chooses a recipe object and stores it in variable called recipe
    let randomIndex = Math.floor(Math.random()*data.hits.length)
    let recipe = data.hits[randomIndex].recipe;             
    console.log(recipe);

    //upper background image
    let backgroundImageURL = recipe.images.REGULAR.url;
    console.log(backgroundImageURL);
    let backgroundImageDiv = document.querySelector("#show-recipe");
    console.log(backgroundImageDiv);
    backgroundImageDiv.style.background = `url(${backgroundImageURL})`;


    //meal name
    let recipeNameString = recipe.label;
    console.log(recipeNameString);
    let recipeName = document.querySelector("#recipe-name");
    console.log(recipeName);
    recipeName.innerText = recipeNameString;        
    
    // //thumbnail image
    // let recipeThumbnailURL = recipe.images.THUMBNAIL.url;
    // let recipeThumbnail = document.querySelector("#recipe-thumbnail");
    // recipeThumbnail.src = recipeThumbnailURL;
    
    //ingredients list
    let recipeIngredients = recipe.ingredients;
    let prevIngredLis = document.querySelectorAll("#ingredients-list li");
    for(let i=0; i<prevIngredLis.length; i++) {
        prevIngredLis[i].remove();
    }                                    //deletes previous ingredient list
    recipeIngredients.forEach(addIngredientToList);     //adds the new ingredients list

    // OPTIONS FOR LABELS:
    //cuisineType
    //dishType
    //mealType
    //healthLabel
    //dietLabel    //dishType
    //mealType
    //healthLabel
    //dietLabel

}


fetchRecipe("tofu");






// let cardContainer = document.querySelector("#card-container")
// function createrecipeCard() {
//     let recipeCard = document.createElement("div");
//     //add class
//     recipeCard.classList.add("cardStyle");
//     //append to #card-container
//     cardContainer.appendChild("recipeCard");
// }