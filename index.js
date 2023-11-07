const fs = require('fs');

function updateReadme() {
  const currentDate = new Date();
  const options = { timeZone: 'Europe/Paris' }; 
  const currentTime = currentDate.toLocaleTimeString('fr-FR', options);
  
  const newReadmeContent = `# Mon Projet

Ceci est une nouvelle version du fichier README.md pour aujourd'hui : ${currentTime}`;

  fs.writeFile('README.md', newReadmeContent, (err) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du fichier README.md :', err);
    } else {
      console.log('Le fichier README.md a été mis à jour avec succès.');
    }
  });
}

updateReadme();
