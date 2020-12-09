#! /bin/sh

# hugo --baseURL=/ --gc --minify
# now -n ermu ./public
# open https://ermu.df1228.vercel.app


# hugo --baseURL=/ --gc --minify
# rsync -avP public/* ucloud.bj:~/ermu/
# ssh ucloud.bj "sudo cp -r ermu/* /var/www/html/ermu/ && caddy reload --config /etc/caddy/Caddyfile"

echo "building ......"
hugo --gc --minify

echo "uploading ....."
rsync -avP public/* ermu:~/2mui.com/

echo "reload caddy web server ....."
ssh ermu "sudo cp -r ~/2mui.com/* /var/www/html/2mui.com/"
ssh ermu "sudo systemctl reload caddy"
