export function calculateWorkExperience() {
    const date1 = new Date('2022-08-01');
    const date2 = new Date(); // Use the current date
  
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
  
    // Calculate the difference in years
    let yearsDifference = year2 - year1;
    let monthsDifference = month2 - month1;
  
    // Adjust the difference in months if necessary
    if (monthsDifference < 0) {
      yearsDifference -= 1;
      monthsDifference += 12;
    }
  
    return `${yearsDifference}${monthsDifference > 6 ? '.5' : ''}+ year`
  }