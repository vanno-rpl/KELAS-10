#!/usr/bin/env sh
set -eu

cd "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

if command -v php >/dev/null 2>&1; then
    PHP_BIN=$(command -v php)
elif [ -x "$HOME/.local/bin/php" ]; then
    PHP_BIN="$HOME/.local/bin/php"
elif [ -x "$HOME/.local/opt/static-php-cli/bin/php" ]; then
    PHP_BIN="$HOME/.local/opt/static-php-cli/bin/php"
else
    echo "PHP tidak ditemukan."
    echo "Coba buka terminal baru, atau jalankan: export PATH=\"\$HOME/.local/bin:\$PATH\""
    exit 1
fi

echo "Using PHP: $PHP_BIN"
exec "$PHP_BIN" artisan serve "$@"
