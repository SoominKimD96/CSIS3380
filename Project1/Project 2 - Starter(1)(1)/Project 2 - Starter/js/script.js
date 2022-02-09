const elements = 10;
const listUl = document.querySelectorAll('.contact-list')[0];
const listLi = listUl.children;

document.addEventListener('DOMContentLoaded', () => {
  displayPage( listLi, 0 );
  pageList();
});
  

function displayPage(list, page){
  const first = page * elements;
  const last = (page + 1) * elements;
  for(let i = 0; i<list.length; i++){
      if( i >= first && i < last ){
        list[i].style.display = 'block';
      } else {
        list[i].style.display = 'none';
      }
  }
}


function pageList(list){
  const contactNumber = listLi.length;
  const elementsNumber = Math.ceil(contactNumber / elements);
  const addingDiv = document.createElement('div');
  addingDiv.className = 'pagination';
  const pageInfo = document.querySelectorAll('.page')[0];
  pageInfo.appendChild(addingDiv);
  const addingDivUl = document.createElement('ul');
  addingDiv.appendChild(addingDivUl);
  const paginationAll = document.getElementsByTagName('A');
  for( let i = 0; i<elementsNumber; i++) {
      const addingDivLi = document.createElement('li');
      const paging = document.createElement('a');
      addingDivUl.appendChild(addingDivLi);
      paging.href = '#';
      paging.textContent = i + 1;
      addingDivLi.appendChild(paging);
      paging.addEventListener("click", (e) => {
        for(let i =0; i<paginationAll.length; i++){
          paginationAll[i].className ='';
          e.target.className = 'show';
        }
        displayPage( listLi, i );
      });
  }
  paginationAll[0].className = 'show';
}