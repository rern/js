NGINX pushstream - broadcast messages
---

**Prepare**  
- javascript  
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

// connect 'pushstream0'
pushstream0.connect();
[/code]
```

**Broadcast**  
- PHP    
```php
$broadcast = '\"message\"'; // 'message' must be quotes must be inside 'escaped double quotes'
exec("/usr/bin/curl -s -v -X POST 'http://localhost/pub?id=channel0' -d $broadcast");
```

- Python  
```python
# need 'requests' package
import requests

broadcast = 'message'
requests.post('http://localhost/pub?id=channel0', json = broadcast)
```
