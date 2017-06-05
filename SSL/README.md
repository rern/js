Set up SSL for free
---

**1. Get a [Let's Encrypt](https://letsencrypt.org/) SSL certificate** (Free)  
`www.domain.com:2222 > login`  
`domain > Advanced Features > SSL Certificates > Free & automatic certificate from Let's Encrypt`  

**2. Move directories and files**  
`.../public_html/*` to `.../private_html/*`  

**3. Add a redirect file**  
`.../public_html/.htaccess`
```sh
# redirect non-www > www, http > https

RewriteEngine On 
RewriteCond %{SERVER_PORT} 80 
RewriteRule ^(.*)$ https://www.domain.com/$1 [R=301,L]
```
