# Calculio: funny online calculator :zap:

My first time working with javascript on a web developement project.

## Temps passé sur le projet :checkered_flag: :

1. Mise en place (Npm, src, assets, styleSheets...) : 30min
2. Ajouts des assets (fonts, img...) : 1h (chasse aux images et aux logos, ajouts de la font Futura pour les titres...)
3. Header : 1h30
4. Hero header : 1h
5. Clients : 30 min
6. Slider : 6+- 
7. Texte infini : 1h

## Fonctionnement technique :robot: :

La page est codée en HTML, SCSS (parcel) et JavaScript vanilla. 

## Mon retour d'expérience :pencil2: :

Dans l'ensemble tous s'est bien passé. Mon problème principal a été avec le slider. J'ai eu deux problèmes, tout d'abords, j'avais déja codé un slider avec des photos mais jamais avec un encart dessus et surtout jamais un où il fallait voir un bout de l'image suivante. 
- Pour l'encart, j'avais commencé à la placer avec des positions relatives et absolues. Malheureusement, cela n'allait pas avec le responsive. L'encart ne se placait pas exactement où je voulais et j'utilisais beaucoup de médias query pour rendre le responsive convenable. Mais ça rallongeait le code et c'était trop compliqué. Du coup, j'ai fini par opter pour la solution "flex" (la base pourtant...) et tous mes problèmes se sont réglés. Il m'a quand même fallu un peu de temps pour me décider à changer de technique...
- Pour le slider, j'avais des problèmes avec mon Js puisqu'au début l'action du slide prenait toute la largeur du slider ce qui faisait se décaler les images au fur et à mesureque l'on cliquait. J'ai donc changé pour mettre le slide sur la largeur d'une slide en prenant en compte la largeur total divisé par le nombre de slides. Cela résout complétement le problème et de plus, il sera beaucoup plus facile de rajouter des images si on souhaite le faire. Pour mon éxprience personnelle, j'ai commencé à regarder comment je pourrais réaliser ce slider en utilisant une librairie comme owl-carousel par exemple, affaire à suivre.

Pour ce qui est du text infini, il marche mais je ne suis pas convaincu. Je vais continuer à chercher comment je pourrai l'optimiser car il y a un petit "saut" à la fin qui ne me plait pas. 
