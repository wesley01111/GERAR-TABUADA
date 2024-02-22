function Tabuada(){
    var num = document.getElementById('tabuada')
    var res = document.getElementById('res')
    

    if( num.value.length == 0){
        window.alert('digite um número')
    } else {
        res.innerHTML = ''
        var n = Number(num.value)
        var c = 1
        while( c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
}