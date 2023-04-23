using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Parcels",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parcels", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Parcels");
        }
    }
}
