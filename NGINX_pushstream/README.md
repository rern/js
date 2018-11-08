NGINX pushstream - broadcast messages
---
[NGINX pushstream](https://github.com/wandenberg/nginx-push-stream-module) - publish / subscribe messages  

**Prepare**
- server side
	- NGINX with pushstream (custom compiled)
	- [NGINX setup](https://github.com/wandenberg/nginx-push-stream-module#basic-configuration) pushstream support in `/etc/nginx/nginx/.conf`

- client side (javascript)  
```js
// need 'pushstream.js'
var pushstream0 = new PushStream( {
	host: window.location.hostname,
	port: window.location.port,
	modes: GUI.mode
} );

// new channel 'channel0'
pushstream0.addChannel( 'channel0' );

// on receive from 'pushstream0' broadcast
pushstream0.onmessage = function( data ) {
	// 'data' is array - 'json' is in data[ 0 ] 
	alert( data[ 0 ].msg ); // 'message'
}

// subscribe 'pushstream0'
pushstream0.connect();
```

**Broadcast**  
- Python  
```python
import json
import urllib
import urllib2

url = 'http://localhost/pub?id=gpio'
headerdata = { 'Content-type': 'application/json', 'Accept': 'application/json' }

data = { 'msg': 'message' }
req = urllib2.Request( url, json.dumps( data ), headers = headerdata )

response = urllib2.urlopen( req )
```
credit: [Varun Verma](https://varunver.wordpress.com/2013/05/20/python-post-json-data-curl-equivalent-in-python-using-urllib2/)  

or
```python
# need 'requests' pip package
import requests

requests.post( 'http://localhost/pub?id=channel0', json={ 'msg': 'message' } )
```

- PHP    
```php
$ch = curl_init( 'http://localhost/pub?id=channel0' );
curl_setopt( $ch, CURLOPT_HTTPHEADER, array( 'Content-Type:application/json' ) );
curl_setopt( $ch, CURLOPT_POSTFIELDS, json_encode( array( 'msg' => 'message' ) ) );
curl_exec( $ch );
curl_close( $ch );

// or
exec( '/usr/bin/curl -s -v -X POST "http://localhost/pub?id=channel0" -d "{ \"msg\": \"message\" }"' );
```

- BASH
```sh
# json : '{ "msg": "message" }'
# array: '"message1", "message2"'
curl -s -v -X POST 'http://localhost/pub?id=channel0' -d '{ "msg": "message" }'
```
