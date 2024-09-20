document.getElementById('generate-btn').addEventListener('click', function() {
    let url = document.getElementById('url-input').value
    let qrCodeContainer = document.getElementById('qr-code')
    
    // Limpa o QR code existente
    qrCodeContainer.innerHTML = ''
    
    // Gera o QR code
    if (url) {
        $(qrCodeContainer).qrcode({
            text: url,
            width: 180,
            height: 180,
            colorDark: "#ff0000"
        })
    }
})