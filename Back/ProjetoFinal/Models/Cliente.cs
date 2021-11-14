using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Models {
    public class Cliente {

        [Key]
        public int ClienteID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Nome { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Senha { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(18)")]
        public string Cpf { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(12)")]
        public string Telefone { get; set; }       

        [Required]
        [Column(TypeName = "nvarchar(15)")]
        public string Sexo { get; set; }

        


    }
}
