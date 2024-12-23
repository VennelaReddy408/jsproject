let sound=new Audio("../Audiopage/sound.mp3")
function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    // sound.play();

      alert("Please enter your date of birth.");
     
      return;
     
      
  }
  sound.play();
  // Convert input date to Date object
  const dob = new Date(dobInput);
  const today = new Date();

  // Calculate the age in years
  let ageYears = today.getFullYear() - dob.getFullYear();
  
  // Adjust if the current date is before the birthday this year
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    ageYears--;
}
  

  // Calculate the age in months
  let ageMonths = today.getMonth() - dob.getMonth();
  if (ageMonths < 0) {
    ageMonths += 12; // Add 12 months if the month difference is negative
}
  

  // Calculate the age in days
  let ageDays = today.getDate() - dob.getDate();
  if (ageDays < 0) {
      // If current day is less than birth day, subtract the days of the previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0); // Last day of the previous month
      ageDays += prevMonth.getDate();
  }

  // Display the result
  const result = document.getElementById('result');
  result.innerHTML = `Age: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
}



