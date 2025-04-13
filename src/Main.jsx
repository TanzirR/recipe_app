import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"

export default function Main(){
    
    const [ingredients, setIngredients] = React.useState([])
    const [showRecipe, setShowRecipe] = React.useState(false)

    function getRecipe(){
        setShowRecipe(function(prev){
            return !prev
        })
    }

    function handleSubmit(formData) {
        //Retrive the input from the field
        const newIngredient = formData.get("ingredient")
        //Empty string cannot be added to the list
        if (newIngredient !== "") {
            setIngredients(function(prevIngredients) {
                return [...prevIngredients, newIngredient]
            })
        }
    }
    
    return (
        <main>
            <form action={handleSubmit}>
                <input 
                    aria-label = "Add ingredient"
                    type = "text"
                    placeholder="e.g. oregano"
                    name = "ingredient" 
                />
                <button >Add ingredients</button>
            </form>

            {ingredients.length? < IngredientsList ingredientsLength = {ingredients.length} ingredients = {ingredients} getRecipe = {getRecipe}/>:null}

            <ClaudeRecipe recipe = {showRecipe}/>
            
        </main>
    )
}
