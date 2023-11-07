const readme = require('./README.md');
const  fs = require('fs');

// Fonction pour mettre à jour le fichier README.md
function updateReadme() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();

  const readmeContent = `# Mon Projet

Dernière mise à jour : ${currentTime}

Ceci est mon fichier README.md.`;

  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du fichier README.md :', err);
    } else {
      console.log('Le fichier README.md a été mis à jour avec succès.');
    }
  });
}
