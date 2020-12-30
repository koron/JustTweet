window.onload = function(){
    var prefix = localStorage.getItem('Prefix');
    if (prefix == null) {
        prefix = 'NowBrowsing: ';
    }
    document.getElementById('id_prefix').value = prefix;
}
document.getElementById('id_save').onclick = function() {
    localStorage.setItem('Prefix' , document.getElementById('id_prefix').value);
    localStorage.setItem('position' , document.getElementById('window_position').value);
}