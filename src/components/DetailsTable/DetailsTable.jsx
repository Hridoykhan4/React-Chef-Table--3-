import PropTypes from 'prop-types'

function DetailsTable({cook}) {
  return (
    <div className='border-2 p-2'>
            <div>
                    <h3 className='text-center font-bold text-2xl'>Want to cook: {cook.length}</h3>

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
    <tbody>

      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>

      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>

      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>


    </div>
  )
}

DetailsTable.propTypes = {
    cook: PropTypes.array.isRequired
}

export default DetailsTable
