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

