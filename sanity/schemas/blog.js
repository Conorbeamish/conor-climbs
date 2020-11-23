import { array } from "prop-types";
import {FaBlog as icon} from "react-icons/fa";

export default{
  name: "blog",
  title: "Blog",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Blog Title",
      type: "string",
      description: "Name of the blog",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Publish Date',
      type: 'date'
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "A short overview of the blog",
      validation: Rule => Rule.max(100)
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{type: "reference", to: [{type: "category"}] }]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {type: "block"},
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
                hotspot: true,
              }
            }
          ]
        }
      ],
      description: "Blog content",
    },
    {
      name: "thumbnail_image",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "landing_image",
      title: "Landing Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
  ]
}