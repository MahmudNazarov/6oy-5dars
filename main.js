const todoInput = document.getElementById('todo-input');
        const addTodoButton = document.getElementById('add-todo');
        const todoList = document.getElementById('todo-list');
        const toggleThemeButton = document.getElementById('toggle-theme');

        addTodoButton.addEventListener('click', () => {
            const text = todoInput.value.trim();
            if (text === '') return;

            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <label>
                    <input type="checkbox">
                    ${text}
                </label>
                <div class="actions">
                    <button class="edit">✏️</button>
                    <button class="delete">🗑️</button>
                </div>
            `;
            todoList.appendChild(li);
            todoInput.value = '';

            attachEvents(li);
        });

        function attachEvents(item) {
            const checkbox = item.querySelector('input[type="checkbox"]');
            const deleteButton = item.querySelector('.delete');

            checkbox.addEventListener('change', () => {
                item.classList.toggle('completed', checkbox.checked);
            });

            deleteButton.addEventListener('click', () => {
                item.remove();
            });
        }

        document.querySelectorAll('.todo-item').forEach(attachEvents);

        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('light');
            toggleThemeButton.textContent = document.body.classList.contains('light') 
                ? 'Switch to Dark Mode' 
                : 'Switch to Light Mode';
        });