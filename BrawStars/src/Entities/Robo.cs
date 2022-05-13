namespace BrawStars.src.Entities
{
    public class Robo : Hero
    {
        public Robo(string Name, int Trofeus, string Super) : base(Name, Trofeus, Super)
        {
        }

        public override string Attack(){
            return this.Name  + " Atacou com seus Tiros Perene";
        }

        public string Attack(int Bonus)
        {
            if (Bonus >= 10){
              return this.Name  + " Atacou com seus Tiros Perene com Bonus balas que quicam nas paredes " + Bonus;
            }
            else{
                return this.Name  + " Eita você esta sem energia " + Bonus;
            }
           
        }
    }
}