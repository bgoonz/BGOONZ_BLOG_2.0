@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@mapbox\mapbox-gl-style-spec\bin\gl-style-format.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@mapbox\mapbox-gl-style-spec\bin\gl-style-format.js" %*
)