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
rsync -avP public/* 2mui.com:~/2mui.com/

echo "reload caddy web server ....."
ssh 2mui.com "sudo cp -r ~/2mui.com/* /var/www/html/2mui.com/"
ssh 2mui.com "sudo chmod -R +644 /var/www/html/2mui.com/"
ssh 2mui.com "sudo systemctl reload caddy"
