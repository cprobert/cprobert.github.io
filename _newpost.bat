@echo off
setlocal
	set /P postname=Enter name of post: 
	rake post title="%postname%"
	pause
endlocal
