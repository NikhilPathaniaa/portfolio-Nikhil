import React from "react";

const FeaturesAdd = ({ index, fields, setFields }) => {
  const handleChange = (event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const re = {
    border: "3px solid red",
    padding: "10px",
    borderRadius: "25px",
  };

  return (
    <div style={re} key={index} className="mb-4">
      <input type="text" name="imgUrl" value={fields[index].imgUrl} onChange={handleChange} placeholder="Image URL" className="block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" name="title" value={fields[index].title} onChange={handleChange} placeholder="Title" className="block mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea name="content" value={fields[index].content} onChange={handleChange} placeholder="Content" className="block mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" />
      <input type="text" name="color" value={fields[index].color} onChange={handleChange} placeholder="Color" className="block mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );
};

export default FeaturesAdd;
