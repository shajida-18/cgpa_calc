
function calculateCGPA() {
  const selects = document.querySelectorAll(".grade");
  let totalPoints = 0;
  let totalCredits = 0;

  selects.forEach(select => {
    const grade = parseFloat(select.value);
    const credit = parseFloat(select.dataset.credit);

    if (!isNaN(grade)) {
      totalPoints += grade * credit;
      totalCredits += credit;
    }
  });

  const cgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("result").textContent = `CGPA: ${cgpa}`;
}