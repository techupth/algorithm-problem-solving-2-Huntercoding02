
function findBookIndex(books, searchBook) {
  // let search =0
  let index = -1
  for(let ans in books){
    console.log(ans);
    let answer = books[ans]
    
    console.log(answer);
    console.log(answer.title);
    if(answer.title === searchBook){
      index = ans
    }
  }
  return index
}


let result = findBookIndex([
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" }
],"Gone with the Wind")
console.log(result);


let result2 = findBookIndex([
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" }
],"The Master Mind")


console.log(result2);


//O(n) input เพิ่มขึ้นตามลำดับที่ใส่เข้ามา