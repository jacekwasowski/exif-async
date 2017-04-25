#!/usr/bin/env bash

green="\033[0;32m"
red="\033[0;31m"
normal="\033[0m"

exif=$(node ./test/test.js ./test/photo_exif.jpg)
printf "\n${normal}exif-async module, when photo does contain EXIF data, should return EXIF data - "
if [[ ${exif} =~ "exif" ]]; then
  printf "${green}PASS\n"
else
  printf "${red}FAILED\n"
fi

exif=$(node ./test/test.js ./test/photo_no_exif.jpg)
printf "${normal}exif-async module, when photo does NOT contain EXIF data, should return error code - "
if [[ ${exif} =~ "NO_EXIF_SEGMENT" ]] ||
   [[ ${exif} =~ "PARSING_ERROR" ]] ||
   [[ ${exif} =~ "NOT_A_JPEG" ]]; then
  printf "${green}PASS\n"
else
  printf "${red}FAILED\n"
fi
