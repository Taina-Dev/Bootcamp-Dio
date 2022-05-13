using System;
using BrawStars.src.Entities;


namespace BrawStars
{
    class Program
    {
        static void Main(string[] args)
        {
             Shelly colt = new Shelly("shelly", 483,"SuperBala");
             Robo raro = new Robo("Ricochet", 290,"Tiro Perene");
   
             Console.WriteLine("___________BATALHA BRAWLSTARS______________");
             Console.WriteLine("\n");
             Console.WriteLine($"Lance seu o poder shelly \n");
              int Tiros = int.Parse(Console.ReadLine());
             Console.WriteLine(colt.Attack(Tiros));
             Console.WriteLine("\n");
             Console.WriteLine($"Ataque com  o poder Ricochet \n");
               int Bonus = int.Parse(Console.ReadLine());
             Console.WriteLine(raro.Attack(Bonus));
             Console.WriteLine("\n");

        }     
      
    }
}
