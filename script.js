 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?

  const isAdult=people.some(person=>{
    const currentYear=(new Date()).getFullYear();
    return currentYear - person.year >=19;
  });
  console.log("with array some method it checks whether at least one element passes the given condition ");
  console.log(isAdult);
  // Array.prototype.every() // is everyone 19 or older?
  const allAdults=people.every(person=>((new Date()).getFullYear() - person.year >=19));
  console.log("array method every checks the whether every element passes the test implement by the provided function ")
  console.log(allAdults);
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comment=comments.find(comment=> (comment.id===823423));
  console.log("array method find returns the element that you are lookng for");
  console.log(comment);
  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const index=comments.findIndex(index=>(index.id===823423));
  console.log("array method findIndex returns the index of that you are looking for ")
  console.log(index);
  const deleted=comments.splice(index,1);
  console.log("splice method deleted the array element at index 1 ")
  console.log(comments)
  console.log("deleted array element ");
  console.log(deleted);
