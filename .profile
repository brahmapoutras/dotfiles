#!/bin/zsh
# zsh profile file. Runs on login. Environmental variables are set here.

# Connect bluetooth keyboard on login
[ ! -f ${XDG_DATA_HOME:-$HOME}/connect_bluetooth_kb.sh ] && sh ${XDG_DATA_HOME:-$HOME}/connect_bluetooth_kb.sh 

# Connect to .zshrc
echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope

# Start graphical server on tty1 if not already running.
[ "$(tty)" = "/dev/tty1" ] && ! ps -e | grep -qw Xorg && exec startx

# Switch escape and caps if tty and no passwd required:
[ ! -f ${XDG_DATA_HOME:-$HOME/.local/share}/ttymaps.kmap ] && sudo -n loadkeys ${XDG_DATA_HOME:-$HOME/.local/share}/ttymaps.kmap 2>/dev/null

