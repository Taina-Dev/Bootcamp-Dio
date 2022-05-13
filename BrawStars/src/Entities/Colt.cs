namespace BrawStars.src.Entities
{
    public abstract class Hero
    {
        public Hero( string Name, int Trofeus, string Super)
        {
            this.Name = Name;
            this.Trofeus = Trofeus;
            this.Super = Super;
        }

        public string Name { get; set; }

        public int Trofeus  { get; set; }

        public string Super { get; set; }

        public override string ToString()
        {
            return this.Name + " " + this.Super + " " + this.Trofeus;
        }

        public virtual string Attack(){
            return this.Name  + " Atacou com suas rajadas precisas";
        }
    }
}