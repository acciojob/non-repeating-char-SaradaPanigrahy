function firstNonRepeatedChar(str) {
 // Write your code here
	const chardict={};
	for (let char of str) {
		chardict[char]=(chardict[char]||0)+1;
	}
	for (let char of str) {
		if (chardict[char]===1) {
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
