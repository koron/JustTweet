const save_options = () => {
  const _prefix = document.getElementById('prefix').value;

  chrome.storage.sync.set({
      prefix: _prefix,
    }, () => {
      const status = document.getElementById('status');
      status.textContent = 'saved!';
      setTimeout( () => {
        status.textContent = '';
      }, 750);
    }
  );
}
  
const restore_options = () => {
    chrome.storage.sync.get({
      prefix: ' \u00BB '
    }, (settings) => {
        document.getElementById('prefix').value = settings.prefix;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
