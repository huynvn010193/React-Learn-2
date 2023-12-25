interface List<Type> {
  length: number;
  [index: number]: Type;
}

const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ["easy", "front-end"];

interface Student {
  id: number;
  name: string;
}

const studentList: List<Student> = [{ id: 1, name: "John" }];
console.log("studentList", studentList);

// Keyof operator : lấy ra tất cả danh sách key của kiểu dữ liệu đó.

type StudentKeys = keyof Student;

const keys: StudentKeys = "id";
