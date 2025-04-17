import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filtertype: "Location",
    array: ["Delhi NCR", "Bangalor", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filtertype: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filtertype: "Salary",
    array: [
      "0-40k",
      "42-1lakh",
      "1lakh to 5lakh",
      "5lakh to 10lakh",
      "10lakh to 12lakh",
    ],
  },
];
export default function FilterCard() {
  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  }

  useEffect(() => {
   dispatch(setSearchedQuery(selectedValue))
  },[selectedValue])
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filtertype}</h1>
            {data.array.map((item, idx) => {
              const itemId = `r${index}-${idx}`
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem name="filter-group" value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
