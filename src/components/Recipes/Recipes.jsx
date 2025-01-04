import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import DetailsTable from "../DetailsTable/DetailsTable";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Recipes = ({ handleSearch }) => {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);

  const preparingCurrent = (p, getcalories, gettime) => {
    setCalories(calories + getcalories);
    setTime(time + gettime);
    const remaining = cook.filter((item) => item.recipe_id !== p);
    setCook(remaining);

    const selectedOne = cook.filter((item) => item.recipe_id === p);
    setCurrentCook([...currentCook, ...selectedOne]);
    toast.success("Goes for Cooking,Sir!!");
  };

  const handleCook = (p) => {
    const isExist = cook.find((product) => product.recipe_id === p.recipe_id);

    if (!isExist) {
      setCook([...cook, p]);
      toast.success("Thanks For Your Order");
    } else {
      toast.error("Can't Add an Item Multiple Times");
    }
  };

  useEffect(() => {
    fetch("chef.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-2xl tracking-wide text-center font-semibold my-3">
        Our Recipes
      </h3>
      <p className="text-center">
        A variety of healthy, flavorful dishes: grilled chicken salad, beef stir
        fry, pasta carbonara, <br /> vegetable curry, mango smoothie, and tomato
        soup.
      </p>

      <div className="flex sm:flex-row flex-col-reverse my-10 gap-10  justify-between">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {recipes.map((recipe, id) => (
              <Recipe
                handleSearch={handleSearch}
                handleCook={handleCook}
                key={id}
                recipe={recipe}
              ></Recipe>
            ))}
          </div>
        </div>

        <div className="md:w-1/3">
          <DetailsTable
            time={time}
            calories={calories}
            currentCook={currentCook}
            preparingCurrent={preparingCurrent}
            cook={cook}
          ></DetailsTable>
        </div>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleSearch: PropTypes.func,
};

export default Recipes;
