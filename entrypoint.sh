#!/bin/sh -l
cat $1
hostlist-compiler -c "$1" -o "$2" -v true