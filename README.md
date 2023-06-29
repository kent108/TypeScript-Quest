
# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ? 

Les différents type primitifs de données en TS sont string, number et boolean.
String va représenter des chaines de caractères. Number correspond aux nombres. Boolean représenter les deux valeurs true et false.

- Comment typer un tableau ? 

Pour préciser le type d'un tableau, on peut utiliser la syntaxe number[]. Mais nous pouvons également cette syntaxe pour déclarer d'autres types de tableau par exemple string[].
On peut également voir Array<number>, cela signifie la même chose.

- Quel est le type `any` ?

Any est un type spécial. Utilisation comme on le souhaite quand on veut qu'une valeur particulière ne cause pas d'erreurs à la vérification de types. Une valeur Any permet d'accéder à toutes ses propriétés. 


- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ? 

Il est nécessaire de spécifier le type primitif de la donnée que l'on veut retourner.
Et également nécessaire de typer les paramètres au préalable.


**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ? 

Pour déclarer une classe en TS il faut utiliser le mot CLASS, lui donner un nom et ouvrir des accolades pour définir ses caractéristiques.
Chaque objet doit être créé par une classe.



- Qu'est ce qu'un constructeur de classe ? 

Un constructeur est une fonction spéciale de la classe qui est responsable de l’initialisation des variables de la classe. TypeScript définit un constructeur à l’aide du mot-clé constructor. Un constructeur est une fonction et peut donc être paramétré.


- Qu'est ce qu'une instance de classe ?

Pour créer une instance de classe il faut utiliser le mot clé NEW suivi du nom de la classe.
C'est l'équivalent d'un enfant de la classe.

- Comment vérifier qu'une classe est d'une certaine instance ?

Pour vérifier que l'instance appartient à une certaine classe, il faut utiliser l'opérateur INSTANCEOF. Il permet de vérifier si un objet est une instance d'une classe.
En utilisant INSTANCEOF, on peut effectuer des vérifications de type spécifiques pour une classe donnée. 


- Qu'est ce que `this` dans une classe ?

Dans une classe TypeScript, le mot-clé this fait référence à l'instance actuelle de la classe sur laquelle une méthode ou une propriété est appelée. Il représente l'objet lui-même.
Lorsqu'on utilise "THIS" à l'intérieur d'une méthode d'une classe, on fait référence à l'instance spécifique de cette classe sur laquelle la méthode est appelée. Cela vous permet d'accéder et de manipuler les propriété et les méthodes de cette instance. 


- Qu'est ce qu'une méthode de classe ? 

Une méthode de classe est une fonction définie à l'intérieur d'une classe. Elle représente le comportement associé à une classe spécifique et peut être appelée sur les instances de cette classe.  Les méthodes de classe sont définies dans le corps de la classe et peuvent accéder aux propriétés et aux autres méthodes de la classe à l'aide du mot-clé this. Elles peuvent également accepter des paramètres et retourner une valeur.
Les méthodes de classe permettent d'encapsuler la logique spécifique à une classe, d'organiser le comportement associé à celle-ci et de réutiliser du code. 

- Qu'est ce que la visibilité des propriétés ? 

En TypeScript, la visibilité des propriétés se réfère à la façon dont les propriétés d'une classe peuvent être accédées et utilisées à partir de l'extérieur de la classe. TypeScript offre trois niveaux de visibilité pour les propriétés : public, private et protected.



**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre) 

les variables, fonctions, classes, .. déclarées dans le module ne seront pas visibles à l'extérieur du module sauf si elles sont explicitement exportées via l'expression d'export. De plus, pour utiliser une ressource exportée d'un autre module, vous devez l'importer explicitement via l'expression d'import.

- Qu'est ce que l'héritage ? 

L'héritage en TypeScript permet à une classe (appelée classe dérivée ou sous-classe) d'hériter les caractéristiques (propriétés et méthodes) d'une autre classe (appelée classe de base ou superclasse). La classe dérivée peut ainsi réutiliser et étendre le comportement de la classe de base.

Pour définir l'héritage en TypeScript, vous pouvez utiliser le mot-clé extends suivi du nom de la classe de base. La classe dérivée peut alors accéder aux membres publics et protégés de la classe de base.

- Comment appeler le constructeur d'une classe mère ? 

Pour appeler une classe mere on peut utiliser le mot-clé super suivi des arguments requis par le constructeur de la classe mère. L'appel à super() doit être la première instruction dans le constructeur de la classe dérivée. Vous pouvez ensuite ajouter du code supplémentaire avant ou après cet appel pour effectuer des opérations spécifiques à la classe dérivée.

L'utilisation de super() permet d'initialiser correctement les membres hérités de la classe mère avant d'ajouter des fonctionnalités supplémentaires à la classe dérivée. Cela maintient l'intégrité de l'objet et assure le bon fonctionnement de l'héritage.


- Comment appeler une méthode d'une classe mère ? 

Pour appeler une méthode d'une classe mère à partir d'une classe dérivée en TypeScript, vous pouvez utiliser le mot-clé "super" suivi du nom de la méthode de la classe mère que vous souhaitez appeler.


- Qu'est ce que le polymorphism ? 

Le polymorphism permet à des objets d'une même hiérarchie de classes de se comporter différemment en fonction du type de l'objet au moment de l'exécution.
Le polymorphisme peut être réalisé à travers l'héritage et le concept de substitution. Lorsqu'une classe dérivée (sous-classe) hérite d'une classe de base (superclasse), elle peut substituer les méthodes de la classe de base avec ses propres implémentations, tout en conservant la même signature de méthode.

Le polymorphisme permet donc d'appeler une méthode sur un objet de la classe de base, et en fonction du type réel de l'objet (classe dérivée), la méthode appropriée sera exécutée.



**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

