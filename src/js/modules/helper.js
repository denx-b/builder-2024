function hasClass (element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}

async function postData(actionUrl, data = {}) {
  try {
    // Создаем объект FormData
    const formData = new FormData();

    // Заполняем FormData параметрами
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    const response = await fetch(actionUrl, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      // Обрабатываем ошибки HTTP
      const errorData = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}

function redirect(newHost) {
  // Текущая категория и аргументы в адресной строке
  const currentPath = window.location.pathname;
  const currentSearch = window.location.search;
  // Перенаправляем пользователя
  window.location.href = `${newHost}${currentPath}${currentSearch}`;
}

export {hasClass, postData, redirect}
