NGINX pushstream - broadcast messages
---
[NGINX pushstream](https://github.com/wandenberg/nginx-push-stream-module) - publish / subscribe messages  

**Prepare**
- server  
	* [setup](https://github.com/wandenberg/nginx-push-stream-module#basic-configuration) pushstream support in `/etc/nginx/nginx/.conf`
- client javascript  
```js
// new 'pushstream0'
var pushstream0 = new PushStream({
	host: window.location.hostname,
	port: window.location.port,
	modes: GUI.mode
});

// new channel 'channel0'
pushstream0.addChannel('channel0');

// on receive from 'pushstream0' broadcast
pushstream0.onmessage = function(data) {
	alert(data); //'message'
}

// subscribe 'pushstream0'
pushstream0.connect();
```

**Broadcast**  
- PHP    
```php
$broadcast = '\"message\"'; // 'message' must be placed inside 'escaped double quotes'
exec("/usr/bin/curl -s -v -X POST 'http://localhost/pub?id=channel0' -d $broadcast");
```

- Python  
```python
# need 'requests' package
import requests

broadcast = 'message'
requests.post('http://localhost/pub?id=channel0', json = broadcast)
```
