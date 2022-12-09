var cs142models;

if (cs142models === undefined) {
   cs142models = {};
}

cs142models.statesModel = function() {
   return [
      'Alabama', 
      'Alaska', 
      'Arizona', 
      'Arkansas', 
      'California',
      'Kansas', 
      'Kentucky', 
      'Louisiana', 
      'Maine', 
      'Maryland',
      'South Dakota', 
      'Tennessee', 
      'Texas', 
      'Utah', 
      'Vermont',
      'Montana', 
      'Nebraska', 
      'Nevada', 
      'New Hampshire', 
      'New Jersey',
      'Hawaii', 
      'Idaho', 
      'Illinois', 
      'Indiana', 
      'Iowa',
      'New Mexico', 
      'New York', 
      'North Carolina', 
      'North Dakota', 
      'Ohio',
      'Oklahoma', 
      'Oregon', 
      'Pennsylvania', 
      'Rhode Island', 
      'South Carolina',
      'Massachusetts', 
      'Michigan', 
      'Minnesota', 
      'Mississippi', 
      'Missouri',
      'Colorado', 
      'Connecticut', 
      'Delaware', 
      'Florida', 
      'Georgia',
      'Virginia', 
      'Washington', 
      'West Virginia', 
      'Wisconsin', 
      'Wyoming'
   ];
};



function getResults(str) {
    var model = cs142models.statesModel();
    // 没有解决获取input值得问题，str应为input得值
    return getInsert(str, model);
}

function getInsert(str, array) {
    var newArray = [];
    if (str == null) {
        return array;
    } else {
        for (var i = 0; i < array.length; i++) {
            if (isSame(str, array[i])) {
                newArray.push(array[i])
            }
        }
    }
  /*   if (newArray == null) {
        return 'This is no result'
    } */
    return newArray;
}

function isSame(str1, str2) {
    var index = 0;
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                index++;
                break;
            }
        }
    }
    if (index >= str1.length) {
        return true
    } else {
        return false
    }
}


console.log(getResults('al',cs142models.statesModel))



