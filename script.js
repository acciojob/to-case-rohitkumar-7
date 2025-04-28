function toCase(text) {
  // write your code here
	let lowerCase = text.toLowerCase();
	let upperCase = text.toUpperCase();
	return lowerCase +"-"+upperCase;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
