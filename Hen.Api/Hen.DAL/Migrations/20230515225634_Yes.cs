using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Yes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Location_User_UserId",
                table: "Location");

            migrationBuilder.DropIndex(
                name: "IX_Location_UserId",
                table: "Location");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Location");

            migrationBuilder.AddColumn<Guid>(
                name: "LocationId",
                table: "User",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_LocationId",
                table: "User",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Location_LocationId",
                table: "User",
                column: "LocationId",
                principalTable: "Location",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_Location_LocationId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_LocationId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "User");

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Location",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Location_UserId",
                table: "Location",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Location_User_UserId",
                table: "Location",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id");
        }
    }
}
