window.onload = function(){
     var prefix = localStorage['Prefix'];
    if (prefix == null) {
        prefix = 'NowBrowsing: ';
    }
    document.getElementById('id_prefix').value = prefix;
}
document.getElementById('id_save').onclick = function() {
    localStorage['Prefix'] = document.getElementById('id_prefix').value;
}