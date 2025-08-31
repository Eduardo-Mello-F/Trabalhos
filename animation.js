document.addEventListener('DOMContentLoaded', function() {
    // Efeito de glitch no texto "ERROR 404"
    function glitchEffect() {
        const errorText = document.querySelector('.error p');
        if (errorText && errorText.textContent.includes('ERROR 404')) {
            setInterval(() => {
                const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
                const originalText = 'ERROR 404. NOT FOUND!!!';
                let glitchedText = '';
                
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() < 0.1) {
                        glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    } else {
                        glitchedText += originalText[i];
                    }
                }
                
                errorText.textContent = glitchedText;
                
                setTimeout(() => {
                    errorText.textContent = originalText;
                }, 100);
            }, 2000);
        }
    }
    
    glitchEffect();
});

