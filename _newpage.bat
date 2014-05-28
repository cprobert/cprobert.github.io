@echo off
setlocal
	set /P postname=Enter name of page: 
	rake page name="%postname%"
	pause
endlocal
