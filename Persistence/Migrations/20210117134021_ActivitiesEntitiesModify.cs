using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ActivitiesEntitiesModify : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Value",
                table: "Activities",
                newName: "Venue");

            migrationBuilder.RenameColumn(
                name: "Cateory",
                table: "Activities",
                newName: "Category");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Venue",
                table: "Activities",
                newName: "Value");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Activities",
                newName: "Cateory");
        }
    }
}
