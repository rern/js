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
	alert(data);          // string -> 'message'
	alert(data.message0); // json   -> 'message'
}

// connect 'pushstream0'
pushstream0.connect();
[/code]
```

**Broadcast**  
- PHP    
```php
// put data in 'exec()' directly, quotes must be escaped

// string
$data = 'message';
// or json
$data = {'message0':'message'};

// broadcast
exec('/usr/bin/curl -s -v -X POST "http://localhost/pub?id=channel0" -d $data');
```

- Python  
```python
# need 'requests' package
import requests

# string
requests.post('http://localhost/pub?id=channel0', data='message')

# json
requests.post('http://localhost/pub?id=channel0', json={'message0':'message'})
```
