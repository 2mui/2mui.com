#! /bin/sh

# hugo --baseURL=/ --gc --minify
# now -n ermu ./public
# open https://ermu.df1228.vercel.app


hugo --baseURL=/ --gc --minify
rsync -avP public/* ucloud.bj:~/ermu/
ssh ucloud.bj "sudo cp -r ermu/* /var/www/html/ermu/ && caddy reload --config /etc/caddy/Caddyfile"
