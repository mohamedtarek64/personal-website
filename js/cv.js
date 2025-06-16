// CV PDF Download Functionality

document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-pdf');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Temporarily hide the download button for printing
            downloadButton.style.display = 'none';
            
            // Use the browser's print functionality
            window.print();
            
            // Show the button again after printing dialog closes
            setTimeout(function() {
                downloadButton.style.display = 'flex';
            }, 1000);
        });
    }
    
    // Handle print event
    window.addEventListener('beforeprint', function() {
        prepareForPrint();
    });
    
    window.addEventListener('afterprint', function() {
        resetAfterPrint();
    });
    
    // Functions to prepare and reset
    function prepareForPrint() {
        // Add a class to the body for print-specific styles
        document.body.classList.add('printing');
        
        // You could add additional preparation here if needed
        // For example, expanding any collapsed sections
    }
    
    function resetAfterPrint() {
        // Remove the print class
        document.body.classList.remove('printing');
        
        // Reset any changes made during preparation
    }
});

// Add window focus tracking to detect when print dialog closes
let windowFocus = true;

window.addEventListener('focus', function() {
    windowFocus = true;
    
    // If returning from print dialog
    if (document.body.classList.contains('printing')) {
        resetAfterPrint();
    }
});

window.addEventListener('blur', function() {
    windowFocus = false;
});

function resetAfterPrint() {
    document.body.classList.remove('printing');
} 