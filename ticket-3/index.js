function countNumberOfNinesInNumber(number) {
  let count = 0;
  const numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}

// Function call
//Expected output
//countNumberOfNinesInNumber(99.999)	5
//countNumberOfNinesInNumber(9)	1
//countNumberOfNinesInNumber(989)	2
//countNumberOfNinesInNumber(1115.1257846)	0
