function onClicked(tab) {
  var prefix = localStorage.getItem('Prefix');
  if (prefix == null) {
      prefix = 'NowBrowsing: ';
  }
  var position = localStorage.getItem('position');
  if (position == null) {
      position = '1';
  }

  var url = 'https://twitter.com/intent/tweet?'
    + 'text=' + encodeURIComponent(prefix) + encodeURIComponent(tab.title)
    + '&url=' + encodeURIComponent(tab.url);

var h = screen.height;
var y = 0;
  
switch (position) {
  case "1":// Right half
    var w = screen.width / 2;
    var x = screen.width / 2;
    break;
  case "2":// Left half
    var w = screen.width / 2;
    var x = 0;
    break;
  case "3":// 3/3 Right
    var w = screen.width / 3;
    var x = screen.width / 3 * 2;
    break;
  case "4":// 2/3 Centre 
    var w = screen.width / 3;
    var x = screen.width / 3;
    break;
  case "5":// 1/3 Left
    var w = screen.width / 3;
    var x = 0;
    break;
  case "6":// 4/4 Right
    var w = screen.width / 4;
    var x = screen.width / 4 * 3;
    break;
  case "7":// 3/4 Right
    var w = screen.width / 4;
    var x = screen.width / 4 * 2;
    break;
  case "8":// 2/4 Left
    var w = screen.width / 4;
    var x = screen.width / 4;
    break;
  case "9":// 1/4 Left
    var w = screen.width / 4;
    var x = 0;
    break;
    case "0":// centre(Original)
    var w = 640;
    var h = 360;
    var x = (screen.width - w) / 2;
    var y = (screen.height - h) / 2;
    break;
  }

  window.open(url, null,
      'left='+x+',top='+y+',width='+w+',height='+h
      +',status=no');
}

chrome.browserAction.onClicked.addListener(onClicked);

// vim:set ts=8 sts=2 sw=2 tw=0 et:

console.log(localStorage)