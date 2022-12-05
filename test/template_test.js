class Cs142templateprocessor {
    constructor(template) {
        this.template = template
    }

    fillIn(obj) {
        var str = this.template
        for(var key in obj) {
            var re = new RegExp('\\{\\{' + key + '\\}\\}')
            str = str.toString().replace(re,obj[key])
        }
        return str
    }
}

var str = "{{id}} asdsad {{name}}"
var obj = {
    name:'gatsby',
    id:01
}
var _str = new Cs142templateprocessor(str)
_str = _str.fillIn(obj)
console.log(_str)