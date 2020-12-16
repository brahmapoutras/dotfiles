#!/bin/zsh
#source ~/.xprofile
export STATUSBAR="slstatus"
killall slstatus; slstatus &
sh $HOME/.cron_background_image.sh
exec st -T "SSH Monitor" -e watch -n4 ~/.dwm/./net_stats.sh &
exec st -T "Network Manager" -e nmtui &
exec st -T "Task Manager" -e htop & 
exec st -T "Alsa Volume Control" -e alsamixer & 
# exec clion & 
exec st -T "Development Tools" -e zsh -c 'echo "Open Breakneck Bet app on neovim - Press Enter to continue" && read -n 1 && cd /media/veracrypt58/workspace/breakn3ckbet && nvim -S Session.vim' &
killall surf; exec /home/vad/my_surf/./surf-open.sh duckduckgo.com &
#killall qutebrowser; exec qutebrowser -T "My Web Browser" &
#killall surf; $HOME/my_surf/./surf-open-startup.sh duckduckgo.com &
killall veracrypt; exec veracrypt &
exec st -t "MyCMS" -e zsh -c 'echo "Mongo.db with auth and ssl - Press Enter to continue" && read -n 1 && exec $HOME/mongod_run.sh;zsh' &
exec st -t "MyCMS" -e zsh -c 'echo "Node.js bootstrapping spheenx.io - Press Enter to continue" && read -n 1 && sudo node $CMS_PATH/bootstrapper.js;zsh' & 
exec st -t "MyCMS" -e zsh -c 'echo "AdminMongo Web Client for MongoDB" && read -n 1 && sudo node $HOME/adminMongo/app.js;zsh' & 
exec st -T "Music Library" -e ncmpcpp & 
# exec timidity -ig & 
exec st -T "Videos" -e zsh -c 'echo "Which twitch stream are you gonna watch today? Press Enter when ready" && tmpfile=$(mktemp) && read tmpfile && echo "Resolution? Press enter when done" && tmpfile2=$(mktemp) && read tmpfile2 && streamlink -p mpv --default-stream "$tmpfile2"p https://www.twitch.tv/$tmpfile;zsh' &
sleep 1
exec st -T "File Manager" -e ranger & 
sleep 1
exec st -T "CryptoDevices" -e veracrypt -t -k "" --pim=0 --protect-hidden=no /dev/sdc1 /media/veracrypt58 &
exec qtox &
exec st -T "Email Client" -e neomutt &
