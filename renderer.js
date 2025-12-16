// Renderer process script with enhanced interactivity

document.addEventListener('DOMContentLoaded', () => {
    console.log('Renderer process loaded');
    
    // Add smooth animations and interactions
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach((card, index) => {
        // Click animation
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
        
        // Parallax effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;
            
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
        
        // Stagger animation on load
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }, 100);
    });
    
    // Add typing effect to title (optional enhancement)
    const titleMain = document.querySelector('.title-main');
    if (titleMain) {
        const text = titleMain.textContent;
        titleMain.textContent = '';
        titleMain.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleMain.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 300);
    }
    
    // Animate badges
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, 800 + (index * 100));
    });
    
    // Command box hover effects
    const commands = document.querySelectorAll('.command');
    commands.forEach(command => {
        command.addEventListener('click', () => {
            // Create a visual feedback
            command.style.background = 'rgba(16, 185, 129, 0.2)';
            setTimeout(() => {
                command.style.background = '';
            }, 300);
        });
    });
    
    // System Information Button Handler
    const systemInfoBtn = document.getElementById('systemInfoBtn');
    const systemInfoDisplay = document.getElementById('systemInfo');
    
    if (systemInfoBtn) {
        if (!window.electronAPI) {
            console.warn('electronAPI not available - preload script may not have loaded');
            systemInfoBtn.disabled = true;
            systemInfoBtn.innerHTML = '<span>API Not Available</span>';
        } else {
            systemInfoBtn.addEventListener('click', async () => {
                try {
                    // Show loading state
                    systemInfoBtn.disabled = true;
                    systemInfoBtn.innerHTML = '<span>Loading...</span>';
                    
                    // Get system information from main process
                    const info = await window.electronAPI.getSystemInfo();
                    
                    // Display the information
                    document.getElementById('osType').textContent = info.osType || 'N/A';
                    document.getElementById('platform').textContent = info.platform || 'N/A';
                    document.getElementById('osVersion').textContent = info.osVersion || 'N/A';
                    document.getElementById('arch').textContent = info.arch || 'N/A';
                    document.getElementById('totalMemory').textContent = info.totalMemory || 'N/A';
                    document.getElementById('freeMemory').textContent = info.freeMemory || 'N/A';
                    document.getElementById('cpuCount').textContent = info.cpuCount || 'N/A';
                    
                    // Show the info display with animation
                    systemInfoDisplay.style.display = 'block';
                    systemInfoDisplay.style.opacity = '0';
                    systemInfoDisplay.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        systemInfoDisplay.style.transition = 'all 0.4s ease';
                        systemInfoDisplay.style.opacity = '1';
                        systemInfoDisplay.style.transform = 'translateY(0)';
                    }, 50);
                    
                    // Update button
                    systemInfoBtn.innerHTML = '<span>Refresh System Info</span>';
                    systemInfoBtn.disabled = false;
                    
                } catch (error) {
                    console.error('Error fetching system info:', error);
                    systemInfoBtn.innerHTML = '<span>Error - Try Again</span>';
                    systemInfoBtn.disabled = false;
                    
                    // Show error message in display
                    systemInfoDisplay.style.display = 'block';
                    systemInfoDisplay.innerHTML = '<p style="color: #ef4444; text-align: center;">Failed to load system information. Please try again.</p>';
                }
            });
        }
    } else {
        console.warn('System Info button not found in DOM');
    }
    
    console.log('Enhanced interactions loaded');
});
