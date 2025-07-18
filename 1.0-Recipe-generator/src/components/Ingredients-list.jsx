export default function IngredientsList(props){
    console.log(props);
    return(
        props.ingredients.length > 0 && (
            <section className="ingredients-section">
                <h2 className="ingredients-title">Ingredients on List:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {props.ingredients.map((item, ind) => (
                        <li key={ind} className="ingredient-item">{item}</li>
                    ))}
                </ul>
                <div className="get-recipe-container">
                    <div className="get-recipe-info">
                        <h3>Ready for a recipe 😋:</h3>
                        <p>Generate a recipe from your list.</p>
                    </div>
                    <button className="get-recipe-btn" onClick={props.getRecipe}>Get a recipe</button>
                </div>
            </section>
        )
    )
}