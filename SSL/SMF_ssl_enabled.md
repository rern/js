SMF with SSL enabled
---
Change `public_html` to `private_html`  

`./Settings.php`   
```sh
# keep '$boardurl' as 'http'

########## Directories/Files ##########
# Note: These directories do not have to be changed unless you move things.
$boarddir = '/home/path/private_html/forum';		# The absolute path to the forum's folder. (not just '.'!)
$sourcedir = '/home/path/private_html/forum/Sources';		# Path to the Sources directory.
$cachedir = '/home/path/private_html/forum/cache';		# Path to the cache directory.
```

Login > Admin > Theme Settings > Theme Directory:  
`/home/path/private_html/forum/Themes/name`
