import MyButton from "./Button.js";
import { useRef } from "react";
const ChoosePicForm = () => {
    const searchInputRef = useRef();

    const searchSubmitHandler = (event) => {
        event.preventDefault();

        const enteredSearchTerm = searchInputRef.current.value;
        console.log(enteredSearchTerm);
    }

    return <div class="container mx-auto w-80 flex flex-col">
            <form className="py-8" onSubmit={searchSubmitHandler}>
                <label htmlFor="search-bar"/>
                
                <p className="hintText">Find a picture to replace advertisments</p>
                <input className="border-2" id="search-bar" ref={searchInputRef}/>
                <MyButton className=""/>
            </form>
            <img src="https://cdn.comedy.co.uk/images/library/people/300x200/d/david_hasselhoff.jpg" alt="Hasselhoff David" width="" height=""></img>
        </div>
}

export default ChoosePicForm;