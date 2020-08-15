#!/bin/bash
set -e
# ^
# This only stops execution if the last command in a pipeline has an error.
# There's a Bash specific option, `set -o pipefail` which can be used to propagate errors so that the return value of the pipeline command is non-zero if one of the preceding commands exited with a non-zero status.

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"