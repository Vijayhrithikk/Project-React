import React, { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./Ingredients-list";
import IngredientForm from "./IngredientForm";
import { getRecipeFromMistral } from "./ai";

export default function Main() {

    const [ingredients, setIngredients]=React.useState([]);

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients=> [...prevIngredients,newIngredient]);
    }

    const [isShown, setIsShow]=React.useState(false);

    const [recipe, setRecipe]=React.useState("")

    async function getRecipe(){
        const recipeMarkdown=await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);
    }

    return (
        <main className="main-container">
            <IngredientForm addIngredient={addIngredient}/>
            <IngredientsList ingredients={ingredients}
            getRecipe={getRecipe}/>
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    );
}