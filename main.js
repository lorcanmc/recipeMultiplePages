function handleRecipeClick() {}

function handleInputChange() {}

async function fetchRecipe(food) {

    let response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=cheese&app_id=54bc5425&app_key=7b4349e0a80c3457542551922ada680");
    let data = await reSVGTextPositioningElement.json();

    console.log(data);
}
