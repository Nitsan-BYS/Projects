function getUrl(entityName = '') {
  return process.env.NODE_ENV !== 'development'
    ? `https://quizzi-app.herokuapp.com/${entityName}`
    : `http://localhost:3001/${entityName}`;
}

export default { getUrl };
