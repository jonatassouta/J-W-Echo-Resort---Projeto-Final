using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Models {
    public class Quarto {

        [Key]
        public int QuartoID { get; set; }

        [Required]
        [Column(TypeName = "decimal(5,2)")]
        public float DiariaValor { get; set; }

        [Required]
        public string TipoQuarto { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int OcuMaxima { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public string Disponivel { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(500)")]
        public string ImageUrl { get; set; }

    }
}
