namespace BrawStars.src.Entities
{
    public class Shelly : Hero
    {
        public Shelly(string Name, int Trofeus, string Super) : base(Name, Trofeus, Super)
        {
        }

         public string Attack(int Tiros)
        {
           
           if (Tiros >= 10){
               return this.Name  + " Shelly te Atacou com seus Tiros te pqgou de surpresa com Bonus balas que são invisiveis :-) " + Tiros;
            }
            else{
                return this.Name  + " Eita você esta sem energia " + Tiros;
            } 

        }
    }
}