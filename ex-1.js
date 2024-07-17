function findStudentIndex(students, searchStudent) {
	let left =0
	let right = students.length-1
	let index=-1
	while(left<=right){
		let mid = Math.floor((left+right)/2)
		console.log(mid);
		if(students[mid]===searchStudent){
			console.log(searchStudent);
			console.log(mid);
			index = mid
			break
		}else if(students[mid]<searchStudent){
			left=mid+1
		}else{
			right=mid-1
		}
	}
	return index
	// เริ่มเขียนโค้ดตรงนี้จ้า
}

let result = findStudentIndex(students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"],"John")
let result2 = findStudentIndex(students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"],"Andrew")

console.log(result);
console.log(result2);
// ตอบคำถามตรงนี้จ้า
//O(log n) จำนวนรอบการทำงานเพิ่มขึ้นตาม input



// return students.indexOf(searchStudent); 