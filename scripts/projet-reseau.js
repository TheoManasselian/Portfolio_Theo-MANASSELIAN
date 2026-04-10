window.detailData = window.detailData || {};
window.detailData['projet-reseau'] = {
  title: 'Projet Virtualisation – Réseau Packet Tracer – VM Windows Server',
  html: `
    <div class="detail-block">
      <div class="detail-block-img"id="detail-img-Packet-Tracer—VM"><img src="../images/Camembert_Packet-Tracer—VM.png" alt="Répartition du projet"></div>
      <div class="detail-block-text">
        <h4>Technologies & Outils</h4>
        <ul>
          <li><strong>DNS</strong> — Résolution de noms</li>
          <li><strong>DHCP</strong> — Gestion des adresses IP</li>
          <li><strong>AD DS</strong> — Gestion des utilisateurs et des ressources</li>
          <li><strong>Windows Server</strong> — Système d'exploitation serveur</li>
          <li><strong>VMware</strong> — Logiciel de virtualisation</li>
          <li><strong>Cisco Packet Tracer</strong> — Simulation de réseau</li>
        </ul>
      </div>
    </div>

    <div class="detail-block reverse">
      <div class="detail-block-img"><img src="../images/Cisco_1.png" alt="Packet Tracer Network"></div>
      <div class="detail-block-text">
        <h4>1. Réseau Packet Tracer</h4>
        <p>Mise en place d'une infrastructure réseau complète simulée avec Cisco Packet Tracer :</p>
        <ul>
          <li><strong>Réseau 1 (192.168.1.0)</strong> — Adressage IP géré par un serveur DHCP</li>
          <li><strong>Réseau 2 (172.16.1.0)</strong> — Adressage IP géré par le routeur, avec 2 VLANs</li>
          <li><strong>Serveur DNS</strong> dans le réseau 2, servant d'annuaire pour l'ensemble</li>
        </ul>
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block-img"></div>
      <div class="detail-block-text">
        <h4>2. VM Windows Server</h4>
        <h4 class="detail-subtitle">Déploiement serveur</h4>
        <ul>
          <li>Installation d'un <strong>Windows Server</strong></li>
          <li>Création d'une forêt AD DS → <strong>TEST_foret_domain</strong></li>
          <li>Mise en place du <strong>DNS intégré</strong> à l'annuaire</li>
          <li>Création d'un <strong>fichier partagé</strong> à la racine pour les tests d'accès</li>
        </ul>
      </div>
    </div>

    <div class="detail-block reverse">
      <div class="detail-block-img"></div>
      <div class="detail-block-text">
        <h4>Structuration AD en lien avec les VLANs</h4>
        <ul>
          <li>Une <strong>OU par VLAN</strong> (OpenSpace1, OpenSpace2, Administration…)</li>
          <li>Des <strong>groupes de sécurité</strong> correspondant à chaque zone</li>
          <li>Des <strong>objets PC</strong> dans chaque OU pour simuler les postes clients AD</li>
        </ul>
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block-img"></div>
      <div class="detail-block-text">
        <h4>Gestion des permissions NTFS</h4>
        <ul>
          <li>Le groupe <strong>DEV</strong> → lecture / modification / suppression sur les dossiers DEV</li>
          <li>Le groupe <strong>Administration</strong> → accès en lecture seule aux fichiers DEV</li>
          <li>Le groupe <strong>DEV</strong> → accès lecture seule aux fichiers Administration</li>
        </ul>
      </div>
    </div>

    <div class="detail-block reverse">
      <div class="detail-block-img"></div>
      <div class="detail-block-text">
        <h4>Compétences démontrées</h4>
        <ul>
          <li>Structuration du réseau (VLAN, routage, DHCP)</li>
          <li>Compétences en AD DS</li>
          <li>Intégration d'un poste dans le domaine</li>
          <li>Organisation Active Directory (OU, groupes, permissions partage + NTFS)</li>
        </ul>
      </div>
    </div>
  `
};
