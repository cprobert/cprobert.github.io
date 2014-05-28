@echo off
@call rake theme:switch name="bootply"
jekyll build
pause