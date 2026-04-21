export const productApiTestData = {
  endpoint: "api/productsList",
  postPayload: {
    id: 123,
    name: "Post Test Product",
    price: "Rs. 500",
    brand: "Test Brand",
    category: {
      usertype: { usertype: "test user" },
      category: "test category",
    },
  },
  postMessage: "This request method is not supported.",
};
