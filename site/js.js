 function openMenu() {
  const lista = document.getElementById('navbar');
  lista.style.display = lista.style.display === 'none' || lista.style.display === '' ? 'block' : 'none';
  lista.classList.toggle('show');
}

function getOut() {
    // Redireciona para a página inicial
     window.location.href = "C:\\Users\\AndreydosSantos\\Downloads\\site\\teste01.html"; // Ajuste conforme a configuração do seu servidor
 
}

function myFunction() {
      const lista = document.getElementById('lista');
      lista.style.display = lista.style.display === 'none' ? 'block' : 'none';
    }


    function aboutMe() {
        const messageDiv = document.getElementById('message');
        messageDiv.style.display = 'block'; // Mostra a mensagem

       setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);

    }

 function contactMe() {
        const messageDiv = document.getElementById('contato');
        messageDiv.style.display = 'block'; // Mostra a mensagem

       setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 4000);

    }


 function thankMe() {
        const messageDiv = document.getElementById('thanks');
        messageDiv.style.display = 'block'; // Mostra a mensagem

       setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);

    }

 function openExcel() {
        window.open('Account (1).xlsx', '_blank'); // Substitua pelo caminho do seu arquivo
    }


function openEpda() {
        window.open('EpdaBrazil.xlsb', '_blank'); // Substitua pelo caminho do seu arquivo
    }


function openPortGuide() {
        window.open('PortGuide.xlsx', '_blank'); // Substitua pelo caminho do seu arquivo
    }

function openCusteio() {
        window.open('Custeio.xlsb', '_blank'); // Substitua pelo caminho do seu arquivo
    }

function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText === '') {
          alert('Por favor, digite uma tarefa.');
          return;
      }

      const list = document.getElementById('lista');
      const listItem = document.createElement('li');

      // Criando a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // Criando o texto da tarefa
      const taskLabel = document.createElement('span');
      taskLabel.textContent = taskText;

      // Criando o botão de lixeira com SVG
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" background-color:"white">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg>
      `;

deleteButton.style.backgroundColor = 'white'; // Fundo branco
deleteButton.style.border = '1px #ccc'; // Borda leve
deleteButton.style.borderRadius = '4px'; // Bordas arredondadas
deleteButton.style.cursor = 'pointer'; // Cursor clicável
deleteButton.style.padding = '5px';
deleteButton.style.marginLeft = '15px';

      deleteButton.onclick = function() {
          list.removeChild(listItem);
      };

      // Montando a lista
      listItem.appendChild(checkbox);
      listItem.appendChild(taskLabel);
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      taskInput.value = ''; // Limpa o campo de entrada
  }

const portMessages = {
    "São Francisco": `
        Terminais: Comm. Quay, TESC \n
        Agency Fee: USD 7.800 fixo   \n
        !: Na montagem da EPDA, Comm. Quay se monta normal como sempre e no TESC também, porém tem que olhar o Wharfage que tem o New Tariff e o Watchmen também vai ser incluso (Não é porque é terminal privado que não vai Watchmen, só em casos específicos).
    `,
    "Rio Grande": `Terminais: Comm. Quay, Yara South, Yara North, ERG \n
                   O terminal ERG também é conhecido como "Ecovix".`,
    "Porto Alegre": "Terminais: Comm. Quay",
    "Imbituba": "Terminais: Comm. Quay",
    "Santos": "Terminais: Comm. Quay, Termag, Tiplam, HBSA",
    "Paranaguá": "Terminais: Comm. Quay, Pasa, Bunge, Soceppa, Fospar",
    "Vitória": `Terminais: Comm. Quay, TPD4, PEIU, TVV \n
                 O terminal TPD4 em Vitória também é conhecido como tubarão.`,
    "Salvador": `Terminais: Comm. Quay, TMG, TGS NORTE, TGS Sul \n
                 O terminal TMG também é conhecido como "Aratu".`,
    "São Luiz": `Terminais: Comm. Quay, PDM \n
                 O terminal Comm. Quay de São Luiz também é conhecido como "Itaqui".`,
    "Vila do Conde": "Terminais: Comm. Quay 301, Comm. Quay 302, HBSA, Anchorage",
    "Santarém": "Terminais: Comm. Quay, Anchorage",
    "Itacoatiara": "Terminais: Anchorage"
};


function displaySelectedPort() {
    const radios = document.getElementsByName('bl');
    let selectedPort;
    
    for (const radio of radios) {
        if (radio.checked) {
            selectedPort = radio.value;
            break;
        }
    }

    const messageDiv = document.getElementById('selectedPortMessage');
    messageDiv.innerHTML = ''; // Limpa mensagens anteriores
    
    if (selectedPort) {
        messageDiv.textContent = `Você selecionou o porto: ${selectedPort}`;
   
        
        // Adiciona a mensagem de tarifa correspondente
        if (portMessages[selectedPort]) {
            const tariffMessage = document.createElement('p');
            tariffMessage.textContent = portMessages[selectedPort];
            messageDiv.appendChild(tariffMessage);
            
        }

        // Botão de fechar
const closeButton = document.createElement('button');
closeButton.textContent = 'Fechar';
closeButton.className = 'close-button'; // Adiciona a classe CSS
closeButton.onclick = function() {
    messageDiv.style.display = 'none'; // Esconde a mensagem ao fechar
};

messageDiv.appendChild(closeButton);
messageDiv.style.display = 'block'; // Mostra a mensagem
    } else {
        alert('Por favor, selecione um porto.');
    }
}


function sendTasks() {
            const emailInput = document.getElementById('emailInput').value.trim();
            const taskList = document.getElementById('lista');
            const tasks = [];

            // Verifica se o e-mail está vazio
            if (emailInput === '') {
                alert('Por favor, digite um e-mail.');
                return;
            }

            // Percorre a lista de tarefas e pega o texto de cada tarefa
            for (let i = 0; i < taskList.children.length; i++) {
                const taskText = taskList.children[i].querySelector('span').textContent;
                tasks.push(taskText);
            }

            // Cria o corpo do e-mail com a lista de tarefas
            let emailBody = "Aqui estão suas tarefas que faltam concluir :) \n\n";
            tasks.forEach(function(task) {
                emailBody += "- " + task + "\n";
            });

            // Codifica o corpo do e-mail para garantir que caracteres especiais sejam tratados
            const encodedBody = encodeURIComponent(emailBody);

            // Constrói o link mailto com o assunto e corpo
            const mailtoLink = `mailto:${emailInput}?subject=Minha Lista de Tarefas&body=${encodedBody}`;

            // Abre o cliente de e-mail com o corpo já preenchido
            window.location.href = mailtoLink;
        }






