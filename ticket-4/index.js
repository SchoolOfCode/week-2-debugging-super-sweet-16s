function getGradeFromPoints(points) {
  if ((points) => 90) {
    return "A";
  } else if (pointsoints >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

const grade = getGradeFromPoints(90);
console.log(grade, "should be A");
