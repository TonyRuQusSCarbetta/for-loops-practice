//Remember that an array starts at the ZERO index,
//But the .length property starts at ONE


var schoolsArray = [{
    name: 'Codify',
    students: 70,
    location: 'San Francisco',
    tuition: 8000
  },
  {
    name: 'LA Film School',
    students: 200,
    location: 'Los Angeles',
    tuition: 20000
  },
  {
    name: 'Dubspot Electronic Music School',
    students: 331,
    location: 'Online',
    tuition: 4000
  },
  {
    name: 'Stanford',
    students: 1100,
    location: 'Santa Clara',
    tuition: 45000
  }

];

var schoolsMethod = {
  Codify: {
    name: 'Codify',
    students: 70,
    location: 'San Francisco',
    tuition: 8000
  },
  LAFilmSchool: {
    name: 'LA Film School',
    students: 200,
    location: 'Los Angeles',
    tuition: 20000
  },
  Dubspot: {
    name: 'Dubspot Electronic Music School',
    students: 331,
    location: 'Online',
    tuition: 4000
  },
  Stanford: {
    name: 'Stanford',
    students: 1100,
    location: 'Santa Clara',
    tuition: 45000
  }
};


//SELECTING INDIVIDUAL OBJECTS
console.log(schoolsArray[0]);
//returns {name: "Codify", st// location: "San Francisco"}
console.log(schoolsMethod.Codify);
//returns {name: "Codify", st// location: "San Francisco"}
console.log(schoolsArray[0].name);
//returns "Codify"
console.log(schoolsMethod.Codify.name);
// returns Codify

//FOR LOOP ARRAY
for (var i = 0; i < schoolsArray.length; i++) {
  console.log(schoolsArray[i]);
}
//returns
//{name: "Codify", students: 70, location: "San Francisco"}
//{name: "LA Film School", students: 200, location: "Los Angeles"}
//{name: "Dubspot Electronic Music School", students: 331, location: "Online"}
//{name: "Stanford", students: 1100, location: "Santa Clara"}

//FOR LOOP ARRAY, A SPECIFIC METHOD PROPERTY
for (var i = 0; i < schoolsArray.length; i++) {
  console.log(schoolsArray[i].name);
}
//returns
//Codify
//LA Film School
//Dubspot Electronic Music School
//Stanford


//LOOP THROUGH SCHOOLS AND LOG THE TUITION AS AFFORDABLE (UNDER $8000) OR NOT.
for (var i = 0; i < schoolsArray.length; i++) {
  if (schoolsArray[i].tuition < 8001) {
    console.log(schoolsArray[i].name + ' is affordable');
  } else {
    console.log(schoolsArray[i].name + ' is too exepensive');
  }
}

//break; will STOP A FOR LOOP
//return; will STOP A FUNCTION
