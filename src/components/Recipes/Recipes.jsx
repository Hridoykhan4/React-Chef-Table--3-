import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import DetailsTable from "../DetailsTable/DetailsTable";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([])



    const handleCook = (p) => {



    const id = document.getElementById(`btn-${p.recipe_id}`);

    id.setAttribute('disabled', true)

    const isExist = cook.find((product) => product.recipe_id === p.recipe_id);
    
    if(!isExist){
        setCook([...cook, p]);
        handleShowModal()
    }
    else{
        alertToast()
    }
  };


  const alertToast = () => {
    const alertToast = document.getElementById('alertToast');
    alertToast.classList.remove('hidden')
    
    setTimeout(() => {
        document.getElementById('alertToast').classList.add('hidden');
    }, 3000);
    return;
  }


   const handleShowModal = () => {


        const showToast = document.getElementById('showToast');
        showToast.classList.remove('hidden');
         setTimeout(() => {
            document.getElementById('showToast').classList.add('hidden');
          }, 3000);
   }

/*   
  const handleCook = cookItem => {
        setCook([...cook, cookItem])
    }


 */
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



  
    <div id="showToast" class="toast toast-top toast-end hidden">
  <div class="alert alert-success">
    <div className="flex items-center flex-col text-white text-xl">
      
    <p>Success ✅</p>
    <span>Thanks For Your Order</span>
    </div>
  </div>
</div>
        
    <div id="alertToast" class="toast toast-top toast-end hidden">
  <div class="alert alert-success">
    <div className="flex items-center flex-col text-white text-xl">
      
    <p>Failed💔</p>
    <span>Already Exist</span>
    </div>
  </div>
</div>
        





      <div className="flex sm:flex-row flex-col-reverse my-10 gap-10  justify-between">
        <div className="md:w-2/3">
        
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
            recipes.map((recipe) => <Recipe handleCook={handleCook} key={recipe.id} recipe={recipe}></Recipe>)
        }
    </div>
    </div>

        <div className="md:w-1/3">
               <DetailsTable cook={cook}></DetailsTable>

        </div>
      </div>
    </div>
  );
};

export default Recipes;
