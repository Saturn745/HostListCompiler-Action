#!/bin/sh -l
cat $1 >> $GITHUB_OUTPUT
hostlist-compiler -c "$1" -o "$2" -v true