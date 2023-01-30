function deleteByEmail() {
        let email = document.querySelector('input[name=email]').value;
        let result = document.getElementById('result');
        let foundRow;
    
        let customers = document.querySelector('#customers tbody');
        let rows = customers.querySelectorAll('tr');
    
        for (let row of rows) {
            let tdEmail = row.querySelector('td:last-child');
    
            if (tdEmail.textContent === email) {
                foundRow = row;
                break;
            }
        }
    
        if (foundRow) {
            customers.removeChild(foundRow);
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }