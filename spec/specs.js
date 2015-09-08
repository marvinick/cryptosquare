describe('cryptosquare', function() {
    it("downcase the input", function() {
        expect(cryptosquare("And")).to.equal("and");
    })

    it("take out the spaces and punctuation", function() {
        expect(cryptosquare("and, blow.")).to.equal("andblow");
    })
})

describe('length', function() {
    it("counts the total of characters", function() {
        expect(length("cryptosquare")).to.equal(12);
    })
})


// describe('factorial', function() {
//     it ("is factorial when input is 5 and result is 120", function() {
//         expect(factorial(5)).to.equal(120);
//     })
//     it ("return 1 when input is zero", function() {
//         expect(factorial(0)).to.equal(1);
//     })
// })
