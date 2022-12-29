import React, { useState } from "react";
import "./MyHousework.css";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_HOUSEWORK } from "../../utils/queries";
// import { ADD_HOUSEWORK, EDIT_HOUSEWORK, DEL_HOUSEWORK } from "../../utils/mutations";

function MyHouseWork() {
  const { data } = useQuery(QUERY_HOUSEWORK);
  const houseworkData = data?.houseworkByUserID ?? [];

  console.log(houseworkData);

  // use object.keys to get the keys of the object
  // use map to iterate over the keys and return a table header for each key
  // use map to iterate over the houseworkData and return a table row for each object
  // use map to iterate over the keys and return a table data for each key

  return (
    <div className="container">
      <h2>My Housework</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>

            <th scope="col">Frequency</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody>
          {houseworkData.map((housework) => (
            <tr key={housework._id}>
              <td>{housework.name}</td>
              <td>{housework.description}</td>
              <td>{housework.frequency}</td>
              <td>{housework.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// const houseworkCard = houseworkData.map((houseworkByUserID) => {
//   return (
//     <div key={houseworkByUserID._id} className="housework-card">
//       <h2>{houseworkByUserID.name}</h2>
//       <p>{houseworkByUserID.description}</p>
//       <p>{houseworkByUserID.frequency}</p>
//       <button className="edit-btn">Edit</button>
//       <button className="del-btn">Delete</button>
//     </div>
//   );
// });

// return (
//   <div>
//     <div>
//       <form>
//         <input type="text" placeholder="Housework Name" />
//         <input type="text" placeholder="Description" />
//         <select>
//           <option value="daily">Daily</option>
//           <option value="weekly">Weekly</option>
//           <option value="monthly">Monthly</option>
//           <option value="yearly">Yearly</option>
//         </select>
//         <button type="submit">Add Housework</button>
//       </form>
//     </div>
//     <div className="housework-container">{houseworkCard}</div>
//   </div>
// );
// }

export default MyHouseWork;
