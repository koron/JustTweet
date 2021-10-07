window.onload = function(){
    // let prefix = localStorage.getItem('Prefix');
    let prefix = chrome.storage.local.get("prefix", function (value) {
        var value_data = value.key;
      });

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
    // localStorage.setItem('Prefix' , document.getElementById('id_prefix').value);
     chrome.storage.local.set({'prefix': document.getElementById('id_prefix').value}, function () {
    });

    let positions = document.getElementsByName("name_position");
    for(let i = 0; i < positions.length; i++){
        if(positions[i].checked) {
            console.log("Radio button checked : ", positions[i].value);
            localStorage.setItem('position' ,positions[i].value);
            window.close()
        }
    }
}