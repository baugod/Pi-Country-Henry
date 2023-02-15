const checkUndefined = (input) => {
  if (!input?.length) return true;
  for (let el in input) {
    if (input[el] === undefined) {
      return true;
    }
    return false;
  }
};

const validate = (input) => {
  const regexName = /^[a-zA-Z ]+$/;
  const { name } = input;
  const errors = {};

  if (!regexName.test(name)) {
    errors.name = "Invalid name format";
  } else if (name?.length < 4) {
    errors.name = "Name must be at least 4 characters";
};



if (checkUndefined(input.duration)) {
  errors.duration = "Choose a duration";
} else if(input.duration?.length == 5 ){
  errors.duration = "Choose a duration"
};

if (checkUndefined(input.difficulty)) {
  errors.difficulty = "Choose a difficulty";
} else if ( input.difficulty?.length > 2) {
  errors.difficulty= "Choose a difficulty";
};

if (checkUndefined(input.season)) {
  errors.season = "Choose a season";
} else if(input.season?.length == 5 ) {
  errors.season = "Choose a season"
};

if (checkUndefined(input.countryId)) {
  errors.countryId = "Choose one or more countries";
};

return errors;
}

export default validate;