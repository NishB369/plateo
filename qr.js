function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    function onScanSuccess(decodeText, decodeResult) {
        try {
            let url = new URL(decodeText); // Validate if decodeText is a valid URL
            window.location.href = decodeText; // Redirect to the scanned URL
        } catch (e) {
            alert("Invalid QR Code URL: " + decodeText); // Handle invalid URLs
        }
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 } // Define scanner properties
    );
    htmlscanner.render(onScanSuccess);
});
