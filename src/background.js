function onClicked(tab) {
  let prefix = localStorage.getItem('Prefix');
  if (prefix == null) {
      prefix = 'NowBrowsing: ';
  }
  let position = localStorage.getItem('position');
  if (position == null) {
      position = '1';
  }

  let url_url = tab.url;

  // add nikkei.com customize
  url_url = url_url.replace(/https:\/\/www\.nikkei\.com\/paper\/article\/\?.*\=/,'https:\/\/www\.nikkei\.com\/article\/')

  // UTM remove
  if (url_url.match("youtube.com"))
  { console.log ("youtube")} 
  else {   
  url_url = url_url.replace(/\?.*$/,'')
}
  let url = 'https://twitter.com/intent/tweet?'
    + 'text=' + encodeURIComponent(prefix) + encodeURIComponent(tab.title)
    + '&url=' + encodeURIComponent(url_url);

let h = screen.height;
let y = 0;
let w ;
let x ;
  
switch (position) {
  case "1":// Right half
    w = screen.width / 2;
    x = screen.width / 2;
    break;
  case "2":// Left half
    w = screen.width / 2;
    x = 0;
    break;
  case "3":// 3/3 Right
    w = screen.width / 3;
    x = screen.width / 3 * 2;
    break;
  case "4":// 2/3 Centre 
    w = screen.width / 3;
    x = screen.width / 3;
    break;
  case "5":// 1/3 Left
    w = screen.width / 3;
    x = 0;
    break;
  case "6":// 4/4 Right
    w = screen.width / 4;
    x = screen.width / 4 * 3;
    break;
  case "7":// 3/4 Right
    w = screen.width / 4;
    x = screen.width / 4 * 2;
    break;
  case "8":// 2/4 Left
    w = screen.width / 4;
    x = screen.width / 4;
    break;
  case "9":// 1/4 Left
    w = screen.width / 4;
    x = 0;
    break;
    case "0":// centre(Original)
    w = 640;
    h = 360;
    x = (screen.width - w) / 2;
    y = (screen.height - h) / 2;
    break;
  }

  window.open(url, null,
      'left='+x+',top='+y+',width='+w+',height='+h
      +',status=no');
}

chrome.browserAction.onClicked.addListener(onClicked);

// vim:set ts=8 sts=2 sw=2 tw=0 et:

console.log(localStorage)