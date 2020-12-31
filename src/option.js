window.onload = function(){
    var prefix = localStorage.getItem('Prefix');
    if (prefix == null) {
        prefix = 'NowBrowsing: ';
    }
    document.getElementById('id_prefix').value = prefix;
}
document.getElementById('id_save').onclick = function() {
    localStorage.setItem('Prefix' , document.getElementById('id_prefix').value);
    var positions = document.getElementsByName("name_position");
    for(var i = 0; i < positions.length; i++){
        if(positions[i].checked) {
            console.log("選択された値：", positions[i].value);
            localStorage.setItem('position' ,positions[i].value);
        }
        console.log(positions[i].value);
    }
}