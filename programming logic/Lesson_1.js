var personAge = prompt("Enter the person's age: ");
if (personAge < 12) {
  document.write("The person is a kid");
} else {
  if (personAge >= 12 && personAge < 18) {
    document.write(" The person is a teenage");
  } else {
    if (personAge >= 18 && personAge < 30) {
      document.write(" The person is young");
    } else {
      if (personAge >= 30 && personAge < 60) {
        document.write(" The person is an adult");
      } else {
        if (personAge >= 60 && personAge < 75) {
          document.write(" The person is old");
        }
      }
    }
  }
}
