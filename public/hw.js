class Contact {
    constructor(msg, name, email) {
        this.msg = msg;
        this.name = name;
        this.email = email;
    }
}

class UI {
    static displayData() {
        const datas = Store.getData();
        datas.forEach((Contact) => UI.addDataToList(Contact));
    }

    static addDataToList(Contact) {
        const list = document.querySelector('#Contact-list');

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${Contact.msg.value}</td>
      <td>${Contact.name.value}</td>
      <td>${Contact.email.value}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete"> REMOVE </a></td>
    `;

        list.appendChild(row);
    }

    static deleteCon(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#ContactForm');
        container.insertBefore(div,form);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#msg').value='';
        document.querySelector('#name').value='';
        document.querySelector('#email').value='';
    }
}


class Store {
    static getData() {
        let datas;
        if (localStorage.getItem('datas') === null) {
            datas = [];
        } else {
            datas = JSON.parse(localStorage.getItem('datas'));
        }

        return datas;
    }


    static addData(data) {
        const datas = Store.getData();
        datas.push(data);
        localStorage.setItem('datas', JSON.stringify(datas));
    }

    static removeData(email) {
        const datas = Store.getData();

        datas.forEach((data, index) => {
            if (data.email.value === email.value) {
                datas.splice(index, 1);
            }
        });

        localStorage.setItem('datas', JSON.stringify(datas));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayData);
const myForm = document.querySelector('#Con-form').myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msgInput = document.querySelector('#msg');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    if (nameInput.value === '' || emailInput.value === '' || msgInput.value === '') {
        UI.showAlert('PLEASE FILL IN ALL FIELD', 'danger');
    } else {
        const data = new Contact(msgInput, nameInput, emailInput);
        UI.addDataToList(data);
        Store.addData(data);
        UI.showAlert('ADDED', 'success')
        UI.clearFields();
    }
});
const list = document.querySelector('#Contact-list');
list.addEventListener('click', (e) => {
    e.preventDefault();
    UI.deleteCon(e.target);
    Store.removeData(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('REMOVED', 'success');
});
