let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'huge'];
let noun = ['jogger', 'racoon', 'aligator'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let dominio = pronoun[i] + adj[j] + noun[k] + ".com";
            console.log(dominio);
        }
    }
}