document.getElementById('wifiSettingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;
    
    // Here you would send the SSID and Password to the backend for updating the router settings.
    alert(`SSID: ${ssid}, Password: ${password}`);
});
