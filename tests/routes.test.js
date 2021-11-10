const request = require("supertest");
const app = require("../app");

let server = null;

beforeAll(() => {
  const { PORT = 4000 } = process.env;

  server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});

describe("Get route", () => {
  it("page should return hello world", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Hello world again");
  });
});

afterAll(async () => {
  await server.close();
});
