
let searchInput = document.querySelector("#food-input");
let searchButton = document.querySelector("#recipe-button");

//handling searchButton click
function handleRecipeClick() {
    let searchString = searchInput.value;
    fetchRecipe(searchString);
}
searchButton.addEventListener("click", handleRecipeClick);


//adds ingredient to the bullet point list in #recipe-info
function addIngredientToList(ingredient) {
    let newListItem = document.createElement("li");
    newListItem.innerText = ingredient.text;
    let list = document.querySelector("#ingredients-list");
    list.appendChild(newListItem);
}

//fetches data from API and updates webpage
async function fetchRecipe(searchString) {

    //fetches data
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=54bc5425&app_key=d7b4349e0a80c3457542551922ada680`);
    let data = await response.json();
    console.log(data);

    //chooses a recipe object and stores it in variable called recipe
    let randomIndex = Math.floor(Math.random()*data.hits.length);
    let recipe = data.hits[randomIndex].recipe;             
    console.log(recipe);

    //upper background image
    let backgroundImageURL = recipe.images.REGULAR.url;
    let backgroundImageDiv = document.querySelector("#show-recipe");
    backgroundImageDiv.style.background = `url(${backgroundImageURL})`;


    //meal name
    let recipeNameString = recipe.label;
    let recipeName = document.querySelector("#recipe-name");
    recipeName.innerText = recipeNameString;        
    
    //calories
    let caloriesNumber = Math.round(recipe.calories);
    let calories = document.querySelector("#calories");
    calories.innerText = `${caloriesNumber} calories`;
    
    //ingredients list
    let recipeIngredients = recipe.ingredients;
    let prevIngredLis = document.querySelectorAll("#ingredients-list li");
    for(let i=0; i<prevIngredLis.length; i++) {
        prevIngredLis[i].remove();
    }                                                   //deletes previous ingredient list
    recipeIngredients.forEach(addIngredientToList);     //adds the new ingredients list

    //cuisine type
    let cuisine = recipe.cuisineType[0];
    let cuisineType = document.querySelector("#cuisine-type");
    cuisineType.innerText = cuisine;




    // OPTIONS FOR MORE LABELS:
    //cuisineType
    //dishType
    //mealType
    //healthLabel
    //dietLabel
}


fetchRecipe("tofu");                //called when webpage loads