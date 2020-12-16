#!/bin/sh
export DISPLAY=:0
/usr/bin/xmodmap $HOME/.Xmodmap
DISPLAY=:0 $HOME/.local/bin/wal -i $WALLPAPER_PATH
xsetroot -name "fsignal:xrdb"
xsetroot -name "fsignal:2"

