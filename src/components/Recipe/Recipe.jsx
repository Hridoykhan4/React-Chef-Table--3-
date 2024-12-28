import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
const Recipe = ({ recipe, handleCook }) => {
  const {
    recipe_name,
    recipe_id,
    preparing_time,

    ingredients,
    image,

    description,
    calories,
  } = recipe;
  return (
    <div class="card card-compact bg-base-100 shadow-xl p-1">
      <figure className="h-52">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{recipe_name}</h2>
        <p className="text-gray-700 font-medium">{description}</p>

        <hr className="border-black border-opacity-20" />

        <p className="font-bold">Ingridents: {ingredients.length}</p>

        <ul className="list-inside list-disc">
          {ingredients.map((ingridient, idx) => (
            <li key={idx} className="text-gray-800">
              {ingridient}
            </li>
          ))}
        </ul>

        <hr className="border-black border-opacity-20" />

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1">
            <span className="text-xl text-black font-semibold">
              <CiClock2 />
            </span>
            <span className="font-semibold">{preparing_time} minutes</span>
          </div>

          <div className="flex items-center gap-1">
            <span>
              <MdOutlineEnergySavingsLeaf />
            </span>
            <span className="font-semibold">{calories} calories</span>
          </div>
        </div>

        <button
          id={`btn-${recipe_id}`}
          onClick={() => handleCook(recipe)}
          className="btn color-bg btn-success self-start my-3 text-white"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCook: PropTypes.func.isRequired,
};

export default Recipe;
