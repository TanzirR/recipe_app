import React from "react"

export default function Main(){
    
    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsListItem = ingredients.map(function (ingredient){
        return <li key = {ingredient}>{ingredient}</li>
    })

    

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

            {ingredients.length && <h1 className = "ingredients-title">Ingredients on hand:</h1>}
                <ul className = "ingredients-list">    
                    {ingredientsListItem}
                </ul>

            {ingredients.length > 3 && <section> 
                <div className = 'get-recipe-container'>
                    <div className = 'get-recipe-inner'>
                        <h2 className = 'get-recipe-heading'>Ready for a recipe?</h2>
                        <h3 className = "get-recipe-sub">Generate a recipe from your list of ingredients.</h3>
                    </div>
                    <button>Get a recipe</button>   
                </div>
            </section>}
        </main>
    )
}