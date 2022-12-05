class TableTemplate {
    static fillIn(id, obj, columname) {
        var table = document.getElementById(id)
        var rows = table.rows
        var header = rows.item(0)
        var proc = new Cs142templateprocessor(header.innerHTML)
        var new_header = proc.fillIn(obj)
        header.innerHTML = new_header

        var cols = []
        if(columname == undefined) {
            cols = Array.from(Array(header.cells.length).keys())
        }else{
            for(var i = 0; i < header.cells.length; i++) {
                if(header.cells[i].innerHTML === columname) {
                    cols = [i]
                }
            }
        }
       
        for(var i = 1; i < table.rows.length; i++) {
            var row = table.rows[i]
            for(var j = 0;j < cols.length; j++) {
                var cell = row.cells[cols[j]]
                var proc = new Cs142templateprocessor(cell.innerHTML)
                cell.innerHTML = proc.fillIn(obj)
            }
        }
            
        if(table.style.visibility === 'hidden') {
            table.style.visibility = 'visible'
        }
    }
}