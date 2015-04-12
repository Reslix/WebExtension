

var stor = []; //stores the url, time activated, time open, tabid, and stuff
var tabs = [];


	
  /**
  Adds the website and its tabid to the stor array, as well as runtime information too
  **/
  /*
 chrome.tabs.onActivated.addListener (function (activeInfo){
          chrome.tabs.getCurrent(function (tab){
                  var curr_tab_url = shorten(tab.url);
				  var time = new Date().getTime();
				  tabs.push(tabId);

				  if(indexOf(stor, curr_tab_url)==-1){
					  stor.push(curr_tab_url);
					  stor.push(time);
					  stor.push(0);

					  }
				  else{
					  index = indexOf(stor, curr_tab_url);
					  stor[index+2] +=(time-stor[index+1]); 
				  }
				  	chrome.storage.local.set({'website':stor});
          });
  });
  */

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
			var curr_tab_url = shorten(tab.url);
			var time = new Date().getTime();
			if(curr_tab_url!= "chrome-extension:" && curr_tab_url != "chrome:")
			if(indexOf(stor, curr_tab_url)==-1){
					  stor.push(curr_tab_url);
					  stor.push(time);
					  stor.push(0);
					  }
				  else{
					  index = indexOf(stor, curr_tab_url);
					  stor[index+2] +=(time-stor[index+1]);
				  }
			updateAll();
  });
  
  function shorten(url){
	var domain = url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
	return domain;
  }
  chrome.tabs.onRemoved.addListener(function(tabId,removeInfo){
	  index = indexOf(tabs, tabId);
	  tabs.splice(index, 1);
  });
  function updateAll(){
	 var time = new Date().getTime();
	  for(index = 0; index < tabs.length; index++){
		  i = indexOf(stor, tabs[index]);
		  if(i != -1){
			  stor[i+2] += (new Date().getTime()-stor[index+1]);
		  }
	  }
	  	chrome.storage.local.set({'website':stor});

  }
  function shorten(url){
		var domain = url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
		return domain;
  }
  function indexOf( array,  key){
	  for(index = 0; index < array.length; index++){
		if(key == array[index]){
			return index;
			break;
		}
	  }
	  return -1;
  }
chrome.runtime.onMessage.addListener( function (message, sender, sendResponse) {
if (message.clicked) {
	chrome.tabs.create({url : chrome.extension.getURL('page.html')});
  }
});