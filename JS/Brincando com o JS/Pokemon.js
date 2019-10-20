function Pokemon(Name, Type, Force, Life, Skills)
{
  this.name = Name;
  this.life = Life;
  this.force = Force;
  this.type = Type;

  this.Skills = Skills;

  this.Status = () =>
  {
    //let status = "O pokemon " + this.name +
    //(this.life <= 0 ? " está morto." : " tem vida atual de " + this.life);

    let status = "O pokemon " + this.name;

    if (this.life <= 0)
      status += " está morto.";

    else
      status += " tem vida atual de " + this.life;

    console.log(status);
  }

};

// Criar poderes
let Thundershock = (striker, target) =>
{
  target.life = target.life - striker.force;

  if (target.type == "water")
    target.life -= target.life * 0.10;
};

let IronTail = (striker, target) =>
{
  target.life = target.life - striker.force;
};
                     // 0          // 1
let habilidades = [Thundershock, IronTail]; // adicionei as hab. ao array

// Criando os pokemons
let pikachu = new Pokemon("Pikachu", "eletric", 30, 100, habilidades);
let squirtle = new Pokemon("Squirtle", "water", 10, 100, []);

pikachu.Skills[0](pikachu, squirtle);
squirtle.Status();

pikachu.Skills[1](pikachu, squirtle);
squirtle.Status();

pikachu.Skills[0](pikachu, squirtle);
pikachu.Skills[0](pikachu, squirtle);
squirtle.Status();