#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
exec ./scripts/node-run.sh ./node_modules/next/dist/bin/next dev "$@"
