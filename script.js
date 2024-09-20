function generateQrCode() {
    let url = document.getElementById('url-input').value
    let qrCode = document.getElementById('qr-code-img')
    
    // Limpa o QR code existente
    qrCode.src = ''
    
    // Gera o QR code
    if (url) {
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${url}`
    }
}