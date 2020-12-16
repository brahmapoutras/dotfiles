#!/bin/sh
printf "\033]710;xft:Hack:size=%d:antialias=true\007" $1 
printf "\033]711;xft:Hack:size=%d:antialias=true\007" $1 
printf "\033]712;xft:Hack:size=%d:antialias=true\007" $1 
printf "\033]713;xft:Hack:size=%d:antialias=true\007" $1 

printf "\033]710;:fontsize=%d:antialias=true\007" $1 
printf "\033]711;xft:fontsize=%d:antialias=true\007" $1 
printf "\033]712;xft:fontsize=%d:antialias=true\007" $1 
printf "\033]713;xft:fontsize=%d:antialias=true\007" $1 
