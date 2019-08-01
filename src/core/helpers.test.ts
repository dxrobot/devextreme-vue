<<<<<<< HEAD
import { isEqual, toComparable } from "./helpers";
=======
import { extractScopedSlots, isEqual, toComparable } from "./helpers";
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3

describe("toComparable", () => {

    it("Primitive", () => {
        expect(toComparable(1)).toBe(1);
    });

    it("Object", () => {
        const testObject = { text: 1 };
        expect(toComparable(testObject)).toBe(testObject);
    });

    it("Date", () => {
        const testDate = new Date(2018, 9, 9);
        expect(toComparable(testDate)).toBe(testDate.getTime());
    });
});

describe("isEqual", () => {

    it("Primitive", () => {
        expect(isEqual(1, 1)).toBe(true);
    });

    it("Empty Array", () => {
        const testArray1 = [];
        const testArray2 = [];
        expect(isEqual(testArray1, testArray2)).toBe(true);
    });

    it("Empty Array and null", () => {
        const testArray1 = [];
        const testArray2 = null;
        expect(isEqual(testArray1, testArray2)).toBe(false);
        expect(isEqual(testArray2, testArray1)).toBe(false);
    });

    it("Date", () => {
        const testDate1 = new Date(2018, 9, 9);
        const testDate2 = new Date(2018, 9, 9);
        expect(isEqual(testDate1, testDate2)).toBe(true);
    });
});
<<<<<<< HEAD
=======

describe("extractScopedSlots", () => {
    // https://github.com/vuejs/vue/issues/9443

    it("removes non-functional fields", () => {
        const actual = extractScopedSlots(
            {
                a() { return true; },
                b: 123,
                c: true,
                d: undefined
            },
            []
        );

        expect(Object.keys(actual)).toEqual(["a"]);
    });

    it("removes non-scoped slots", () => {
        const actual = extractScopedSlots(
            {
                a() { return true; },
                b() { return true; }
            },
            ["b"]
        );

        expect(Object.keys(actual)).toEqual(["a"]);
    });
});
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
