import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "portfolio",
      title: "Portfolio",
      type: "document",
      fields: [
        {
          name: "owner",
          title: "Owner",
          type: "string",
        },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
        {
          name: "category",
          title: "Category",
          type: "string",
        },
        {
          name: "url",
          title: "URL",
          type: "url",
        },
        {
          name: "github",
          title: "GitHub",
          type: "url",
        },
        {
          name: "approved",
          title: "Is Approved?",
          type: "boolean",
        },
        {
          name: "publishedAt",
          title: "Published At",
          type: "datetime",
        },
      ],
    },
  ],
};
