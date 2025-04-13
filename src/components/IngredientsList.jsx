export default function IngredientsList(props){

    const ingredientsListItem = props.ingredients.map(function (ingredient){
            return <li key = {ingredient}>{ingredient}</li>
        })
    
    
    return (
        <section>
            <h1 className = "ingredients-title">Ingredients on hand:</h1>
            <ul className = "ingredients-list">    
                {ingredientsListItem}
            </ul>

            {props.ingredientsLength > 3 && <div className = 'get-recipe-container'>
                    <div className = 'get-recipe-inner'>
                        <h2 className = 'get-recipe-heading'>Ready for a recipe?</h2>
                        <h3 className = "get-recipe-sub">Generate a recipe from your list of ingredients.</h3>
                    </div>
                    <button onClick = {props.getRecipe}>Get a recipe</button>   
                </div>}
        </section>
    )
}