
```sh
pacman -Sy base-devel pcre zlib guile git wget openssl

mkdir /usr/local/nginx/logs

NGINX_PUSH_STREAM_MODULE_PATH=$PWD/nginx-push-stream-module
git clone https://github.com/wandenberg/nginx-push-stream-module.git

wget http://nginx.org/download/nginx-1.9.9.tar.gz
bsdtar xzvf nginx-1.9.9.tar.gz
cd nginx-1.9.9

./configure \
	--sbin-path=/usr/local/bin \
	--conf-path=/etc/nginx/nginx.conf \
	--error-log-path=/var/log/nginx/error.log \
	--http-log-path=/var/log/nginx/access.log \
	--pid-path=/var/run/nginx.pid \
	--user=http \
	--group=http \
	--with-http_gzip_static_module \
	--add-module=../nginx-push-stream-module

make

su make install

# test
sudo /usr/local/sbin/nginx -v
	# nginx version: nginx/1.9.9

# test configuration
sudo /usr/local/sbin/nginx -c $NGINX_PUSH_STREAM_MODULE_PATH/misc/nginx.conf -t
	# nginx: the configuration file $NGINX_PUSH_STREAM_MODULE_PATH/misc/nginx.conf syntax is ok
	# nginx: configuration file $NGINX_PUSH_STREAM_MODULE_PATH/misc/nginx.conf test is successful

# run
sudo nginx
```
