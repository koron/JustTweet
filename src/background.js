function onClicked(tab) {
  var prefix = 'NowBrowsing:'
  var url = 'https://twitter.com/intent/tweet?'
    + 'text=' + encodeURIComponent(prefix) + encodeURIComponent(tab.title)
    + '&url=' + encodeURIComponent(tab.url);
  var w = 640;
  var h = 360;
  var x = (screen.width - w) / 2;
  var y = (screen.height - h) / 2;
  window.open(url, null,
      'left='+x+',top='+y+',width='+w+',height='+h
      +',status=no');
}

chrome.browserAction.onClicked.addListener(onClicked);

// vim:set ts=8 sts=2 sw=2 tw=0 et:
