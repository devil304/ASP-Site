namespace ASP_Site.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ASP_Site : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Prods",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Cat = c.String(),
                        Name = c.String(),
                        Desc = c.String(),
                        Price = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Mail = c.String(),
                        Name = c.String(),
                        Pass = c.String(),
                        LastLogin = c.DateTime(nullable: false),
                        AType = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
            DropTable("dbo.Prods");
        }
    }
}
