let name_Array: String[] = ["DAONQ", "Thuy", "Lâm"];

// Destucturing
// let v_name1 = name_Array[0];
// let v_name2 = name_Array[1];
// let v_name3 = name_Array[2];

let [v_name1, v_name2, v_name3] = name_Array; // v_name1 = name_Array[0], v_name2 = name_Array[1], v_name3 = name_Array[2]

console.log(`0: ${v_name1}`); // Name1
console.log(`1: ${v_name2}`);
console.log(`2: ${v_name3}`);
// console.log(`0: ${name_Array[0]}`); // Name1
// console.log(`1: ${name_Array[1]}`);
// console.log(`2: ${name_Array[2]}`);

let name_Array_NEW: String[] = [...name_Array, "Name4", "Name5", "Name6"];
