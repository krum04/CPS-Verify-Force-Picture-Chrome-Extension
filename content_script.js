var img = document.createElement('img');
//img.src = 'https://i.imgur.com/9VkqB7n.png';
img.src = 'https://image.ibb.co/ctuqiA/rsz-cozzhhgwoaalia1.jpg';
code = '<input id="ctl00_Body_chkShowPicture" type="checkbox" name="ctl00$Body$chkShowPicture" checked="checked", 0)">'

setInterval (function(){
if (document.querySelector('#ctl00_Body_UP2 > table > tbody > tr:nth-child(4)') != null){
  var element = document.querySelector('#ctl00_Body_UP2 > table > tbody > tr:nth-child(4)');
  element.replaceWith(code = '<input id="ctl00_Body_chkShowPicture" type="checkbox" name="ctl00$Body$chkShowPicture" checked="checked", 0)">'
);

  var element = document.querySelector('#ctl00_Body_UP2 > table > tbody > tr:nth-child(2)');
  element.parentElement.removeChild(element);
}
},100)
