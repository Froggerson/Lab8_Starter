// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber Tests
test('isPhoneNumber determines "1" is false phone number', () => {
    expect(functions.isPhoneNumber("1")).toBe(false);
});

test('isPhoneNumber determines "" is false phone number', () => {
    expect(functions.isPhoneNumber("")).toBe(false);
});
  
test('isPhoneNumber determines "(714)-777-7777" is true phone number', () => {
    expect(functions.isPhoneNumber("(714)-777-7777")).toBe(true);
});

test('isPhoneNumber determines "123-456-7890" is true phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

// isEmail Tests
test('isEmail determines "@" is NOT valid email', () => {
    expect(functions.isEmail("@")).toBe(false);
});

test('isEmail determines "cse110@ucsd.poggers" is NOT valid email', () => {
    expect(functions.isEmail("cse110@ucsd.poggers")).toBe(false);
});

test('isEmail determines "powell@ucsd.edu" is valid email', () => {
    expect(functions.isEmail("powell@ucsd.edu")).toBe(true);
});

test('isEmail determines "o@uwu.co" is valid email', () => {
    expect(functions.isEmail("o@uwu.co")).toBe(true);
});

// isStrongPassword Tests
test('isStrongPassword determines "12jhak_" is NOT strong password', () => {
    expect(functions.isStrongPassword("12jhak_!")).toBe(false);
});

test('isStrongPassword determines "hjagsdfbcajdshfagsdjfhgjskdfajkdhghaffuwageorgfiuasdf" is NOT strong password', () => {
    expect(functions.isStrongPassword("hjagsdfbcajdshfagsdjfhgjskdfajkdhghaffuwageorgfiuasdf")).toBe(false);
});

test('isStrongPassword determines "endMySuffering" is strong password', () => {
    expect(functions.isStrongPassword("endMySuffering")).toBe(true);
});

test('isStrongPassword determines "i0n1yfee1pain" is strong password', () => {
    expect(functions.isStrongPassword("i0n1yfee1pain")).toBe(true);
});

// isDate Tests 
test('isDate determines "1-23-2014" is NOT valid Date', () => {
    expect(functions.isDate("1-23-2014")).toBe(false);
});

test('isDate determines "2/24/20" is NOT valid Date', () => {
    expect(functions.isDate("2/24/20")).toBe(false);
});

test('isDate determines "1/1/2021" is valid Date', () => {
    expect(functions.isDate("1/1/2021")).toBe(true);
});

test('isDate determines "10/10/2021" is valid Date', () => {
    expect(functions.isDate("10/10/2021")).toBe(true);
});

// isHexColor Tests 
test('isHexColor determines "G32678" is NOT valid hex color', () => {
    expect(functions.isHexColor("G32678")).toBe(false);
});
test('isHexColor determines "F" is NOT valid hex color', () => {
    expect(functions.isHexColor("F")).toBe(false);
});
test('isHexColor determines "F3A867" is valid hex color', () => {
    expect(functions.isHexColor("F3A867")).toBe(true);
});
test('isHexColor determines "FFF" is valid hex color', () => {
    expect(functions.isHexColor("FFF")).toBe(true);
});