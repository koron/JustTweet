window.onload = function(){
    let prefix = localStorage.getItem('Prefix');
    if (prefix == null) {
        prefix = 'NowBrowsing: ';
    }
    document.getElementById('id_prefix').value = prefix;

    let position = localStorage.getItem('position');
    if (position == null) {
        position = '1';
    }
}

document.getElementById('id_save').onclick = function() {
    localStorage.setItem('Prefix' , document.getElementById('id_prefix').value);
    let positions = document.getElementsByName("name_position");
    for(let i = 0; i < positions.length; i++){
        if(positions[i].checked) {
            console.log("Radio button checked : ", positions[i].value);
            localStorage.setItem('position' ,positions[i].value);
            window.close()
        }
    }
}