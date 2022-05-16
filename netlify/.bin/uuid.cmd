@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\gatsby\node_modules\uuid\dist\bin\uuid" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\gatsby\node_modules\uuid\dist\bin\uuid" %*
)