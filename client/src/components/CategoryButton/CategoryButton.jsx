import React, { useEffect, useState } from "react";

const CategoryButton = ({ categories, setFiltered, projects }) => {
  const [categoryTitle, setCategoryTitle] = useState("tümü");

  useEffect(() => {
    if (categoryTitle === "tümü") {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter((item) => item.category === categoryTitle));
    }
  }, [projects, categoryTitle, setFiltered]);

  return (
    <ul className="grid grid-cols-4 md:flex md:flex-row gap-3 md:gap-x-6 mb-5 mx-3">
      <li
        className={`py-2 md:py-3 px-3 md:px-7 rounded-md cursor-pointer text-center text-sm ${
          "tümü" === categoryTitle && "text-white border border-[#252531] bg-[#252531]"
        }`}
        onClick={() => setCategoryTitle("tümü")}
      >
        <span className="">Tümü</span>
      </li>
      {categories.map((category, index) => (
        <li
          className={`py-2 md:py-3 px-3 md:px-7 rounded-md cursor-pointer text-center text-sm ${
            category.value === categoryTitle &&
            "text-white border border-[#252531] bg-[#252531]"
          }`}
          onClick={() => setCategoryTitle(category.value)}
          key={index}
        >
          <span className="">{category.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryButton;
