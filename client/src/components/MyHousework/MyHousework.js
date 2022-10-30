import React, { useState } from "react";
import "./MyHousework.css";

// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_HOUSEWORK } from "../utils/queries";
// import { ADD_HOUSEWORK, EDIT_HOUSEWORK, DEL_HOUSEWORK } from "../utils/mutations";

function MyHouseWork() {
  return (
    <>
      <form>
        <input type="text" placeholder="Housework Name" />
        <input type="text" placeholder="Description" />
        <select>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <button type="submit">Add Housework</button>
      </form>
    </>
  );
}

export default MyHouseWork;
