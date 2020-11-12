import {FaBook as icon} from "react-icons/fa";

export default{
  name: "category",
  title: "Category",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Category name",
      type: "string",
      description: "Name of category"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      }
    },
  ],
  
}