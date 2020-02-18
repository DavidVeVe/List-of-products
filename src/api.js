const BASE_URL = "http://localhost:3000";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "content-type": "application/json",
    Accept: "application/json"
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = response.json();

  return data;
}

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(product) {
      return callApi(`/products`, {
        method: "POST",
        body: JSON.stringify(product)
      });
    }
  }
};

export default api;
