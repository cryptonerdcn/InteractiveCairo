
export const CODE_SAMPLE= [
    `// Use the output builtin.
 %builtins output 
 // Import the serialize_word() function.

 from starkware.cairo.common.serialize import serialize_word

 func main{output_ptr: felt*}() {

    serialize_word('Hello world!');

    return ();
}` ,
    `// Use the output builtin.\n %builtins output \n // Import the serialize_word() function.
 from starkware.cairo.common.serialize import serialize_word
 func main{output_ptr: felt*}() {
    tempvar x = 1;
    tempvar y = x + x;
    serialize_word(y);
    return ();}`];

export const LESSON_TITLE= [
    `First Lesson: Hello world!`,
    `Lesson 2: 1+1`
];

export const LESSON_DETAIL= [
    `Actually Cairo does not support string now, so you will see something like an array \n[@22405534230753963835153736737,0x48656c6c6f20776f726c6421@] \n instead.
                        \nThe first member of the array is the Decimal value of the string "Hello world!", \n and the second one is the Hex value of the string.`,
    `Lesson 2: 1+1`,
];