const { divide, multiply, subtract, sum} = require("./math")

describe("Math", () =>{
test("should sum 2 + 2 to be 4", () => {
    const result = sum(2, 2)
    expect(result).toBe(4)
    expect(result).toBeGreaterThan(3);
});

it("should multiply 3 * 3 to result to 9", () => {
    const result = multiply(3, 3);
    expect(result).not.toBe(8);
});

})

it("should be falsy", () => {
    expect(undefined).toBeFalsy();
});

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"]
    expect(days).toContain("Tuesday")
    expect(days).not.toContain("Friday")
});
