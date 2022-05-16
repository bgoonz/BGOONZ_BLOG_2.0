@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\gatsby-plugin-utils\node_modules\mime\cli.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\gatsby-plugin-utils\node_modules\mime\cli.js" %*
)