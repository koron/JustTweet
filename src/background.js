function onClicked(tab) {
  var prefix = 'NowBrowsing:'
  var url = 'https://twitter.com/intent/tweet?'
    + 'text=' + encodeURIComponent(prefix) + encodeURIComponent(tab.title)
    + '&url=' + encodeURIComponent(tab.url);
  var w = screen.width / 2;
  var h = screen.height;
  var x = screen.width / 2;
  var y = 0;
  window.open(url, null,
      'left='+x+',top='+y+',width='+w+',height='+h
      +',status=no');
}

chrome.browserAction.onClicked.addListener(onClicked);

// vim:set ts=8 sts=2 sw=2 tw=0 et:
