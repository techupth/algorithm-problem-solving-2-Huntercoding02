function findStudentIndex(students, searchStudent) {
	return students.indexOf(searchStudent); 
	// เริ่มเขียนโค้ดตรงนี้จ้า
}

let result = findStudentIndex(students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"],"John")
let result2 = findStudentIndex(students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"],"Andrew")

console.log(result);
console.log(result2);
// ตอบคำถามตรงนี้จ้า
//O(1) จำนวนรอบเท่าเดิมไม่มีการเปลี่ยนแปลงกับข้อมูลที่ใส่เข้ามา