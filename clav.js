function applyResponsiveClasses() {
    const elements = document.querySelectorAll('[class*="sm-"], [class*="st-"], [class*="sd-"], [class*="std-"], [class*="smt-"], [class*="smd-"]');
    const width = window.innerWidth;

    elements.forEach(element => {
        const classList = element.className.split(' ');

        // Remove all specific classes
        classList.forEach(cls => {
            if (cls.startsWith('sm-') || cls.startsWith('st-') || cls.startsWith('sd-') || cls.startsWith('std-') || cls.startsWith('smt-') || cls.startsWith('smd-')) {
                element.classList.remove(cls.replace('sm-', '').replace('st-', '').replace('sd-', '').replace('std-', '').replace('smt-', '').replace('smd-', ''));
            }
        });

        // Add specific classes based on the width
        if (width < 768) {
            classList.forEach(cls => {
                if (cls.startsWith('sm-') || cls.startsWith('smt-') || cls.startsWith('smd-')) {
                    element.classList.add(cls.replace('sm-', '').replace('smt-', '').replace('smd-', ''));
                }
            });
        } else if (width >= 768 && width < 1024) {
            classList.forEach(cls => {
                if (cls.startsWith('st-') || cls.startsWith('std-') || cls.startsWith('smt-')) {
                    element.classList.add(cls.replace('st-', '').replace('std-', '').replace('smt-', ''));
                }
            });
        } else if (width >= 1024) {
            classList.forEach(cls => {
                if (cls.startsWith('sd-') || cls.startsWith('std-') || cls.startsWith('smd-')) {
                    element.classList.add(cls.replace('sd-', '').replace('std-', '').replace('smd-', ''));
                }
            });
        }
    });
}

// Apply classes on load
applyResponsiveClasses();

// Apply classes on resize
window.addEventListener('resize', applyResponsiveClasses);