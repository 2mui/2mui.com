#! /bin/sh

# hugo --baseURL=/ --gc --minify
# now -n ermu ./public
# open https://ermu.df1228.vercel.app


# hugo --baseURL=/ --gc --minify
# rsync -avP public/* ucloud.bj:~/ermu/
# ssh ucloud.bj "sudo cp -r ermu/* /var/www/html/ermu/ && caddy reload --config /etc/caddy/Caddyfile"


echo "building ......"
hugo --baseURL=/ --gc --minify

echo "uploading ....."
rsync -avP public/* ermu:~/ermu/

echo "reload web server ....."
ssh ermu "sudo caddy reload --config /home/ubuntu/Caddyfile"