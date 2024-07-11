document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.querySelector('input[name="contact"]:checked') ? document.querySelector('input[name="contact"]:checked').value : '';
    const phone = document.getElementById('phone').value;
    const terms = document.getElementById('terms').checked;

    // Validando os campos
    const isValid = validateForm(name, email, age, gender, contact, phone, terms);

    if (isValid) {
        showSuccessMessage('Formulário enviado com sucesso!');
        // Aqui você pode enviar os dados do formulário para o servidor, caso necessário
    } else {
        showErrorMessage('Por favor, preencha todos os campos obrigatórios.');
    }
});

// Mostrar/esconder o campo de telefone com base na seleção de contato
document.querySelectorAll('input[name="contact"]').forEach((elem) => {
    elem.addEventListener('change', function(event) {
        const value = event.target.value;
        const phoneGroup = document.getElementById('phone-group');
        if (value === 'phone') {
            phoneGroup.style.display = 'block';
            document.getElementById('phone').setAttribute('required', 'required');
        } else {
            phoneGroup.style.display = 'none';
            document.getElementById('phone').removeAttribute('required');
        }
    });
});

// Validar entrada no campo de telefone para permitir apenas números
document.getElementById('phone').addEventListener('input', function(event) {
    const phoneValue = this.value;
    this.value = phoneValue.replace(/\D/g, ''); // Remove tudo que não for dígito
});

// Função para validar o formulário
function validateForm(name, email, age, gender, contact, phone, terms) {
    let isValid = true;

    if (!name) {
        isValid = false;
        document.getElementById('name').classList.add('error');
    } else {
        document.getElementById('name').classList.remove('error');
    }

    if (!email) {
        isValid = false;
        document.getElementById('email').classList.add('error');
    } else {
        document.getElementById('email').classList.remove('error');
    }

    if (!age) {
        isValid = false;
        document.getElementById('age').classList.add('error');
    } else {
        document.getElementById('age').classList.remove('error');
    }

    if (!gender) {
        isValid = false;
        document.getElementById('gender').classList.add('error');
    } else {
        document.getElementById('gender').classList.remove('error');
    }

    if (!contact) {
        isValid = false;
        const radioGroup = document.querySelector('.radio-group');
        radioGroup.classList.add('error');
    } else {
        const radioGroup = document.querySelector('.radio-group');
        radioGroup.classList.remove('error');
    }

    // Verificar se o campo de telefone contém apenas números
    if (contact === 'phone') {
        const phoneValue = phone.trim();
        if (!phoneValue || !/^\d+$/.test(phoneValue)) {
            isValid = false;
            document.getElementById('phone').classList.add('error');
        } else {
            document.getElementById('phone').classList.remove('error');
        }
    }

    if (!terms) {
        isValid = false;
        document.getElementById('terms').classList.add('error');
    } else {
        document.getElementById('terms').classList.remove('error');
    }

    return isValid;
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.textContent = message;
    successMessage.classList.add('success-message');
    document.getElementById('testForm').appendChild(successMessage);

    setTimeout(function() {
        successMessage.remove();
    }, 3000); // Remove a mensagem após 3 segundos
}

// Função para mostrar mensagem de erro
function showErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    
    const errorMessageContainer = document.getElementById('error-message-container');
    errorMessageContainer.innerHTML = ''; // Limpa mensagens antigas
    errorMessageContainer.appendChild(errorMessage);

    setTimeout(function() {
        errorMessage.remove();
    }, 3000); // Remove a mensagem após 3 segundos
}
