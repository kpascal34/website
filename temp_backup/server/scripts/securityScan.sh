#!/bin/bash
curl -s -I https://yourdomain.com | 
awk '
BEGIN { RS="\r\n"; failed=0 }
$1 ~ /Content-Security-Policy/ && !/default-src '\''self'\''/ { print "CSP misconfigured"; failed=1 }
$1 ~ /Strict-Transport-Security/ && !/max-age=63072000/ { print "HSTS issues"; failed=1 }
$1 ~ /X-Content-Type-Options/ && !/nosniff/ { print "MIME sniffing enabled"; failed=1 }
END { exit failed }' 