import { RandomString, RandomNum, AlphaNum, APIKEY, UUID } from "./server";

describe("RandomString", () => {
  it("generates a string of correct length", () => {
    expect(RandomString(10).length).toBe(10);
  });

  it("generates only uppercase letters when specified", () => {
    expect(RandomString(10, "uppercase")).toMatch(/^[A-Z]+$/);
  });

  it("generates only lowercase letters when specified", () => {
    expect(RandomString(10, "lowercase")).toMatch(/^[a-z]+$/);
  });
});

describe("RandomNum", () => {
  it("generates a numeric string of correct length", () => {
    expect(RandomNum(10).length).toBe(10);
  });

  it("generates only digits", () => {
    expect(RandomNum(10)).toMatch(/^\d+$/);
  });
});

describe("AlphaNum", () => {
  it("generates an alphanumeric string of correct length", () => {
    expect(AlphaNum(10).length).toBe(10);
  });

  it("contains both letters and digits", () => {
    expect(AlphaNum(10)).toMatch(/^[a-zA-Z0-9]+$/);
  });
});

describe("APIKEY", () => {
  it("generates an API key of correct format", () => {
    const key = APIKEY(16, "-");
    expect(key).toMatch(/(\w{4}-){3}\w{4}/);
  });
});

describe("UUID", () => {
  it("generates a UUID-like string of correct format", () => {
    expect(UUID()).toMatch(/(\w{8}-\w{4}-\w{4}-\w{4}-\w{12})/);
  });
});
