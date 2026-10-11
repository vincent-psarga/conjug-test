import {Etre} from "./auxiliaries/Etre.ts";
import {Avoir} from "./auxiliaries/Avoir.ts";
import {Aller} from "./third/Aller.ts";
import {Parler} from "./first/Parler.ts";
import {Chanter} from "./first/Chanter.ts";
import {Danser} from "./first/Danser.ts";
import {Aimer} from "./first/Aimer.ts";
import {Regarder} from "./first/Regarder.ts";
import {Ecouter} from "./first/Ecouter.ts";
import {Jouer} from "./first/Jouer.ts";
import {Marcher} from "./first/Marcher.ts";
import {Travailler} from "./first/Travailler.ts";
import {Donner} from "./first/Donner.ts";
import {Trouver} from "./first/Trouver.ts";
import {Penser} from "./first/Penser.ts";
import {Porter} from "./first/Porter.ts";
import {Montrer} from "./first/Montrer.ts";
import {Rester} from "./first/Rester.ts";
import {Arriver} from "./first/Arriver.ts";
import {Entrer} from "./first/Entrer.ts";
import {Demander} from "./first/Demander.ts";
import {Chercher} from "./first/Chercher.ts";
import {Laver} from "./first/Laver.ts";
import {Fermer} from "./first/Fermer.ts";
import {Garder} from "./first/Garder.ts";
import {Oublier} from "./first/Oublier.ts";
import {Crier} from "./first/Crier.ts";
import {Preparer} from "./first/Preparer.ts";
import {Habiter} from "./first/Habiter.ts";
import {Tomber} from "./first/Tomber.ts";
import {Sauter} from "./first/Sauter.ts";
import {Dessiner} from "./first/Dessiner.ts";
import {Raconter} from "./first/Raconter.ts";
import {Changer} from "./first/Changer.ts";
import {Manger} from "./first/Manger.ts";
import {Nager} from "./first/Nager.ts";
import {Ranger} from "./first/Ranger.ts";
import {Placer} from "./first/Placer.ts";
import {Commencer} from "./first/Commencer.ts";
import {Lancer} from "./first/Lancer.ts";
import {Avancer} from "./first/Avancer.ts";
import {Appeler} from "./first/Appeler.ts";
import {Jeter} from "./first/Jeter.ts";
import {Acheter} from "./first/Acheter.ts";
import {Lever} from "./first/Lever.ts";
import {Mener} from "./first/Mener.ts";
import {Preferer} from "./first/Preferer.ts";
import {Esperer} from "./first/Esperer.ts";
import {Repeter} from "./first/Repeter.ts";
import {Nettoyer} from "./first/Nettoyer.ts";
import {Envoyer} from "./first/Envoyer.ts";
import {Finir} from "./second/Finir.ts";
import {Choisir} from "./second/Choisir.ts";
import {Grandir} from "./second/Grandir.ts";
import {Reussir} from "./second/Reussir.ts";
import {Rougir} from "./second/Rougir.ts";
import {Remplir} from "./second/Remplir.ts";
import {Obeir} from "./second/Obeir.ts";
import {Reflechir} from "./second/Reflechir.ts";
import {Batir} from "./second/Batir.ts";
import {Punir} from "./second/Punir.ts";
import {Nourrir} from "./second/Nourrir.ts";
import {Guerir} from "./second/Guerir.ts";
import {Applaudir} from "./second/Applaudir.ts";
import {Agir} from "./second/Agir.ts";
import {Bondir} from "./second/Bondir.ts";
import {Blanchir} from "./second/Blanchir.ts";
import {Ralentir} from "./second/Ralentir.ts";
import {Salir} from "./second/Salir.ts";
import {Vieillir} from "./second/Vieillir.ts";
import {Maigrir} from "./second/Maigrir.ts";
import {Faire} from "./third/Faire.ts";
import {Prendre} from "./third/Prendre.ts";
import {Venir} from "./third/Venir.ts";
import {Dire} from "./third/Dire.ts";
import {Voir} from "./third/Voir.ts";
import {Pouvoir} from "./third/Pouvoir.ts";
import {Vouloir} from "./third/Vouloir.ts";
import {Savoir} from "./third/Savoir.ts";
import {Devoir} from "./third/Devoir.ts";
import {Mettre} from "./third/Mettre.ts";
import {Partir} from "./third/Partir.ts";
import {Sortir} from "./third/Sortir.ts";
import {Dormir} from "./third/Dormir.ts";
import {Lire} from "./third/Lire.ts";
import {Ecrire} from "./third/Ecrire.ts";
import {Boire} from "./third/Boire.ts";
import {Courir} from "./third/Courir.ts";
import {Ouvrir} from "./third/Ouvrir.ts";
import {Offrir} from "./third/Offrir.ts";
import {Connaitre} from "./third/Connaitre.ts";
import {Croire} from "./third/Croire.ts";
import {Tenir} from "./third/Tenir.ts";
import {Recevoir} from "./third/Recevoir.ts";
import {Mourir} from "./third/Mourir.ts";
import {Attendre} from "./third/Attendre.ts";
import {Perdre} from "./third/Perdre.ts";
import {Vendre} from "./third/Vendre.ts";
import {Rire} from "./third/Rire.ts";
import type {Verb} from "../Verb.ts";

// Always part of the exercise: Aller is kept out of THIRD_GROUP_VERBS so it isn't picked twice.
export {Etre, Avoir, Aller};

export const FIRST_GROUP_VERBS: Verb[] = [
    Parler,
    Chanter,
    Danser,
    Aimer,
    Regarder,
    Ecouter,
    Jouer,
    Marcher,
    Travailler,
    Donner,
    Trouver,
    Penser,
    Porter,
    Montrer,
    Rester,
    Arriver,
    Entrer,
    Demander,
    Chercher,
    Laver,
    Fermer,
    Garder,
    Oublier,
    Crier,
    Preparer,
    Habiter,
    Tomber,
    Sauter,
    Dessiner,
    Raconter,
    Changer,
    Manger,
    Nager,
    Ranger,
    Placer,
    Commencer,
    Lancer,
    Avancer,
    Appeler,
    Jeter,
    Acheter,
    Lever,
    Mener,
    Preferer,
    Esperer,
    Repeter,
    Nettoyer,
    Envoyer,
];

export const SECOND_GROUP_VERBS: Verb[] = [
    Finir,
    Choisir,
    Grandir,
    Reussir,
    Rougir,
    Remplir,
    Obeir,
    Reflechir,
    Batir,
    Punir,
    Nourrir,
    Guerir,
    Applaudir,
    Agir,
    Bondir,
    Blanchir,
    Ralentir,
    Salir,
    Vieillir,
    Maigrir,
];

export const THIRD_GROUP_VERBS: Verb[] = [
    Faire,
    Prendre,
    Venir,
    Dire,
    Voir,
    Pouvoir,
    Vouloir,
    Savoir,
    Devoir,
    Mettre,
    Partir,
    Sortir,
    Dormir,
    Lire,
    Ecrire,
    Boire,
    Courir,
    Ouvrir,
    Offrir,
    Connaitre,
    Croire,
    Tenir,
    Recevoir,
    Mourir,
    Attendre,
    Perdre,
    Vendre,
    Rire,
];
