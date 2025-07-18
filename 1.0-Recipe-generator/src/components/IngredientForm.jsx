export default function IngredientForm(props){
    return(
        <form  action={props.addIngredient} className="add-ingredient-form" >
                <input
                    required
                    // pattern="[a-zA-Z]" 
                    // onInvalid="setCustomValidity('Please enter valid Ingredient')"
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    className="ingredient-input"
                />
                <button className="add-btn">Add Ingredient</button>
            </form>
            
    );
}