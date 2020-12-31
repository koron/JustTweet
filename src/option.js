window.onload = function(){
    var prefix = localStorage.getItem('Prefix');
    if (prefix == null) {
        prefix = 'NowBrowsing: ';
    }
    document.getElementById('id_prefix').value = prefix;
    var position = localStorage.getItem('position');
    if (position == null) {
        position = '1';
        
    }  
    document.getElementById('id_position').value = position;
}

// localStorage.removeItem('position');

document.getElementById('id_save').onclick = function() {
    localStorage.setItem('Prefix' , document.getElementById('id_prefix').value);
    localStorage.setItem('position' , document.getElementById('id_position').value);
}