using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class ParcelCourierNotRequired : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parcel_Account_CourierId",
                table: "Parcel");

            migrationBuilder.AlterColumn<Guid>(
                name: "CourierId",
                table: "Parcel",
                type: "integer",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_Parcel_Account_CourierId",
                table: "Parcel",
                column: "CourierId",
                principalTable: "Account",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parcel_Account_CourierId",
                table: "Parcel");

            migrationBuilder.AlterColumn<Guid>(
                name: "CourierId",
                table: "Parcel",
                type: "integer",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Parcel_Account_CourierId",
                table: "Parcel",
                column: "CourierId",
                principalTable: "Account",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
