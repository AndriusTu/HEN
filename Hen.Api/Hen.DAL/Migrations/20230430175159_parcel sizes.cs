using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class parcelsizes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Size",
                table: "Parcel",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Size",
                table: "Parcel");
        }
    }
}
