using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class RefactorRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ParcelStatus_LocationId",
                table: "ParcelStatus");

            migrationBuilder.DropIndex(
                name: "IX_Location_UserId",
                table: "Location");

            migrationBuilder.DropIndex(
                name: "IX_Account_AccountInformationId",
                table: "Account");

            migrationBuilder.AlterColumn<Guid>(
                name: "StatusId",
                table: "ParcelStatusGroup",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "integer");

            migrationBuilder.AlterColumn<Guid>(
                name: "ParcelId",
                table: "ParcelStatusGroup",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "integer");

            migrationBuilder.AlterColumn<Guid>(
                name: "LocationId",
                table: "ParcelStatus",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "integer");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Location",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "integer");

            migrationBuilder.AlterColumn<Guid>(
                name: "AccountInformationId",
                table: "Account",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "integer");

            migrationBuilder.CreateIndex(
                name: "IX_ParcelStatus_LocationId",
                table: "ParcelStatus",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Location_UserId",
                table: "Location",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_AccountInformationId",
                table: "Account",
                column: "AccountInformationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ParcelStatus_LocationId",
                table: "ParcelStatus");

            migrationBuilder.DropIndex(
                name: "IX_Location_UserId",
                table: "Location");

            migrationBuilder.DropIndex(
                name: "IX_Account_AccountInformationId",
                table: "Account");

            migrationBuilder.AlterColumn<Guid>(
                name: "StatusId",
                table: "ParcelStatusGroup",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<Guid>(
                name: "ParcelId",
                table: "ParcelStatusGroup",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<Guid>(
                name: "LocationId",
                table: "ParcelStatus",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Location",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<Guid>(
                name: "AccountInformationId",
                table: "Account",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.CreateIndex(
                name: "IX_ParcelStatus_LocationId",
                table: "ParcelStatus",
                column: "LocationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Location_UserId",
                table: "Location",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Account_AccountInformationId",
                table: "Account",
                column: "AccountInformationId",
                unique: true);
        }
    }
}
