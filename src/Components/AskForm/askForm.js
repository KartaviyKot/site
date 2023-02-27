import React from "react";

const initialFormData = Object.freeze({
  salary: "45000",
  days: "15",
  hours: "12",
  price: "",
});
const AskForm = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const salaryPerHour = Math.round(formData.salary / formData.days / formData.hours);
  const hoursToWork = Math.round(formData.price / salaryPerHour);
  const daysToWork = (formData.price / salaryPerHour / formData.hours).toFixed(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <>
      <label>
        Your average salary a month after taxes:
        <input
          name="salary"
          type="number"
          defaultValue="45000"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        How many days you spend working?
        <input
          name="days"
          type="number"
          defaultValue="15"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        How many hours per day?
        <input
          name="hours"
          type="number"
          defaultValue="12"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        How much does this thing you want to buy costs?
        <input name="price" type="number" onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>

      <div>you earn per hour = {salaryPerHour}</div>

      <div>
        to buy this thing you must work {hoursToWork} hours or {daysToWork}{" "}
        days.
        <br />
        are you sure you need this?
      </div>
    </>
  );
};

export default AskForm;