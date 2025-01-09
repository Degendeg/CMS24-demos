const output = document.getElementById('output')
const modalRibbon = document.getElementById('modalRibbon')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')

const commands = [
  { command: 'git init', description: 'Initializes a new Git repository.' },
  { command: 'git clone https://github.com/user/repo.git', description: 'Clones a remote repository.' },
  { command: 'git status', description: 'Shows the current status of the repository.' },
  { command: 'git add .', description: 'Stages all files for the next commit.' },
  { command: 'git commit -m "Initial commit"', description: 'Commits staged changes with a message.' },
  { command: 'git pull origin main', description: 'Pulls the latest changes from the remote main branch.' },
  { command: 'git push origin main', description: 'Pushes local commits to the remote repository.' },
];

commands.forEach(cmd => {
  const cmdElement = document.createElement('p')
  cmdElement.innerHTML = `<span class="cmd">> ${cmd.command}</span> - ${cmd.description}`
  output.appendChild(cmdElement)
})

modalRibbon.addEventListener('click', () => {
  modal.style.display = 'flex' // show modal
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none' // hide modal
})

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none' // click in modal, if element matches - hide. 
  }
})

// Close modal when 'Esc' is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none'
  }
})