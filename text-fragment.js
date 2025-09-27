function copyFragmentLink() {
  const sel = window.getSelection()?.toString().trim();
  const status = document.getElementById('status');
  if (!sel) {
    status.textContent = 'Select text first!';
    setTimeout(()=>status.textContent='', 1500);
    return;
  }
  const base = location.href.split('#')[0];
  const encoded = encodeURIComponent(sel).replace(/%2C/g, ',');
  const url = `${base}#:~:text=${encoded}`;

  navigator.clipboard.writeText(url)
    .then(()=>{status.textContent='Link copied!'; setTimeout(()=>status.textContent='',1500);})
    .catch(()=>{status.textContent='Failed to copy. Check manually: '+url;});
}

// Slash command input
document.getElementById('slash-input').addEventListener('keydown', e=>{
  if(e.key==='Enter' && e.target.value.trim()==='/fragment'){
    copyFragmentLink();
    e.target.value='';
  }
});
