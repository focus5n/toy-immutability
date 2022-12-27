let object_01 = {type: 'IMMUTABLE'}
let object_02;

function immutable_maker(object) {

    return Object.assign({}, object);
}

object_02 = immutable_maker(object_01);

console.log("ORIGINAL", object_01);
console.log("FAKE", object_02);
console.log("IS EQUAL?", object_01 === object_02);
console.log("\n==================================\n");

// =========================================================== //

let object_03 = {type: 'FREEZE', reference: ['array', 'object']}

Object.freeze(object_03);
object_03.type = 'CHANGE';
console.log("FREEZE CAN NOT CHANGE", object_03);

object_03.reference.push('function');
console.log("FREEZE SAVE ONLY POINTER", object_03);

Object.freeze(object_03.reference);
// object_03.reference.push('Number');
console.log("FREEZE PROPERTY OBJECT ALSO FOR IMMUTABILITY", object_03);
console.log("\n==================================\n");

// =========================================================== //