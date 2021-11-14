using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoFinal.Migrations
{
    public partial class InicioDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    ClienteID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(18)", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(12)", nullable: false),
                    Sexo = table.Column<string>(type: "nvarchar(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.ClienteID);
                });

            migrationBuilder.CreateTable(
                name: "Quartos",
                columns: table => new
                {
                    QuartoID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DiariaValor = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    TipoQuarto = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    OcuMaxima = table.Column<int>(type: "int", nullable: false),
                    Disponivel = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(500)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quartos", x => x.QuartoID);
                });

            migrationBuilder.CreateTable(
                name: "Estadia",
                columns: table => new
                {
                    EstadiaID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DataDeEntrada = table.Column<DateTime>(type: "DateTime", nullable: false),
                    DataDeSaida = table.Column<DateTime>(type: "DateTime", nullable: false),
                    ValorTotalDiaria = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    QuartoID = table.Column<int>(type: "int", nullable: false),
                    ClienteID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estadia", x => x.EstadiaID);
                    table.ForeignKey(
                        name: "FK_Estadia_Clientes_ClienteID",
                        column: x => x.ClienteID,
                        principalTable: "Clientes",
                        principalColumn: "ClienteID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Estadia_Quartos_QuartoID",
                        column: x => x.QuartoID,
                        principalTable: "Quartos",
                        principalColumn: "QuartoID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Estadia_ClienteID",
                table: "Estadia",
                column: "ClienteID");

            migrationBuilder.CreateIndex(
                name: "IX_Estadia_QuartoID",
                table: "Estadia",
                column: "QuartoID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Estadia");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Quartos");
        }
    }
}
