class DatePicker {
    constructor(id, callback) {
        this.id = id
    }

    getDaysOfMonth(year,month){
        var date=new Date(year,month,0);
        var days=date.getDate();
        return days;
    }


    getDaysArray(date) {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var week = date.getDay()
        let array = ['日','一','二','三','四','五','六'];
        for(let i = 0; i < week - 1; i++) {
            array.push(" ");
        }
        
        for(let i = 0; i < this.getDaysOfMonth(year,month); i ++) {
            array.push(i + 1);
        }
        return array
    }

    
    render(date) {
        var newdiv = document.getElementById(this.id)
        //newdiv.parentNode.removeChild(newdiv)
        var table = document.createElement("table")
        table.className = "table"
        
        var array = this.getDaysArray(date)
        var header = this.header(date,table)
        newdiv.append(header)
        for(let i = 0; i < array.length; i ++) {
            const newbox = document.createElement("td")
            newbox.innerHTML = "<td>" + array[i] + "</td>"
            if(array[i] == ' ') {
                newbox.className = 'IsNotThisMonthDay'
            }
            if(array[i] == date.getDate()) {
                newbox.className = 'IsToday'
            }
            table.append(newbox)
        }
       
        newdiv.append(table)
        
    }

    header(date,table) {
        var table_title = document.createElement("div")
        var month = date.getMonth() + 1
        var str = document.createElement("span") 
        str.innerHTML =date.getFullYear() + " 年 " + month + " 月"

        var prev = document.createElement("button")
        prev.innerHTML = "<"
        prev.href = " "
        prev.addEventListener('click',()=> {
            table_title.remove()
            table.remove()
            date.setMonth(date.getMonth() - 1)
            console.log(date)
            this.render(date)
        })
       
        table_title.append(prev)

        table_title.append(str)

        var next = document.createElement("button")
        next.innerHTML = ">"
        next.href = ""
        next.addEventListener('click',()=>{
            table.remove()
            table_title.remove()
            date.setMonth(date.getMonth() + 1)
            console.log(date)
            this.render(date)
        })
        table_title.append(next)
        table_title.setAttribute("id","title")
        return table_title
    }
    
}
