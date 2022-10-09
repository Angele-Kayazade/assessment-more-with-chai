const findStudentByName = require("../src/solution");
const expect = require("chai").expect;

describe("findStudentByName", () => {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];

    it("should return the correct student's name", () => {
        const expected = {name: "Morgan Sutton", score: 7.4};
        const name = "Morgan Sutton";
        const actual = findStudentByName(students, name);

        expect(actual).to.eql(expected);
    })

    it("should return null if incorrect student name is given", () => {
        const expected = null;
        const name = "Harry Thompson";
        const actual = findStudentByName(students, name);

        expect(actual).to.be.null;
    })
})
