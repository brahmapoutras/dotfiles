#!/bin/sh

# xinitrc runs automatically when you run startx.

# There are some small but important commands that need to be run when we start
# the graphical environment. I keep those commands in ~/config/xprofile because
# that file is run automatically if someone uses a display manager (login
# screen) and so they are needed there. To prevent doubling up commands, I
# source them here with the line below.

# export STATUSBAR="i3blocks" # Uncomment this line when using i3.
[[ -f ~/.Xresources ]] && xrdb -merge -I$HOME ~/.Xresources

#[ -f "${XDG_CONFIG_HOME:-$HOME}/.xprofile" ] && . "${XDG_CONFIG_HOME:-$HOME}/.xprofile"
[ -f "$HOME/.xprofile" ] && . "$HOME/.xprofile"

# Comment/uncomment these lines depending on what wm you want to use. Also
# check the i3blocks line above.
#exec ck-launch-session dbus-launch --sh-syntax --exit-with-session dwm
exec dwm

