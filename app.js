// SISTEMA DE NOTAS MARKDOWN.

function generateId() {
  const timestamp = Date.now();
  return timestamp;
}

// FUNCIONES CRUD DE NOTAS


// CREAR NOTA

function createNote(content, title) {
  const trimmedContent = content.trim();
  if (trimmedContent === '') {
    return 'Error: El contenido no puede estar vacío.';
  }

  const noteId = generateId();
  const currentTime = Date.now();
  const noteTitle = title || 'Nota sin Título';
  const noteExcerpt = content.length > 100 ? `${content.slice(0, 100)}...` : content;

  const noteInfo = `
    ID: ${noteId} | Título: ${noteTitle} | Contenido: ${content} | Excerpt: ${noteExcerpt}
    | Creado: ${currentTime} | Actualizado: ${currentTime}
  `;

  return noteInfo;
}


// Ejemplo 1: Crear una nota

console.log('=== CREAR NOTA ===');
const nota1 = createNote('# Mi primera nota\nEste es el contenido de mi primera nota en Markdown.');
console.log(nota1);

