const USERS_KEY = 'jsgym-users';
const CURRENT_USER_KEY = 'jsgym-current-user-id';
const GUEST_PROGRESS_KEY = 'jsgym-completed';

function generateId() {
  return 'user_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function getUsers() {
  try {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register(username, password) {
  if (!username || !password) {
    return { success: false, error: 'Заповніть всі поля' };
  }
  if (username.length < 3) {
    return { success: false, error: 'Мінімум 3 символи для нікнейму' };
  }
  if (password.length < 4) {
    return { success: false, error: 'Мінімум 4 символи для паролю' };
  }

  const users = getUsers();
  if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
    return { success: false, error: 'Цей нікнейм вже зайнятий' };
  }

  let guestProgress = [];
  try {
    const saved = localStorage.getItem(GUEST_PROGRESS_KEY);
    guestProgress = saved ? JSON.parse(saved) : [];
  } catch {
    guestProgress = [];
  }

  const newUser = {
    id: generateId(),
    username: username.trim(),
    password: password,
    completedIds: guestProgress
  };

  users.push(newUser);
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, newUser.id);

  return { success: true, user: newUser };
}

export function login(username, password) {
  if (!username || !password) {
    return { success: false, error: 'Заповніть всі поля' };
  }

  const users = getUsers();
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

  if (!user) {
    return { success: false, error: 'Невірний нікнейм або пароль' };
  }

  localStorage.setItem(CURRENT_USER_KEY, user.id);
  return { success: true, user: user };
}

export function getCurrentUser() {
  try {
    const userId = localStorage.getItem(CURRENT_USER_KEY);
    if (!userId) return null;
    const users = getUsers();
    return users.find(u => u.id === userId) || null;
  } catch {
    return null;
  }
}

export function logout(user, completedIds) {
  if (user) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      users[idx].completedIds = completedIds;
      saveUsers(users);
    }
  }
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getUserProgress(user) {
  if (!user) return [];
  return user.completedIds || [];
}