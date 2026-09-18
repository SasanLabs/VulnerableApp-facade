#!/bin/sh
cat << "EOF"
================================================================================
Thank you for using OWASP SasanLabs VulnerableApp!
This project is 100% free, open-source, and community-driven.
If it helps your testing, CI/CD pipelines, or learning about cyber security,
please support our 7 years of work by leaving a star:
⭐ https://github.com/SasanLabs/VulnerableApp
and follow: https://github.com/SasanLabs
================================================================================
EOF

exec /usr/local/openresty/bin/openresty -g "daemon off;"
