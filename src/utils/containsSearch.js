
const ContainsSearch = (targetString, searchString) => {
    
  const terms = searchString.trim().toLocaleLowerCase().split(' ').filter(term => term.trim().length);
  
  return terms.every(term => targetString.trim().toLocaleLowerCase().includes(term));
};

export {ContainsSearch};