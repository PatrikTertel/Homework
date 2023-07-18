const axios = require("axios");
const validator = require("jsonschema");
const getschema = require(`../data/GetSchema.json`);

describe(`API tests`, function () {
  test(`GET [Activities] request should be 200`, async () => {
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/`,
    );
    await expect(response.status).toEqual(200);
  });

  test(`GET [Activities] should be valid to json schema`, async () => {
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/`,
    );
    const result = await validator.validate(response.data, getschema);
    await expect(result.valid).toEqual(true);
  });

  test(`POST [Activities] request should be 200`, async () => {
    const response = await axios.post(
      "https://fakerestapi.azurewebsites.net/api/v1/Activities/",
      {
        data: {
          id: 31,
          title: "test",
          dueDate: "2023-07-15T09:21:30.537Z",
          completed: true,
        },
      },
    );
    await expect(response.status).toEqual(200);
  });

  test(`POST [Activities] should be valid to json schema`, async () => {
    const response = await axios.post(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities`,
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
        data: {
          id: 31,
          title: "test",
          dueDate: "2023-07-15T09:21:30.537Z",
          completed: true,
        },
      },
    );
    const result = await validator.validate(response.data, getschema);
    await expect(result.valid).toEqual(true);
  });

  test(`GET [Activities{ID}] request should be 200`, async () => {
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/1`,
    );
    await expect(response.status).toEqual(200);
  });

  test(`GET [Activities{IDs}] should be valid to json schema`, async () => {
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/1`,
    );
    const result = await validator.validate(response.data, getschema);
    await expect(result.valid).toEqual(true);
  });

  test(`PUT [Activities{ID}] request should be 200`, async () => {
    const response = await axios.put(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/1`,
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
        data: {
          id: 31,
          title: "test",
          dueDate: "2023-07-15T09:21:30.537Z",
          completed: true,
        },
      },
    );
    await expect(response.status).toEqual(200);
  });

  test(`PUT [Activities{IDs}] should be valid to json schema`, async () => {
    const response = await axios.put(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/1`,
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
        data: {
          id: 31,
          title: "test",
          dueDate: "2023-07-15T09:21:30.537Z",
          completed: true,
        },
      },
    );
    const result = await validator.validate(response.data, getschema);
    await expect(result.valid).toEqual(true);
  });

  test(`DELETE [Activities{ID}] request should be 200`, async () => {
    const response = await axios.delete(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities/1`,
    );
    await expect(response.status).toEqual(200);
  });
});
