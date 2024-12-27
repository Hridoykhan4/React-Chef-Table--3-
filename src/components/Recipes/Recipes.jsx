import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        <div className="w-11/12 mx-auto">
            <h3 className="text-2xl tracking-wide text-center font-semibold my-3">Our Recipes</h3>
            <p className="text-center">A variety of healthy, flavorful dishes: grilled chicken salad, beef stir fry, pasta carbonara, <br /> vegetable curry, mango smoothie, and tomato soup.</p>

            <div className="flex justify-between">
                <div>
                <h3>Foods</h3>
                </div>

                <div>Want to Cook</div>
            </div>
           
        </div>
    );
};

export default Recipes;