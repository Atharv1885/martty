document.querySelectorAll('.upload-area').forEach(area => {
            area.addEventListener('click', function() {
                alert('File upload functionality would be implemented here');
            });
        });

        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.textContent !== 'New Return') {
                    alert('Button clicked: ' + this.textContent);
                }
            });
        });

        document.querySelector('.footer-fab').addEventListener('click', function() {
            alert('Edit mode activated');
        });

    
        document.querySelector('.search-box input').addEventListener('input', function(e) {
            console.log('Searching for:', e.target.value);
        });

        document.querySelector('.btn-hot-deal').addEventListener('click', function() {
            alert('Create Hot Deal functionality would be implemented here');
        });

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                console.log('Product card clicked');
            });
        });