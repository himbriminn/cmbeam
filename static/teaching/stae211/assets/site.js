(()=>{
const menu=document.querySelector('.menu-button'),scrim=document.querySelector('.sidebar-scrim'),input=document.getElementById('search'),panel=document.getElementById('search-results');
const sidebar=document.querySelector('#course-sidebar .sidebar-inner');
const examsLabel=[...document.querySelectorAll('#course-sidebar .sidebar-label')].find(x=>x.textContent.trim()==='Próf');
const homeworkUrl='/teaching/stae211/heimadaemi/';
if(sidebar&&examsLabel&&!sidebar.querySelector(`a[href="${homeworkUrl}"]`)){const a=document.createElement('a');a.className='nav-link';a.href=homeworkUrl;const label=document.createElement('span');label.textContent='Heimadæmi';a.append(label);if(location.pathname.replace(/\\/?$/,'/')===homeworkUrl){a.classList.add('active');a.setAttribute('aria-current','page')}examsLabel.before(a)}
if(Array.isArray(window.SEARCH_INDEX)&&!window.SEARCH_INDEX.some(x=>x.url===homeworkUrl)){window.SEARCH_INDEX.push({title:'Heimadæmi',chapter:'Stæ211',url:homeworkUrl,text:'Skammtur 1 Skammtur 2 Skammtur 3'})}
function closeNav(){document.body.classList.remove('nav-open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=document.body.classList.toggle('nav-open');menu.setAttribute('aria-expanded',String(open))});
scrim.addEventListener('click',closeNav);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeNav();panel.hidden=true}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus()}});
input.addEventListener('input',()=>{
const query=input.value.trim().toLocaleLowerCase('is');panel.replaceChildren();panel.hidden=!query;if(!query)return;
const matches=(window.SEARCH_INDEX||[]).filter(x=>x.title.toLocaleLowerCase('is').includes(query));
for(const item of matches){const a=document.createElement('a');a.href=item.url;const strong=document.createElement('strong');strong.textContent=item.title;const small=document.createElement('small');small.textContent=item.chapter;a.append(strong,small);panel.append(a)}
if(!matches.length){const p=document.createElement('p');p.textContent='Ekkert fannst.';panel.append(p)}
});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))panel.hidden=true});
})();