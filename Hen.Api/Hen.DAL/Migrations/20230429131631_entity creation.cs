using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hen.DAL.Migrations
{
    /// <inheritdoc />
    public partial class entitycreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(32)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(32)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(32)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    UpdateAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Account",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    AccountInformationId = table.Column<Guid>(type: "integer", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(32)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(32)", nullable: false),
                    Role = table.Column<int>(type: "nvarchar(16)", nullable: false),
                    Status = table.Column<int>(type: "nvarchar(16)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Account", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Account_User_AccountInformationId",
                        column: x => x.AccountInformationId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Location",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Type = table.Column<int>(type: "nvarchar(32)", nullable: false),
                    UserId = table.Column<Guid>(type: "integer", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(32)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(32)", nullable: true),
                    Street = table.Column<string>(type: "nvarchar(32)", nullable: true),
                    HouseNumber = table.Column<int>(type: "integer", nullable: true),
                    FlatNumber = table.Column<int>(type: "integer", nullable: true),
                    PostalCode = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Location_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Parcel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    SenderId = table.Column<Guid>(type: "integer", nullable: false),
                    ReceiverId = table.Column<Guid>(type: "integer", nullable: false),
                    CourierId = table.Column<Guid>(type: "integer", nullable: false),
                    Type = table.Column<int>(type: "nvarchar(16)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    ETA = table.Column<DateTime>(type: "timestamp", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    UpdateAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parcel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Parcel_Account_CourierId",
                        column: x => x.CourierId,
                        principalTable: "Account",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Parcel_User_ReceiverId",
                        column: x => x.ReceiverId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Parcel_User_SenderId",
                        column: x => x.SenderId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ParcelStatus",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Status = table.Column<int>(type: "nvarchar(32)", nullable: false),
                    LocationId = table.Column<Guid>(type: "integer", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParcelStatus", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ParcelStatus_Location_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Location",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ParcelStatusGroup",
                columns: table => new
                {
                    ParcelId = table.Column<Guid>(type: "integer", nullable: false),
                    StatusId = table.Column<Guid>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParcelStatusGroup", x => new { x.ParcelId, x.StatusId });
                    table.ForeignKey(
                        name: "FK_ParcelStatusGroup_ParcelStatus_StatusId",
                        column: x => x.StatusId,
                        principalTable: "ParcelStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ParcelStatusGroup_Parcel_ParcelId",
                        column: x => x.ParcelId,
                        principalTable: "Parcel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Account_AccountInformationId",
                table: "Account",
                column: "AccountInformationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Location_UserId",
                table: "Location",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Parcel_CourierId",
                table: "Parcel",
                column: "CourierId");

            migrationBuilder.CreateIndex(
                name: "IX_Parcel_ReceiverId",
                table: "Parcel",
                column: "ReceiverId");

            migrationBuilder.CreateIndex(
                name: "IX_Parcel_SenderId",
                table: "Parcel",
                column: "SenderId");

            migrationBuilder.CreateIndex(
                name: "IX_ParcelStatus_LocationId",
                table: "ParcelStatus",
                column: "LocationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ParcelStatusGroup_StatusId",
                table: "ParcelStatusGroup",
                column: "StatusId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ParcelStatusGroup");

            migrationBuilder.DropTable(
                name: "ParcelStatus");

            migrationBuilder.DropTable(
                name: "Parcel");

            migrationBuilder.DropTable(
                name: "Location");

            migrationBuilder.DropTable(
                name: "Account");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
