function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let sub1 = s1.toLowerCase();
	let sub2 = s2.toLowerCase();
	return sub1.indexOf(sub2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
