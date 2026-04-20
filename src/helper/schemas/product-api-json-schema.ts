import { JSONSchemaType } from "ajv";

interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: {
    usertype: {
      usertype: string;
    };
    category: string;
  };
}

export const productSchema: JSONSchemaType<Product> = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    price: { type: "string" },
    brand: { type: "string" },
    category: {
      type: "object",
      properties: {
        usertype: {
          type: "object",
          properties: {
            usertype: { type: "string" },
          },
          required: ["usertype"],
        },
        category: { type: "string" },
      },
      required: ["usertype", "category"],
    },
  },
  required: ["id", "name", "price", "brand", "category"], // These must exist
  additionalProperties: false, // No extra fields allowed
};
