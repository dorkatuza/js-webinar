const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator

    it("should have proper value", () => {
        const c = calc(42);
        expect(c.v).not.to.be.undefined;
    });        

    describe("add", () => {
        it("should exists", () => {
            const c = calc(42);
            expect(c.add).not.to.be.undefined;
        });

        it("should be able to add a number to the current value", () => {
            const c = calc(5);
            const result = c.add(6).v;
            expect(result).to.be.equal(11);
        });
    });

    describe("minus", () => {
        it("should exists", () => {
            const c = calc(10);
            expect(c.minus).not.to.be.undefined;
        });

        it("should be able to substract a number from the current value", () => {
            const c = calc(30);
            const result = c.minus(35).v;
            expect(result).to.be.equal(-5); 
        });
    });

    describe("sqrt", () => {
        it("should exists", () => {
            const c = calc(9);
            expect(c.sqrt).not.to.be.undefined;
        });

        it("should return the square root of a number", () => {
            const c = calc(9);
            const result = c.sqrt().v;
            expect(result).to.be.equal(3);
        });

        it("should return the square root of a number", () => {
            const c = calc(-3);
        });
    });

    describe("times", () => {
        it("should exists", () => {
            const c = calc(3);
            expect(c.times).not.to.be.undefined;
        });
           
        it("should be able to perform a multiplication", () => {
            const c = calc(3);
            const result = c.times(5).v;
            expect(result).to.equal(15);
        });
    });

    describe("divide", () => {
        it("should exists", () => {
            const c = calc(42);
            expect(c.divide).not.to.be.undefined;
        });

        it("should be able to perform a valid division", () => {
            const c = calc(10);
            const result = c.divide(2).v;
            expect(result).to.equal(5);
        });
    
        it("should handle a division by 0", () => {
            const c = calc(42);
            //const result = c.divide(0).v;
            //expect(() => c.divide(0)).to.throw("Division");
            expect(c.divide.bind(null, 0)).to.throw();
        });
    });

    describe("modulo", () => {
        it("should exists", () => {
            const c = calc(13);
            expect(c.modulo).not.to.be.undefined;
        });

        it("should return the remainder from the modulo operation.", () => {
            const c = calc(13);
            result = c.modulo(10).v;
            expect(result).to.equal(3);
        });
    });
});