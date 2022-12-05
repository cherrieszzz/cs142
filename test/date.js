/* const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

let array = ['日','一','二','三','四','五','六'];

const week = date.getDay();

for(let i = 0; i < week - 1; i++) {
    array.push(" ");
}

for(let i = 0; i < 31; i ++) {
    array.push(i + 1);
}


const table = document.getElementById('newid')

for(let i = 0; i < array.length; i ++) {
    const newbox = document.createElement("td")
    newbox.innerHTML = "<td>" + array[i] + "</td>"
    table.appendChild(newbox)
} */

class datePicker {
    constructor(id, callback) {
        this.id = id
    }
    render(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const week = date.getDay()
        let array = ['日','一','二','三','四','五','六'];
        for(let i = 0; i < week - 1; i++) {
            array.push(" ");
        }
        
        for(let i = 0; i < 31; i ++) {
            array.push(i + 1);
        }
        
        
        const table = document.getElementById(this.id)
        
        for(let i = 0; i < array.length; i ++) {
            const newbox = document.createElement("td")
            newbox.innerHTML = "<td>" + array[i] + "</td>"
            table.appendChild(newbox)
        }
    }
}




