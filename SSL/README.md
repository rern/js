Set up SSL for free
---

**1. Get a [Let's Encrypt](https://letsencrypt.org/) certificate** (Free)  
`www.domain.com:2222 > login`  
`Domain > Advanced Features > SSL Certificates > Free & automatic certificate from Let's Encrypt`  

**2. Move directories and files**  
`public_html > private_html`  

**3. Add a redirect file**  
`.../public_html/.htaccess`
```sh
# redirect non-www > www, http > https

RewriteEngine on
RewriteCond %{HTTP_HOST} !^www\.
RewriteCond %{HTTPS}s on(s)|offs()
RewriteRule ^ http%1://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
