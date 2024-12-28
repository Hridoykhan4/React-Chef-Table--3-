import PropTypes from "prop-types";

function DetailsTable({ cook, preparingCurrent, currentCook, time, calories }) {
  let count = 1;
  let count2 = 1;
  return (
    <div className="border-2 p-2">
      <div>
        <h3 className="text-center font-bold text-2xl">
          Want to cook: {cook.length}
        </h3>

        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>

            {cook.map((cook, idx) => (
              <tbody key={idx}>
                <tr>
                  <th>{count++}</th>
                  <td className="text-gray-600 font-semibold">
                    {cook.recipe_name}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {cook.preparing_time}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {cook.calories}
                  </td>
                  <button
                    onClick={() =>
                      preparingCurrent(
                        cook.recipe_id,
                        cook.calories,
                        cook.preparing_time
                      )
                    }
                    className="btn-success btn"
                  >
                    Preparing
                  </button>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl text-center font-semibold">
          Currently Cooking: {currentCook.length}
        </h3>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>

            {currentCook.map((currentCook, idx) => (
              <tbody key={idx}>
                <tr>
                  <th>{count2++}</th>
                  <td className="text-gray-600 font-semibold">
                    {currentCook.recipe_name}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {currentCook.preparing_time}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {currentCook.calories}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="flex items-center justify-center">
            <h4 className="text-center font-semibold mr-5 text-gray-700">
              Total Times - {time}
            </h4>
            <h3 className="font-semibold text-gray-700">
              Total Calories- {calories}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailsTable.propTypes = {
  cook: PropTypes.array.isRequired,
  preparingCurrent: PropTypes.func.isRequired,
  currentCook: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};

export default DetailsTable;
