PHP nginx pushstream broadcast message
---
symbol in message, after `-d`, must be escaped  
```sh
<?php
exec('/usr/bin/curl -s -v -X POST "http://localhost/pub?id=gpio" -d \"ON\"');
```
