let object_01 = {type: 'IMMUTABLE'}
let object_02;

function immutable_maker(object) {

    return Object.assign({}, object);
}

object_02 = immutable_maker(object_01);

console.log("ORIGINAL", object_01);
console.log("FAKE", object_02);
console.log(object_01 === object_02);