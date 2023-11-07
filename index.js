const fs = require('fs');
const schedule = require('node-schedule');

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

// Planifiez la mise à jour chaque jour à minuit
const updateSchedule = schedule.scheduleJob('0 0 * * *', updateReadme);

// Vous pouvez également déclencher la mise à jour manuellement en appelant updateReadme()
updateReadme();
