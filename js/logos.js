/*
 * Chaque logo = une URL complète, lisible directement.
 * Usage : LOGOS.python  ->  l'URL de l'image.
 */

const LOGOS = {
    france:           "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Franceroundflag.svg/3840px-Franceroundflag.svg.png",
    uk:               "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/3840px-United-kingdom_flag_icon_round.svg.png",
    python:           "https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg?width=100",
    js:               "https://commons.wikimedia.org/wiki/Special:FilePath/Unofficial_JavaScript_logo_2.svg?width=100",
    html5:            "https://commons.wikimedia.org/wiki/Special:FilePath/HTML5_logo_and_wordmark.svg?width=100",
    css3:             "https://commons.wikimedia.org/wiki/Special:FilePath/CSS3_logo_and_wordmark.svg?width=100",
    php:              "https://commons.wikimedia.org/wiki/Special:FilePath/PHP-logo.svg?width=100",
    nodejs:           "https://commons.wikimedia.org/wiki/Special:FilePath/Node.js_logo.svg?width=100",
    json:             "https://commons.wikimedia.org/wiki/Special:FilePath/JSON_vector_logo.svg?width=100",
    linux:            "https://commons.wikimedia.org/wiki/Special:FilePath/Tux.svg?width=100",
    ubuntu:           "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-ubuntu_cof-orange-hex.svg?width=100",
    figma:            "https://commons.wikimedia.org/wiki/Special:FilePath/Figma-logo.svg?width=100",
    github:           "https://commons.wikimedia.org/wiki/Special:FilePath/Octicons-mark-github.svg?width=100",
    vscode:           "https://commons.wikimedia.org/wiki/Special:FilePath/Visual_Studio_Code_1.35_icon.svg?width=100",
    pycharm:          "https://commons.wikimedia.org/wiki/Special:FilePath/PyCharm_Icon.svg?width=100",
    powershell:       "https://commons.wikimedia.org/wiki/Special:FilePath/PowerShell_5.0_icon.png?width=100",
    gns3:             "https://upload.wikimedia.org/wikipedia/commons/8/8f/GNS3_logo.png",
    texworks:         "https://upload.wikimedia.org/wikipedia/commons/b/b7/TeXworks_icon_128.png",
    word:             "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Microsoft_Office_Word_%282025%E2%80%93present%29.svg/langfr-330px-Microsoft_Office_Word_%282025%E2%80%93present%29.svg.png",
    excel:            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/langfr-330px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png",
    powerpoint:       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg/langfr-330px-Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg.png",
    onenote:          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_OneNote_Icon_%282025_-_present%29.svg/langfr-330px-Microsoft_OneNote_Icon_%282025_-_present%29.svg.png",
    outlook:          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/langfr-330px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png",
    teams:            "https://upload.wikimedia.org/wikipedia/fr/thumb/6/66/Logo_Microsoft_Teams_%282025%29.svg/langfr-500px-Logo_Microsoft_Teams_%282025%29.svg.png",
    xampp:            "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/XAMPP_logo.svg/330px-XAMPP_logo.svg.png",
    wamp:             "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/WampServer-logo.png/330px-WampServer-logo.png",
    drive:            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Drive_icon_%282026%29.svg/langfr-500px-Google_Drive_icon_%282026%29.svg.png",
    VMware:           "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/langfr-330px-Vmware_workstation_16_icon.svg.png",
    Trello:           "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Antu_trello.svg/250px-Antu_trello.svg.png"
};

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LOGOS };
}