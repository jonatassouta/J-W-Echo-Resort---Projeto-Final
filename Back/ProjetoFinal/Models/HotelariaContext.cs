using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Models {
    public class HotelariaContext : DbContext {

        public HotelariaContext(DbContextOptions<HotelariaContext>options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Quarto> Quartos { get; set; }
        public DbSet<Estadia> Estadia { get; set; }
       // public DbSet<ProjetoFinal.Models.Componente> Componentes { get; set; } 

    }
}
