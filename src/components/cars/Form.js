import React, {useState}  from "react";

function Form() {
    const [carData, setcarData] = useState({brand:"string",colour:"string",price:Number,taken:Boolean})
  const handleForm = (e) => {};
  const changeHandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setcarData({[name]: value})
  };

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            className="form-control"
            name="brand"
            onChange={(e) => changeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Colour</label>
          <input
            type="text"
            className="form-control"
            name="colour"
            onChange={(e) => changeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            onChange={(e) => changeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Taken?</label>
          <select
            type="text"
            className="form-control"
            name="taken"
            onChange={(e) => changeHandler}
            
          >
              <option value="true">Yes</option>
              <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
