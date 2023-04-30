using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class auth_migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Account");

            migrationBuilder.RenameColumn(
                name: "UpdateAt",
                table: "User",
                newName: "UpdatedAt");

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "Account",
                type: "varbinary(20)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "Account",
                type: "varbinary(32)",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Account");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "Account");

            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "User",
                newName: "UpdateAt");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Account",
                type: "nvarchar(32)",
                nullable: false,
                defaultValue: "");
        }
    }
}
