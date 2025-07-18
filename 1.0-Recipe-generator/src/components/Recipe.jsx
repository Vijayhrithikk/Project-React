import ReactMarkdown from "react-markdown"
export default function Recipe(props){
    return(
        <section classname="recipe-container"  aria-live="polite">
            <ReactMarkdown>
                <h2>Chef AI Recommendations:</h2>
            {props.recipe}
            </ReactMarkdown>
            
        </section>
        
    );
}