const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a valid sha-3 512 hash when given an object without PartitionKey", () => {
    const obj = { name: "James", value: "Test" };
    const res = deterministicPartitionKey(obj);
    const shaObj = crypto.createHash("sha3-512").update(JSON.stringify(obj)).digest("hex");
    expect(res).toBe(shaObj);
  });

  it("Returns Object.PartitionKey when object.PartitionKey is less than 256.", () => {
    const obj = { name: "James", value: "Test", partitionKey: "hskdfhiowshe" };
    const res = deterministicPartitionKey(obj);
    expect(res).toBe("hskdfhiowshe");
  });

  it("Returns a valid sha-3 512 hash when input value is object and the length of  object.PartitionKey is greater than 256.", () => {
    const obj = {
      name: "James",
      value: "Test",
      partitionKey:
        "sdfnosdfnaosdfnosadiowsoiwersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersewersehhhegopwdbgddbgddbgddbgddbgddbgddbgddbgddbgddbgddbgddbgddbgddbgdeewhgertvmkdd",
    };
    const res = deterministicPartitionKey(obj);
    const shaObj = crypto.createHash("sha3-512").update(obj.partitionKey).digest("hex");
    expect(res).toBe(shaObj);
  });
});
