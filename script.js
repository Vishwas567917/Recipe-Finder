// Example set of recipes with basic details
const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta", "Black Pepper"],
        instructions: "Boil spaghetti. Cook pancetta. Mix eggs with parmesan. Combine spaghetti with pancetta and egg mixture. Season with black pepper.",
        description: "A classic Italian pasta dish made with simple ingredients."
    },
    {
        title: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Butter", "Cheese"],
        instructions: "Butter the bread. Place cheese between bread slices. Grill until golden brown and cheese is melted.",
        description: "A simple and delicious sandwich with melted cheese."
    },
    {
        title: "Chicken Curry",
        ingredients: ["Chicken", "Onion", "Garlic", "Ginger", "Curry Powder", "Coconut Milk"],
        instructions: "Sauté onions, garlic, and ginger. Add chicken and curry powder. Pour coconut milk. Simmer until chicken is cooked through.",
        description: "A flavorful and aromatic curry with chicken and coconut milk."
    },
    {
        title: "Caesar Salad",
        ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan"],
        instructions: "Toss romaine with Caesar dressing. Add croutons and parmesan. Serve cold.",
        description: "A classic salad with a creamy dressing and crunchy croutons."
    },
    {
        title: "Banana Bread",
        ingredients: ["Bananas", "Flour", "Sugar", "Butter", "Eggs", "Baking Powder"],
        instructions: "Mash bananas. Mix with sugar, butter, eggs, and flour. Pour into a loaf pan and bake.",
        description: "A sweet and moist bread made with ripe bananas."
    }
];

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const recipeList = document.getElementById("recipe-list");
const recipeDetails = document.getElementById("recipe-details");

function displayRecipeList(recipesToDisplay) {
    recipeList.innerHTML = ""; // Clear existing content

    recipesToDisplay.forEach((recipe) => {
        const listItem = document.createElement("li");
        listItem.textContent = recipe.title;

        listItem.addEventListener("click", () => {
            displayRecipeDetails(recipe);
        });

        recipeList.appendChild(listItem);
    });
}

function displayRecipeDetails(recipe) {
    recipeDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
    `;
    recipeDetails.style.display = "block"; // Show the recipe details section
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query)
    );

    displayRecipeList(filteredRecipes); // Display recipes that match the search query
});

// Initially display all recipes
displayRecipeList(recipes);

