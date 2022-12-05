class Cs142templateprocessor {
    constructor(template) {
        this.template = template
    }

    static fillIn(obj) {
        var str = this.template
        for(key in obj) {
            var re = new RegExp('\\{\\{' + key + '}\\}\\')
            str = str.replace(re,obj[key])
        }
        return str
    }
}

