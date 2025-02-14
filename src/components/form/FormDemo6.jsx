import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo6 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blood Donation</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            {...register("name")}
          ></input>
          </div>
          <div>
            <label>AGE</label>
          <input
            type="number"
            placeholder="enter age"
            {...register("age")}
          ></input>
          </div>
          <div>
            <label>Blood group</label>
          <input
            type="text"
            placeholder="enter blood group"
            {...register("blood group")}
          ></input>
          <div>
            <label>GENDER</label><br></br>
            MALE : <input type="radio" value="male" name="gender" {...register("gender")}></input>
            FEMALE : <input type="radio" value="female" name="gender" {...register("gender")}></input>
          </div>
          <div>
            <input type="submit" ></input>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormDemo6