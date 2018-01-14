# Chrome Disable CORS
function chromecors() {
    TASKKILL /F /IM chrome.exe
    Start-Process -FilePath "c:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -ArgumentList @("--disable-web-security", "--user-data-dir=""C:\Chrome""")
}

chromecors