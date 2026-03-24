// SISTEMA DE NOTAS MARKDONW

// Utilidades - Funciones 

// Generación ID único

function generateId() {
  const timestamp = Date.now();
  return timestamp;
}

// Crear nota

function createNote(content, title){
  const trimmedContent = content.trim();
  if (trimmedContent === ''){
    return 'Error: El contenido no puede estar vacío.'
  }

  const noteId = generateId();
  const currentTime = Date.now();
  const noteTitle = title || 'Nota sin Título'
  const noteExcerpt = content.length > 100 ? `${content.slice(0, 100)}...` : content;

  const noteInfo = `
    ID: ${noteId} | Título: ${noteTitle} | Contenido: ${content} | Excerpt: ${noteExcerpt} | Creado: ${currentTime} | Actualizado: ${currentTime}
  `

  console.log(noteInfo)
}


 createNote(' ', 'Mickey Mouse');


// Listar las notas
// Actualizar nota
// Eliminar una nota

