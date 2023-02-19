
export const CODE_SAMPLE= [
    `// Use the output builtin.
 %builtins output 
 // Import the serialize_word() function.

 from starkware.cairo.common.serialize import serialize_word

 func main{output_ptr: felt*}() {

    serialize_word('Hello world!');

    return ();
}` ,
    `// Use the output builtin.
 %builtins output 
 // Import the serialize_word() function.
 from starkware.cairo.common.serialize import serialize_word
 func main{output_ptr: felt*}() {
    tempvar x = 1;
    tempvar y = x + x;
    serialize_word(y);
    return ();
    }`];

export const LESSON_TITLE= [
    `First Lesson: Hello world!`,
    `Lesson 2: 1+1`
];

export const LESSON_DETAIL= [
    `Actually Cairo does not support string now, so you will see something like \n[@22405534230753963835153736737,0x48656c6c6f20776f726c6421@] \n instead.
                        \nThe first one of the output is the Decimal value of the string "Hello world!", and the second one is the Hex value of the string.`,
    `The output should be [@2,0x2@]. As previous lesson said, the first one is the Decimal value, so it is 2. The second one is Hex Value, so it is 0x2.`,
];