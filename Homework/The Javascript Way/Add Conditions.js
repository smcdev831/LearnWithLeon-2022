switch (day) {
  case "Monday":
    return "Tuesday";
    break;
  case "Tuesday":
    return "Wednesday";
    break;
  case "Wednesday":
    return "Thursday";
    break;
  case "Thursday":
    return "Friday";
    break;
  case "Friday":
    return "Saturday";
    break;
  case "Saturday":
    return "Sunday";
    break;
  case "Sunday":
    return "Monday";
    break;

  default:
    return "Not a valid day of the week";
    break;
}

if (x > y) {
  return `${x} is greater than ${y}`;
} else if (x < y) {
  return `${x} is less than ${y}`;
} else {
  return `${x} is equal to ${x}`;
}

// 0 4 12
// 4 3 2
// 3 4 0

switch (month) {
  case "January":
    return 31;
    break;
  case "February":
    return 28;
    break;
  case "March":
    return 31;
    break;
  case "April":
    return 30;
    break;
  case "May":
    return 31;
    break;
  case "June":
    return 30;
    break;
  case "July":
    return 31;
    break;
  case "August":
    return 31;
    break;
  case "September":
    return 30;
    break;
  case "October":
    return 31;
    break;
  case "November":
    return 30;
    break;
  case "January":
    return 31;
    break;
  default:
    return "This is not one of the months in a year";
    break;
}

function time(h, m, s) {
  if (s + 1 === 60) {
    s = 0;
    if (m + 1 === 60) {
      m = 0;
      if (h + 1 === 24) {
        h = 0;
      } else {
        h += 1;
      }
    } else {
      m += 1;
    }
  } else {
    s += 1;
  }
  return `${h}h ${m}m ${s}s`;
}
