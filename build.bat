@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to verify and assemble this static gallery.
  exit /b 1
)
node scripts\check-vocabulary.mjs
if errorlevel 1 exit /b %ERRORLEVEL%
node scripts\build.mjs
exit /b %ERRORLEVEL%
