#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if command -v mise >/dev/null 2>&1; then
  exec mise exec -- node "$@"
fi

exec node "$@"
